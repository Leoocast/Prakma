//Esta función sirve para cortar por medio del index, si es que se repite algún dato en 
//el texto del div
String.prototype.replaceAt = function(index, oldValue, newValue){
    const parte1 = this.substring(0, index)
    let parte2   = this.substring(index, this.length)
    parte2 = parte2.replace(oldValue, newValue)
    
    return parte1 + parte2
}

//función para obtener un valor de una propiedad o propiedades anidada(s) de un objeto
const getNestedProperty = function(obj, property){
    let objTemp = obj

    property.forEach((r, i) => objTemp = objTemp[property[i]])

    return objTemp === undefined ? `##${property}##` : objTemp
}

//función para verificar si todas las propiedades dadas están dentro de un objeto
const hasAllProperties = function (obj, properties){
    let objTemp = obj

    properties.forEach((r, i) => {

        //si el objeto es nulo o no se encontro la propiedad actual en el objeto regresamos falso
        if(!objTemp || !objTemp.hasOwnProperty(r))          
            return false

        /*  en caso contrario igualamos el objeto temporal a su propiedad segun el índice actual 
            para seguir verificando si existen todas las propiedadas anidadas   
        */
        objTemp = objTemp[properties[i]]
    })

    return true
}

//Para no repetir el código del split
const getDataset = function (element, dataset) {
    return element.dataset[dataset].split('|').filter(r => r !== "")
}

export function FormatHtml(data){
    const xpath = `//*[contains(text(),'##')]`;
    const divs = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);

    //Necesario para guardar los divs después de iterar.
    //divs es como un IEnumerable
    const elementsChange = []

    let nextDiv = divs.iterateNext()

    while(nextDiv){
        elementsChange.push(nextDiv)
        nextDiv = divs.iterateNext()
    }

    elementsChange.filter(r => r !== null)
        .forEach(item => _changeValue(item, data))

    if(Object.keys(data).length === 1){
        const key = Object.keys(data)[0]
        const elementos = elementsChange.filter(r => r.dataset.keys === key + '|') //[0]
        
        return elementos
    }

    return elementsChange
}


function _changeValue(element, data, isUpdate = false){
        
    let text = element.innerHTML
      
    //Obteniendo los textos a modificar
    const stringToReplace = text.split("##").filter((r, i) => i % 2 !== 0)
    
    //Esto es para que no se muevan tags no seleccionados
    const isThere = stringToReplace.filter(r => hasAllProperties(data, r.split('.')))   
    
    //Iterando sobre ellos y remplazando. Agregando keys y content
    let keys = ""
    let content = ""
    let indexOf = ""

    stringToReplace.forEach(item => {
        keys += `${item}|`
        content += `${getNestedProperty(data, item.split('.'))}|`
        indexOf += `${text.indexOf(`##${item}##`)}|`
        text = text.replace(`##${item}##`, getNestedProperty(data, item.split('.')))       
    })

    if(isThere.length === 0) {
        element.setAttribute('data-content', `##${stringToReplace}##`)
        element.setAttribute('data-keys', keys)
        element.setAttribute('data-indexof', indexOf)
    } else {
        //Se agrega el atributo data-keys para usarlo al modificar
        element.setAttribute('data-keys', keys)
        element.setAttribute('data-indexof', indexOf)
        element.setAttribute('data-content', content)
        element.innerHTML = text
    }
}

function _changeByContent(element, json){
    //Se obtienen los datos a modificar
    let contents = getDataset(element, 'content')
    let keys = getDataset(element, 'keys')
    let index = getDataset(element, 'indexof')

    let text = element.innerHTML

    let keysdataSet = ""
    let contentDataset = ""
    let indexOfDataset = ""
    
    for (let i = 0; i <= contents.length; i++) {
        const content = contents[i]
        const key = keys[i]
        
        //Si existe el objeto a modificar en el json enviado
        if(content !== undefined && json[key] !== undefined) {
            keysdataSet += `${key}|`
            contentDataset += `${json[key]}|`
            indexOfDataset += `${index[i]}|`
            text = text.replaceAt(index[i], content.replace(/ /g,' '), json[key])
        }
    }

    element.setAttribute('data-keys', keysdataSet)
    element.setAttribute('data-content', contentDataset)
    element.setAttribute('data-indexof', indexOfDataset)

    element.innerHTML = text

    //Esto esta curada, verificar que otras posibilidades hay
    element.style.display = 'block'
}

export function UpdateHtml(elements, json){    
    const jsonKeys = Object.keys(json)

    const elementsChange = elements.filter(r => jsonKeys.some(x => r.dataset.keys.includes(x +"|")))

    elementsChange.forEach(item => _changeByContent(item, json))
}