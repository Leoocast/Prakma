const styles = {
    marginLeft: "15px"
}

module.exports.Header = ({text, name, actionButton1, actionButton2}) => (
    <div>
        <h1 className="headline">{text} {name}</h1>
        <button onClick={actionButton1}>Cambiar P</button>
        <button style={styles} onClick={actionButton2}>Cambia mi texto</button>
    </div>
)