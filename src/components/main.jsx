const Header = require('../components/header')

const cambiarP = () => document.getElementById('cuerpo').innerHTML = "Cambiado :O"

const cambiarTexto = function () {
    this.innerHTML = "Wow"
}

module.exports = () =>(
    <div>
        <Header text="Bienvenido" name="Leo" actionButton1={cambiarP} actionButton2={cambiarTexto}/>
        <p id="cuerpo">Este es el cuerpo asd</p>
    </div>
)