function Prakma(tag, attrs, ...children) {
    if (typeof tag === 'function') 
        return tag(attrs, children)

    //If the tag is an object. Or is an element or is a function, so, or return it or run it.  

    //Si el tag es object. O es un elemento, o es una función, entonces, o retornas o ejecutas.
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

    //The html common tags will be strings to create the element.     
    
    //Los tags normales de html seran strings para crear html.
    if (typeof tag === 'string') {
        
        //Fragments to add multiple children to the initial node.

        //Fragmentos para agregar multiples hijos al nodo inical
        const fragments = document.createDocumentFragment()
        const element = document.createElement(tag)

        //Set the attributes if is a button or div, this isn't in the global scope yet.
        //When I controlled all the attributes it will be.

        //Agregamos los atributos si es un botón o div, aún no se pasa a global. En cuanto se controlen
        //la mayoría de los atributos esto irá fuera del if del botón.
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

        //If is a button, set the click.

        //Si es un botón, le seteamos el click
        if (tag === 'button') {
            if (attrs.onClick != undefined) {
                element.addEventListener('click', attrs.onClick)
            }

        }

        //If is a select, set onChange.

        //Si es un select, le seteamos el onChange
        if (tag === 'select')
            if (attrs.onChange != undefined)
                element.addEventListener('change', attrs.onChange)

        //If there are some styles, we need to time it out for create the element first. The other way
        //it create the element and don't give the styles because doesn't exists.

        //Verificando si vienen algunos estilos, es necesario el time out 
        //para que se cree primero el elemento, de otra manera se crea sin estilo después de dárselo.        
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
            //When you return only a number or a map number.

            // Cuando retornas un número, o map de números.
            else if (typeof child === 'number') {
                const textnode = document.createTextNode(child)
                fragments.appendChild(textnode)
            }
            //If it is an object, it means that the tag function has something inside. Like:
            //<Element><h1>There is something</h1></Element>.

            //Si es un objeto, quiere decir que el la funcin de tag tiene dentro algo
            //<Elemeto><h1>Aqui hay algo</h1></Elemento>.
            else if (typeof child === 'object') {
                try {
                    child.forEach(r => fragments.appendChild(r))
                } catch (error) {
                    child.forEach(r => {

                        //If it's a string just create the node, otherwise loop each element.

                        //Si es string simplemente creas el nodo, si no, iteras sobre cada uno de los elementos
                        if (typeof r === 'string') {
                            const textnode = document.createTextNode(child)
                            fragments.appendChild(textnode)
                        } else {
                            r.forEach(x => {
                                //If is a string merge with html elements.

                                //Si es un string combinado con elementos html.
                                if (typeof x === 'string') { 
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
                
                //Any thing that isn't a html element, object, function, string, number, etc.

                //Cualquier otra cosa que no sea un elemento html, objecto, función, string, number, etc.
                console.log('Not appendable', element)
                console.log('Elements: ', tag, element, attrs, children)
            }
        })

        element.appendChild(fragments)

        //Merge the element with his attributes to return it.

        //Combina el elemento con los atributos para retornarlo.
        Object.assign(element, attrs)

        return element
    }
}