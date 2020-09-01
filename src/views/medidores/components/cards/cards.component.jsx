const styles = {
    margin: "10px"
}

const stylesTabla = {
    display: "none",
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

export const CardTable = ({idCard,  idTable, arrayTd}) => (
    <div id={idCard} className="card" style={stylesTabla}>
        <div className="card-body">
            <div className="row">
                <table id={idTable} className="table table-striped">
                    <thead>
                        <tr>
                            {arrayTd.map(r => <th>{r}</th>)}
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
)