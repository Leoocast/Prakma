import { Select } from './select'
import { Table, TableSelect } from '../tablas/Tables'

const onClickBuscar = (e) => {
    const tabla = new Table('tabla', [["Jesus", "Pechuga", 28]])

    const cardTabla = document.getElementById("cardTabla")

    cardTabla.style.display = "block"

    tabla._adjust()

}

const meses = [
    {
        value : 1,
        text : "Enero"
    },
    {
        value : 2,
        text : "Febrero"
    },
    {
        value : 3,
        text : "Marzo"
    },
    {
        value : 4,
        text : "Abril"
    },
    {
        value : 5,
        text : "Mayo"
    },
    {
        value : 6,
        text : "Junio"
    },
    {
        value : 7,
        text : "Julio"
    },
    {
        value : 8,
        text : "Agosto"
    },
    {
        value : 9,
        text : "Septiembre"
    },
    {
        value : 10,
        text : "Octubre"
    },
    {
        value : 11,
        text : "Noviembre"
    },
    {
        value : 12,
        text : "Diciembre"
    },
]

const annios = [
    {
        value: 1,
        text: "2020"
    },
    {
        value: 2,
        text: "2019"
    }
]

const organizaciones = [
    {
        value: 1,
        text : "Clientes A3T"
    },
    {
        value: 2,
        text : "Thermion"
    }
]

const grupoEmpresas = [
    {
        value: 1,
        text : "Grupo Alsea"
    },
    {
        value: 2,
        text : "Grupo Bachoco"
    }
]

const Clientes = [
    {
        value: 1,
        text : "Prueba"
    }
]

const orgOnChange = (e) => {
    const id = e.target.value

    const ddlGrupo = document.getElementById('ddlGrupoEmpresa')

    //Prueba de seleccionar A3T
    if (id == 1) 
        grupoEmpresas.forEach(grupo => {
            const option = document.createElement('option')
            option.value = grupo.value
            option.text = grupo.text
            ddlGrupo.add(option)
        })
}

const grupoOnChange = async (e) => {
    const id = e.target.value

    if(id == 0) return

    const result = await fetch('https://jsonplaceholder.typicode.com/albums').then(r => r.json())

    const ddlCliente = document.getElementById('ddlCliente')

    ddlCliente.options.length = 1

    if (id == 1) 
        result.forEach(item => {
            const option = document.createElement('option')
            option.value = item.id
            option.text = item.title
            ddlCliente.add(option)
        })
    else
        Clientes.forEach(item => {
            const option = document.createElement('option')
            option.value = item.value
            option.text = item.text
            ddlCliente.add(option)
        })
}

export const SelectsHeader = [
    <Select id="dllMes" col="col-md-2" tipo="mes" opciones={meses}/>,
    <Select id="ddlAnnio" col="col-md-2" tipo="año" opciones={annios}/>,
    <Select id="ddlOrganizacion" col="col-md-2" tipo="organización" opciones={organizaciones} onChangeHandler={orgOnChange}/>,
    <Select id="ddlGrupoEmpresa" col="col-md-2" tipo="grupo empresa" opciones={{}} onChangeHandler={grupoOnChange}/>,
    <Select id="ddlCliente" col="col-md-3" tipo="cliente" opciones={{}}/>,
    <div className="col-md-1">
        <button className="btn btn-primary " onClick={onClickBuscar}>Buscar</button>
    </div>
]