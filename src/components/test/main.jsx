
const Header = require('./header')
const Card = require('./card')
const SelectsHeader = require('./selectsHeader')

module.exports = () =>(
    <div>
        <Header />
        <Card objectList={SelectsHeader}/>
    </div>
)