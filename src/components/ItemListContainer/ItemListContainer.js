import { Cards } from '../Cards/Cards'
import './ItemListContainer.scss'


export const ItemListContainer = ({greeting}) => {
    return (
        <section className="item-list-container">
            <h2 className="item-list-title">{greeting}</h2>
            <hr/>
            <Cards title="Prod 1" descript="algo"/>
            <Cards title="Prod 2" descript="algo"/>
        </section>
    )
}