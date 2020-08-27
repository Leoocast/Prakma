const Header = require('../src/components/header')

const Main = () =>(
    <div>
        <Header />
        <p>Este es el cuerpo holi</p>
    </div>
)

const app = document.getElementById('app')
app.appendChild(Main())