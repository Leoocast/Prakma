import { setState, getState } from "../../../libs/prakma/prakma";

const code = {
    writePhrase(){
        const phrase = ['Prakma', 'is', 'awesome!']
        let counter = 0

        setInterval(() => {
            setState({phrase: phrase[counter]})
            counter++
            if(counter > 2)
                counter = 0

        }, 600)
    },
    writeDate(){
        setInterval(() => {
            const time = this.getTime()
            setState({time})
            
            const newTime = getState().time

            console.log("Time: ", newTime)
        }, 1000)
    },
    getTime(){
        const today = new Date()
        const time = today.getHours() + ':' + today.getMinutes() + ':' + (today.getSeconds() > 9 ? today.getSeconds() : '0' + today.getSeconds())

        return time
    },
    init(){
        const time = this.getTime()
        setState({time: time, phrase: 'Prakma'})

        this.writePhrase()
        this.writeDate()
    }
}

code.init()