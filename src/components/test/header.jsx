const styles = {
    marginLeft: "15px",
    transition: "all 500ms ease-in-out"
}

module.exports.Header = ({text, name, actionButton1, actionButton2}) => (
    <div>
        <h1 className="headline">{text} {name}</h1>
        <button onClick={actionButton1} className="btn btn-primary">Sorprenderse</button>
        <button style={styles} onClick={actionButton2} className="btn btn-primary">Cambia mi texto</button>
    </div>
)