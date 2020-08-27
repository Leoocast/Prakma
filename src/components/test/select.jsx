module.exports.Select = ({tipo, opciones}) => (
    <div>
        <select className="form-select" aria-label="Default select example">
            <option selected>Seleccione {tipo}</option>
            {opciones.map(r => 
                <option value={r.value}>{r.text}</option>
            )}
        </select>
    </div>
)