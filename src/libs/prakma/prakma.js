import { Hash } from '../hash/hash'

const hash = new Hash()

export const prakmaState = (json, code, render = true, ...objects) => {
    setTimeout(() => {
        hash.Update(json, render, ...objects)
        if(code !== undefined){
            Object.assign(code.state, json, ...objects)
        }
    }, 0)
}

const code = {

    //#region Necesario para manejar el estado
    state: {},
    setState(json, render = false, ...objects){
        prakmaState(json, code, !render, ...objects)
    },
    getState(){
        return code.state
    },
    //#endregion 
}

export const codePublic = code

export const awaitDom = (element, callback) => { 

    let tries = 0
    const interval = setInterval(async () => {

        try {

            const el = document.querySelector(element)

            if(el != null){
                clearInterval(interval)

                return await callback(el)
            } 
    
            if(tries === 10){
                console.error("[Prakma] awaitDom()\n" + element + " not found in the DOM")
                clearInterval(interval)
            }
            
            tries++
        }
        catch(ex){
            console.error("[Prakma] awaitDom()\n" + element + " is not a valid selector")
            clearInterval(interval)
            return
        }
     
    }, 1);    
}

export const awaitReturn = (callback, time) => { 
    setTimeout(async () => {
        return callback
    }, time);    
}


export const awaitStateElement = (element) => { 

    let tries = 0
    const interval = setInterval(async () => {

        try {

            const state = getState()

            if(state[element] != null){
                clearInterval(interval)
                return state[element]
            } 
    
            if(tries === 10){
                console.error("[Prakma] awaitState()\n" + element + " not found in the state")
                clearInterval(interval)
            }
            
            tries++
        }
        catch(ex){
            console.error("[Prakma] awaitState()\n" + element + " is not a valid property")
            clearInterval(interval)
            return
        }
     
    }, 10);    
}

export const awaitState = async (element, fn, fn2) => { 

    console.log(fn)
    await fn()

    const interval = setInterval(async () => {

        try {

            const state = getState()

            if(state[element] != null){
                clearInterval(interval)
                return fn2()
            } 
        }
        catch(ex){
            console.error("[Prakma] awaitState()\n" + element + " is not a valid property")
            clearInterval(interval)
            return
        }
     
    }, 100);    
}
//Opcional pero recomendado
export const setState = code.setState
export const getState = code.getState