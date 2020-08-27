module.exports.Select = ({id, col, tipo, opciones, onChangeHandler}) => (
    <div className={col}>
        <select id={id} onChange={onChangeHandler} className="form-select" aria-label="Default select example">
            <option selected>Seleccione {tipo}</option>
            {
                opciones.length > 0 
                ?
                    opciones.map(r => <option value={r.value}>{r.text}</option>) 
                : 
                    ''
            }
        </select>
    </div>
)