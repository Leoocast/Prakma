import '../../home/components/welcome/welcome.style.sass'
import { useState } from '../../../libs/prakma/hooks'
import { awaitDom, getState, setState } from '../../../libs/prakma/prakma'
import { addClick, get, set }from '../../../libs/utils/dom.js'
import '../../../libs/extensions/html'


export const Main = () => {
    const phrase = ['Prakma', 'is', 'awesome!']
    
    let counter = 0

    const [title, setTitle] = useState("Prakma")    

    const handleTitle = () => setTitle(title => {
        counter++
    
        if(counter > 2)
            counter = 0
            
        return phrase[counter]
    })

    const checkState = () => {
        const state = getState()

        get('state').insertComponent(
            <pre>
                {JSON.stringify(state)}
            </pre>
        )
    }

    const start = (() => {
        awaitDom("#input", input => 
            input.addEventListener('keyup', () => 
                setTitle(
                    () => input.value == "" ? "Prakma" : input.value,
                    () => checkState())
            )
        )
    })()

    return (
        <div>
        <div class="container prakma-hook">
        <img src="img/new_prakma_logo.png" class="fall-down logo"></img>
            <h1 class="zoom-in">
                {title}
            </h1>
            <div>
                
            </div>
            <h2 class="blur-to-center prakma-hook">
                <button class="btn btn-default mr-2" onClick={handleTitle}>Update!</button>
                <button class="btn btn-default" onClick={checkState}>View state!</button>
            </h2>
            <div>
                <input id="input" placeholder="Type something" class="form-control" type="text" />
            </div>
        </div>
        <div class="text-center pt-2">
           <p>© 2021 - Leo Castellanos</p>
        </div>
            <div class="container mt-0" id="state"></div>
        </div>
    )
}