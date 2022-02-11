
export const ItemDetail = ({name, id, desc, price, image, category}) => {

    return(
        <div>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <h4>Detalles del producto elegido:</h4>
            <p>{desc}</p>
            <p>Precio: ${price} </p>
        </div>
    )
}