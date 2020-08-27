function Comp(tag, attrs, ...children) {
    
    //Los custom components serán funciones
    if (typeof tag === 'object') 
        return Object.entries(tag)[0][1]()
    
    //Los tags normales de html serán strings para crear html
    if (typeof tag === 'string') {
        
        //Fragmentos para agregar multiples hijos al nodo inical
        const fragments = document.createDocumentFragment()
        const element = document.createElement(tag)
        children.forEach(child => {
            if (child instanceof HTMLElement) { 
                fragments.appendChild(child)
            } else if (typeof child === 'string'){
                const textnode = document.createTextNode(child)
                fragments.appendChild(textnode)
            } else {
                //Cualquier otra cosa que no sea un elemento html o string
                console.log('not appendable', element);
            }
        })

        element.appendChild(fragments)
       
        //Combinar el elemento con los atributos
        Object.assign(element, attrs)
        return element
    }
}