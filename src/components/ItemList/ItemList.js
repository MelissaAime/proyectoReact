import { Item } from "../Item/Item"

export const ItemList =  ( {products} ) => {
    return (
        <>
            <h2>Mis productos:</h2>
            <div className="row">
                { products.map( (el) => <Item key={el.id} {...el} /> ) }
            </div>
        </>
    )
}