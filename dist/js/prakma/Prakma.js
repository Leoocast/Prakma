function Prakma(tag, attrs, ...children) {

    if (typeof tag === 'function') {

        return tag(attrs, children)
    }

    //Si el tag es object. O es un elemento, o es una funcin, entonces, o retornas o ejecutas
    if (typeof tag === 'object')
        if (tag instanceof Element)
            return tag
        else {
            if (Object.entries(tag)[1][1] instanceof Function) {
                return Object.entries(tag)[1][1](attrs)
            }
            else {
                return tag
            }
        }

    //Los tags normales de html sern strings para crear html
    if (typeof tag === 'string') {
        //Fragmentos para agregar multiples hijos al nodo inical
        const fragments = document.createDocumentFragment()
        const element = document.createElement(tag)

        //Agregamos los atributos si es un botn o div, an no se pasa a global. En cuanto se controlen
        //la mayora de los atributos esto ir fuera del if del button.
        if (tag === 'div' || tag === 'button') {
            if (attrs != null) {
                for (item of Object.keys(attrs)) {
                    if (item != 'className' &&
                        item != 'type' &&
                        item != 'onClick' &&
                        item != 'onChange' &&
                        item != 'style') {

                        element.setAttribute(item, attrs[item])
                    }
                }
            }
        }

        //Si es un botn, le seteamos el click
        if (tag === 'button') {
            if (attrs.onClick != undefined) {
                element.addEventListener('click', attrs.onClick)
            }

        }
        //Si es un select, le seteamos el onChange
        if (tag === 'select')
            if (attrs.onChange != undefined)
                element.addEventListener('change', attrs.onChange)

        //Verificando si vienen algunos estilos, es necesario el time out 
        //para que se cree primero el elemento, de otra manera se crea sin estilo despus de drselo        
        if (attrs != null)
            if (attrs.style != undefined) {
                setTimeout(() => {
                    Object.assign(element.style, attrs.style)
                }, 0)
            }

        children.forEach(child => {
            if (child instanceof HTMLElement) {
                fragments.appendChild(child)
            } else if (typeof child === 'string') {
                const textnode = document.createTextNode(child)
                fragments.appendChild(textnode)
            }
            // Cuando retornas un nmero, o map de nmeros
            else if (typeof child === 'number') {
                const textnode = document.createTextNode(child)
                fragments.appendChild(textnode)
            }
            //Si es un objeto, quiere decir que el la funcin de tag tiene dentro algo
            //<elemeto><h1>Aqui hay algo</h1></elemento>
            else if (typeof child === 'object') {
                try {
                    child.forEach(r => fragments.appendChild(r))
                } catch (error) {
                    child.forEach(r => {
                        //Si es string simplemente creas el nodo, si no, iteras sobre cada uno de los elementos
                        if (typeof r === 'string') {
                            const textnode = document.createTextNode(child)
                            fragments.appendChild(textnode)
                        } else {
                            r.forEach(x => {
                                if (typeof x === 'string') { //Si es un texto combinado con elementos
                                    const textnode = document.createTextNode(x)
                                    fragments.appendChild(textnode)
                                } else {
                                    fragments.appendChild(x)
                                }
                            })
                        }                               
                    })
                }
            }
            else {
                //Cualquier otra cosa que no sea un elemento html, string, number
                console.log(tag, element, attrs, children)
                console.log('not appendable', element)
            }
        })

        element.appendChild(fragments)

        //Combinar el elemento con los atributos
        Object.assign(element, attrs)
        return element
    }
}