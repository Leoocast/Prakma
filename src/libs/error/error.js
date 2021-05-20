class CustomError extends Error {
    constructor(message){
        super(message)
        
        this.customMessage = ''
        this.fixTip = ''
        this.stack = this.stack.split(this.name)[1].split('at ')[1]
        this.original = {}

        this.styles= 
        {
            red: "font-size:15px; color:white; background-color: indianred",
            sea: "font-size:14px; color:white; background-color: lightseagreen",
            font15: "font-size:15px;"
        }
    }

    consoleError(){
        console.log(`%c ${this.name}: \n${this.customMessage}`, this.styles.red)
        
        if(this.fixTip != '')
            console.log(`%c 🔨 How to fix?: \n`, this.styles.sea, `-> ${this.fixTip}`)
    }
}

export class FetchError extends CustomError{
    constructor(url, result, originalError = null, fixTip = '', message = ''){
        super(message)
        this.name = "⚠️ " + message
        this.original = originalError
        this.customMessage = ` An error has occurred on the request: \n At -> ${url}\n`
        this.fixTip = fixTip
        this.result = result
    }
}

export class NullOrEmpty extends CustomError{
    constructor(originalError = null, message = ''){
        super(message)
        this.name = "NullOrEmpty"
        this.original = fixTip
    }
}