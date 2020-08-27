const Header = () => Comp("h1", {
  className: "prueba"
}, "Este es el header");

const Main = () => Comp("div", null, Comp(Header, null), Comp("p", null, "Este es el cuerpo"));

const app = document.getElementById('app');
app.appendChild(Main());