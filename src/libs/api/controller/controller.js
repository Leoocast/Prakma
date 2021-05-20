import { ApiEngine } from '../api.code'
import { Request } from '../../request/request'

export class PrakmaController{
    constructor(controller, needAuth = false){
        this.ApiEngine = new ApiEngine(controller)
        this.needAuth = needAuth
    }

    async get(method){
        return Request.GET(this.ApiEngine.Url + method, this.needAuth)
    }

    async post(method, data, fns = []){
        return Request.POST(this.ApiEngine.Url + method, data, this.needAuth, fns)
    }
}