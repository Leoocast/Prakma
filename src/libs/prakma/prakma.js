import { Hash } from '../hash/hash'

const hash = new Hash()

export const prakmaState = (json, code, ...objects) => {
    setTimeout(() => {
        hash.Update(json, true, ...objects)
        if(code !== undefined){
            Object.assign(code.state, json, ...objects)
        }
    }, 0)
}

const code = {

    //#region Necesario para manejar el estado
    state: {},
    setState(json, ...objects){
        prakmaState(json, code, ...objects)
    },
    getState(){
        return code.state
    },
    //#endregion 
}

//Opcional pero recomendado
export const setState = code.setState
export const getState = code.getState