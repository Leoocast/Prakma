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

        if(!this.isRendered)
            this.Render(json, ...objects)
            
        else if(!this._stateHasChange(json, ...objects))
            return

        else if(render && this.isRendered){
            //Muy importante que se pase la data que viene como parámetro, no el this.data
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

        this.elementsChange = FormatHtml(this.data)
        this.isRendered = true
    }

    _stateHasChange(newData, ...objects){

        Object.assign(newData, ...objects)

        const keys = Object.keys(newData)
        
        const result = keys.map(key => newData[key] === this.data[key])

        return result.some(r => r === false)
    }
}