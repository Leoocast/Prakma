import { FormatHtml, UpdateHtml } from "./engine"

export class Hash {
    
    constructor(){
        this.children = []
        this.div = []
        this.elementsChange = []
        this.data = {}

        this.isRendered = false
    }

    Update(json, render = true, ...objects){
        
        if(!this.isRendered || !render)
            this.Render(json, ...objects)
            
        else if(!this._stateHasChange(json, ...objects))
            return

        else if(render && this.isRendered){

            this.elementsChange = this._getNewElements(json)

            Object.assign(this.data, json, ...objects)

            UpdateHtml(this.elementsChange, json)
        }
        else if(render)
            console.error("[HASH ERROR] -> You have to render first!")
    }

    Render(json, ...objects){

        if (Object.keys(json).length === 0) 
            return 

        Object.assign(this.data, json, ...objects)

        const tmp = FormatHtml(this.data)
 
        const newElements = tmp.filter(r => !this.elementsChange.includes(r))
 
        this.elementsChange = [...this.elementsChange, ...newElements]

        this.isRendered = true

        this.elementsChange = this.elementsChange.filter(r => document.body.contains(r))
    }

    _getNewElements(json){

        const newElements = Array.from(this.elementsChange)
        
        let valid = false
        Object.keys(json).forEach(r => {
            if(!Object.keys(this.data).includes(r)){      
                valid = true
                const els = FormatHtml({[r]: json[r]})
                newElements.push(...els)
            }
        })   
        //Esto sigue en prueba :D
        if(!valid)
            return this.elementsChange
            
        return newElements
    }

    _stateHasChange(newData, ...objects){

        Object.assign(newData, ...objects)

        const keys = Object.keys(newData)
        
        const result = keys.map(key => newData[key] === this.data[key])

        return result.some(r => r === false)
    }
}