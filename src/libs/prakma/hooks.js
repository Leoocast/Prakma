import { getState, setState } from './prakma'

function getSeed() {
    const d = new Date()
    const h = d.getHours()
    const m = d.getMinutes()
    const s = d.getSeconds()
    const ms = d.getMilliseconds()
    return (h + m + s + ms + h + m + s + ms + 
       Math.floor((Math.random() * (9999 - 0) + 0))).toString()
  }

export const useState = (defaultValue) => {

    const seedState = getSeed()

    setState({[seedState]: defaultValue})
   
    const setStateCustom = function(fn, callback) {
        let stateValue = getState()[seedState]

        setTimeout(() => {
           const result = fn(stateValue)

           setState({[seedState] : result})

           setTimeout(() => {
               callback(result)
           }, 0)
        }, 0)
        
    }
    
    return [`##${seedState}##`, setStateCustom]
}
