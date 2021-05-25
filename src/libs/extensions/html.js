HTMLElement.prototype.insertComponent = function(html){ 
    this.innerHTML = ""
    this.append(html)
}

HTMLElement.prototype.clear = function(html){ 
    this.innerHTML = ""
}

HTMLElement.prototype.render = function() { 
    return this.outerHTML
}
