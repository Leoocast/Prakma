const styles = {
    margin: "10px"
}

export const Card = ({objectList}) => (
    <div className="card" style={styles}>
        <div className="card-body">
            <div className="row">
                {objectList.map(r => r)}
            </div>
        </div>
    </div>
)

export const CardTable = ({id}) => (
    <div className="card" style={styles}>
        <div className="card-body">
            <div className="row">
                <table className="table" id={id}>
                    <thead>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>10</td>
                            <td>10</td>
                            <td>10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
)