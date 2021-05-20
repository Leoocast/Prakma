import { PrakmaController } from "./controller";

class CharacterController extends PrakmaController{
    constructor(){
        super('character/')
    }

    async getMorty(){
        return this.get('2')
    }
}

export const characterController = new CharacterController() 