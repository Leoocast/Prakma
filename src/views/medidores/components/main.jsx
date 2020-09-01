import { Header } from '../../../components/header/header.component'
import { Card, CardTable } from './cards/cards.component'
import { SelectsHeader } from './selectsHeader/selectsHeader.component'

const tabla = ["Nombre", "Apellido", "Edad"]

export const Main = () =>(
    <div>
        <Header />
        <Card objectList={SelectsHeader}/>
        <CardTable idCard="cardTabla" idTable="tabla" arrayTd={tabla} />
    </div>
)