export const get = id => document.getElementById(id)

export const getSelectedOptionText = id => {
    const element = get(id)

    return element.options[element.selectedIndex].text
}

export const getQuery = document.querySelector.bind(document)

export const getQueryAll = document.querySelectorAll.bind(document)

export const addClick = (query, fn) => get(query).addEventListener('click', fn())

export const click = id => get(id).click()

export const valueof = id => get(id).value

export const set = (id, value) => get(id).value = value

export const setOpacity = (query, opacity) => {
    const element = getQuery(query)
    if(element !== null)
        element.style.opacity = opacity
}

export const show = query => {
    const elements = Array.from(getQueryAll(query))
    elements.forEach(r => r.classList.remove('d-none'))
}

export const hide = query => {
    const elements = Array.from(getQueryAll(query))
    elements.forEach(r => r.classList.add('d-none'))
}

export const clearHTML = query => {
    const elements = Array.from(getQueryAll(query))
    elements.forEach(r => r.innerHTML = '')        
}

export const remove = (query) => {
    const elements = Array.from(getQueryAll(query))
    elements.forEach(r => r.remove())        
}

export const setImage = (query, image) => {
    const elements = Array.from(getQueryAll(query))
    elements.forEach(r => r.src = image)
}

export function validateInputs(divs, isElement = false){
    
    const fn = (input) => {
        let flag = true
        switch (input.type) {
            case 'text':
            case 'number':
            case 'select-one':
                flag = !(input.value === '' || input.value === '0')
                break
            case 'radio':
            case 'checkbox':
                flag = input.checked
                break
            case 'file':
                flag = !(input.files.length < 1) 
                break
        }
        return flag
    }
    
    if (divs instanceof Array) {
        for (const div of divs) {
            const result = validateInputs(div, isElement)
    
            if(!result) return result
        } 
        return true
    } else {
        if(isElement)
            return pipeElements(divs, fn, true)
        else 
            return pipeInputsDiv(divs, fn, true)
    }
}

export function enableInputs(divs, enable = true, isElement = false){
    const fn = r => {
        if (enable) 
            r.removeAttribute('disabled')
         else 
            r.setAttribute('disabled', 'disabled')
        }
    
    if (divs instanceof Array) 
        divs.forEach(r => enableInputs(r, enable, isElement))
    else
        if(isElement)
            pipeElements(divs, fn)
        else
            pipeInputsDiv(divs, fn)
}

export function clearInputs(divs, isElement = false){
    
    const fn = (input) => {
        switch (input.type) {
            case 'text':
            case 'number':
                input.value = ''
                break
            case 'select-one':
                input.value = '0'
                input.dispatchEvent(new Event('change'))
                break
            case 'radio':
            case 'checkbox':
                input.checked = false
                break
            case 'file':
                input.value = null
                break
        }
    }
    
    if (divs instanceof Array) 
        divs.forEach(r => clearInputs(r, isElement))
    else 
        if(isElement)
            pipeElements(divs, fn)
        else 
            pipeInputsDiv(divs, fn)
    
}

function pipeInputsDiv(div, fn, returns = false){
    div = typeof(div) === typeof({}) ? div : document.getElementById(div)
    
    const inputs  = div.querySelectorAll('input, select')

    for (const input of inputs) {
        if (returns && !fn(input)) 
            return false
        else
            fn(input)
    }

    if(returns)
        return true
}

function pipeElements(input, fn, returns = false){
    input = typeof(input) === typeof({}) ? input : document.getElementById(input)
 
    if (returns && !fn(input))
        return false
    else
        fn(input)
    
    if(returns)
        return true
}