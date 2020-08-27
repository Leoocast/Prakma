const React = {
    createElement: (tag, attrs, ...children) => {
        
        //Los custom components serán funciones y se le pasan los atributos del papa al hijo
        //uf, ta kbron, me costó esta
        if (typeof tag === 'object') {
            return Object.entries(tag)[0][1](attrs)
        }

        //Los tags normales de html serán strings para crear html
        if (typeof tag === 'string') {
            //Fragmentos para agregar multiples hijos al nodo inical
            const fragments = document.createDocumentFragment()
            const element = document.createElement(tag)

            //Si es un botón, le seteamos el click
            if(tag === 'button')
                if(attrs.onClick != undefined)
                    element.addEventListener('click', attrs.onClick)

            //Verificando si vienen algunos estilos, es necesario el time out 
            //para que se cree primero el elemento, de otra manera se crea sin estilo después de dárselo        
            if(attrs != null)                    
                if(attrs.style != undefined)
                    setTimeout(() => {
                        Object.assign(element.style, attrs.style)
                    }, 0)

            children.forEach(child => {
                if (child instanceof HTMLElement) { 
                    fragments.appendChild(child)
                } else if (typeof child === 'string'){
                    const textnode = document.createTextNode(child)
                    fragments.appendChild(textnode)
                } else {
                    //Cualquier otra cosa que no sea un elemento html o string
                    console.log('not appendable', element)
                }
            })
    
            element.appendChild(fragments)
           
            //Combinar el elemento con los atributos
            Object.assign(element, attrs)
           
            return element
        }
    }
}