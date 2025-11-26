import ItemCount from './ItemCount'

const ItemDetail = ({ product }) => {
  const { name, description, price, image, stock, category } = product

  const handleAdd = (quantity) => {
    console.log(`Agregaste ${quantity} unidad(es) de "${name}" al carrito`)
  }

  return (
    <section className="item-detail">
      <img src={image} alt={name} className="item-detail__img" />

      <div className="item-detail__info">
        <h2>{name}</h2>
        <p className="item-detail__category">Categoría: {category}</p>
        <p className="item-detail__description">{description}</p>
        <p className="item-detail__price">Precio: ${price}</p>
        <p className="item-detail__stock">Stock disponible: {stock}</p>

        <ItemCount initial={1} stock={stock} onAdd={handleAdd} />
      </div>
    </section>
  )
}

export default ItemDetail
