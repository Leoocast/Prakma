const Header = () => <h1 className="prueba">Este es el header</h1>

const Main = () =>(
    <div>
        <Header />
        <p>Este es el cuerpo</p>
    </div>
)

const app = document.getElementById('app')
app.appendChild(Main())