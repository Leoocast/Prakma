import { FetchError } from '../error/error'
import { downloadFile } from './extensions'
import { defaultConfig } from './config'

class RequestClass {

    constructor(){
        this.config = defaultConfig
    }

    getAuthHeaders(method){
       
        const t = "Authorization token goes here :)"

        return {
            method: method,
            headers: {
                withCredentials: true,
                credentials: 'include',
                Authorization: t !== null ? t : ''
            }
        }
    }

    setCofig(config){
        this.config = config
    }

    async GET(url, needAuth = false){
        if(needAuth){
            const headers = this.getAuthHeaders('GET')

            this.config = Object.assign(this.config, headers)
        }else{
            this.config.method = 'GET'
        }

        delete this.config.body

        return fetch(url, this.config)
            .then(res => { 
        
                if(res.status != 200)
                    throw new FetchError(url, res, null, '', 'Unauthorized')
                
                return res.json()
            })
            .then(result => {
                if(typeof result ===  'object') 
                    return result

                return JSON.parse(result)                
            })
            .catch( ex => { 
                console.log("ERROR", ex)
                if(ex.result.status === 401){
                    ex.consoleError()
                    return { authenticated : false }
                }
            })
    }

    async POST(url, data = null, needAuth, fns){
        
        if(needAuth){
            const headers = this.getAuthHeaders('POST')
            this.config = Object.assign(this.config, headers)
        }else{
            this.config.method = 'POST'
        }

        if(data != null)
            this.config.body = JSON.stringify(data)

        return fetch(url, this.config)
            .then(res => { 

                console.log("POST", res)
                if(res.status != 200)
                    throw new FetchError(url, res, null, '', 'Unauthorized')

                    const contentType = res.headers.get('content-type')

                    if(contentType === 'application/octet-stream'){
                        const fileName = res.headers.get('content-disposition').split('=')[1]
                        res.blob().then(b => downloadFile(b, fileName))                    
                        return {}
                    }

                return res.json()
            })
            .then(result => {
                if(typeof result ===  'object') 
                    return result

                return JSON.parse(result)                
            
            })
            .finally(r => fns.forEach(fn => fn()))
            .catch( ex => { 
                console.log(ex)
                if(ex.result.status === 401)
                    return ex.consoleError()
            })
    }

    async All(colection){
        return Promise.all(
            colection.map( r => 
                r.data !== undefined
                ?
                this.POST(r.url, r.data)
                :
                this.GET(r.url)
                )
        ).then(results => results)
        .catch( err => {
            err.consoleError()
            return null
        })
    }
}

export const Request = new RequestClass()