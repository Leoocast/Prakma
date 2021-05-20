import { characterController } from '../../../libs/api/controller/characterController'
import { setState, awaitDom, awaitState} from '../../../libs/prakma/prakma'
import { show, setImage, hide } from '../../../libs/utils/dom'
import '../../home/components/welcome/welcome.style.sass'

characterController.getMorty().then(morty => {
    
    setState({morty})

    //hide loader
    hide('#loading')

    //Set image before show
    setImage('#img', morty.image)
    show('#data')
})

export const Main = () =>  (
    <div id="container" class="container mt-5 d-flex justify-content-center text-center">
        {/* This will be your loading component */}
        <div id="loading">Loading...</div>
        
        {/* Once data comes, you can show this */}
        <div id="data" class="d-none">
            <img id="img" src="" alt="" />
            <h2>##morty.name##</h2>
            <h4>##morty.status##</h4>
            <h4>##morty.location.name##</h4>
        </div>
    </div>
) 