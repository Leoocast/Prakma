
const styles = {
    margin: "10px"
}

module.exports.Card = ({objectList}) => (
    <div className="card" style={styles}>
        <div className="card-body">
            <div className="row">
                {objectList.map(r => r)}
            </div>
        </div>
    </div>
)