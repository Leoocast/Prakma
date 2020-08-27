const Header = require('./header')

const cambiarP = () => {
    const p = document.getElementById('cuerpo')
    
    Object.assign(p.style, {
        fontSize: "100px",
        transition: 'font-size 300ms ease-out'
    })

    p.innerHTML = "😲"
}

const cambiarTexto = function () {
    this.innerHTML = "Eres la polla con cebolla"
}

module.exports = () =>(
    <div className="container text-center mt-5">
        <Header text="Bienvenido" name="Leo" actionButton1={cambiarP} actionButton2={cambiarTexto}/>
        <h2 className="text-center mt-2">
            <span id="cuerpo">😃</span>
        </h2>
    </div>
)