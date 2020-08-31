import { Header } from './header'
import { Card, CardTable } from './cards'
import { SelectsHeader } from './selectsHeader/selectsHeader.component'

const tabla = ["Nombre", "Apellido", "Edad"]

export const Main = () =>(
    <div>
        <Header />
        <Card objectList={SelectsHeader}/>
        <CardTable idCard="cardTabla" idTable="tabla" arrayTd={tabla} />
    </div>
)