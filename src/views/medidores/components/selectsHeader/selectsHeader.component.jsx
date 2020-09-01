import * as code from './selectsHeader.code'
import './selectsHeader.style.sass'

import { Select } from '../select/select.component'

export const SelectsHeader = [
    <Select id="dllMes" col="col-md-2 test" tipo="mes" opciones={code.meses}/>,
    <Select id="ddlAnnio" col="col-md-2" tipo="año" opciones={code.annios}/>,
    <Select id="ddlOrganizacion" col="col-md-2" tipo="organización" opciones={code.organizaciones} onChangeHandler={code.orgOnChange}/>,
    <Select id="ddlGrupoEmpresa" col="col-md-2" tipo="grupo empresa" opciones={{}} onChangeHandler={code.grupoOnChange}/>,
    <Select id="ddlCliente" col="col-md-3" tipo="cliente" opciones={{}}/>,
    <div className="col-md-1">
        <button className="btn btn-primary " onClick={code.onClickBuscar}>Buscar</button>
    </div>
]