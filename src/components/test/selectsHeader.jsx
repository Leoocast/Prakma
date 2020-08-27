const Select = require('./select')

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

const organizaciones = [
    {
        value: 1,
        text : "A3T"
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

module.exports = [
    <Select tipo="mes" opciones={meses}/>,
    <Select tipo="organización" opciones={organizaciones}/>,
    <Select tipo="grupo empresa" opciones={grupoEmpresas}/>,
    <Select tipo="cliente" opciones={Clientes}/>,
]