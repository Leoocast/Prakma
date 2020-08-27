import { Header } from './header'
import { Card, CardTable } from './card'
import { SelectsHeader } from './selectsHeader'

export const Main = () =>(
    <div>
        <Header />
        <Card objectList={SelectsHeader}/>
        <CardTable id="tabla"/>
    </div>
)