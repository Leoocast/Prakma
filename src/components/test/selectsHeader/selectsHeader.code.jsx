import { Table, TableSelect } from '../../tablas/Tables'


export const onClickBuscar = (e) => {
    const tabla = new Table('tabla', [["Jesus", "Pechuga", 28]])

    const cardTabla = document.getElementById("cardTabla")

    cardTabla.style.display = "block"

    tabla._adjust()

}

export const meses = [
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

export const annios = [
    {
        value: 1,
        text: "2020"
    },
    {
        value: 2,
        text: "2019"
    }
]

export const organizaciones = [
    {
        value: 1,
        text : "Clientes A3T"
    },
    {
        value: 2,
        text : "Thermion"
    }
]

export const grupoEmpresas = [
    {
        value: 1,
        text : "Grupo Alsea"
    },
    {
        value: 2,
        text : "Grupo Bachoco"
    }
]

export const Clientes = [
    {
        value: 1,
        text : "Prueba"
    }
]

export const orgOnChange = (e) => {
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

export const grupoOnChange = async (e) => {
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