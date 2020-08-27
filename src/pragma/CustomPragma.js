const React = {
    createElement: (tag, attrs, ...children) => {
        
        //Si es una función que solo trae HTML, pues retorna la función
        if (typeof tag === 'function') { return tag(attrs) }

        //Si el tag es object. O es un elemento, o es una función, entonces, o retornas o ejecutas
        if (typeof tag === 'object') 
            if(tag instanceof Element)
                return tag
            else
                return Object.entries(tag)[1][1](attrs)

        //Los tags normales de html serán strings para crear html
        if (typeof tag === 'string') {
            //Fragmentos para agregar multiples hijos al nodo inical
            const fragments = document.createDocumentFragment()
            const element = document.createElement(tag)

            //Si es un botón, le seteamos el click
            if(tag === 'button')
                if(attrs.onClick != undefined)
                    element.addEventListener('click', attrs.onClick)
            
            //Si es un select, le seteamos el onChange
            if(tag === 'select')
                if(attrs.onChange != undefined)
                    element.addEventListener('change', attrs.onChange)

            //Verificando si vienen algunos estilos, es necesario el time out 
            //para que se cree primero el elemento, de otra manera se crea sin estilo después de dárselo        
            if(attrs != null)                    
                if(attrs.style != undefined){
                    setTimeout(() => {
                        Object.assign(element.style, attrs.style)
                    }, 0)
                }

            children.forEach(child => {
                if (child instanceof HTMLElement) { 
                    fragments.appendChild(child)
                } else if (typeof child === 'string'){
                    const textnode = document.createTextNode(child)
                    fragments.appendChild(textnode)
                }
                // Cuando retornas un número, o map de números
                else if(typeof child === 'number'){ 
                    const textnode = document.createTextNode(child)
                    fragments.appendChild(textnode)
                } 
                //Hay que tener cuidado con este, siempre tratar de retornar elementos html
                else if(typeof child === 'object'){ 
                    try {
                        child.forEach(r => fragments.appendChild(r))
                    } catch (error) {
                        child.forEach(r => {
                            const textnode = document.createTextNode(child)
                            fragments.appendChild(textnode)
                        })
                    }
                } 
                else {
                    console.log(tag, element, attrs, children)
                    //Cualquier otra cosa que no sea un elemento html, string, number
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