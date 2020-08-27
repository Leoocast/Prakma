const styles = {
    justifyContent : "space-around"
}

module.exports.Card = ({objectList}) => (
    <div className="card">
        <div className="card-body">
            <div className="row">
                <div className="d-flex" style={styles}>
                    {objectList.map(r => <div>{r}</div>)}
                </div>
            </div>
        </div>
    </div>
)