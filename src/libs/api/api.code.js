import { config } from './config.json'

export class ApiEngine{
    constructor(controller){
        this.Url = `${config.server}${controller}`
    }
}