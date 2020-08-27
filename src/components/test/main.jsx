import { Header } from './header'
import { Card } from './card'
import { SelectsHeader } from './selectsHeader'

export const Main = () =>(
    <div>
        <Header />
        <Card objectList={SelectsHeader}/>
    </div>
)