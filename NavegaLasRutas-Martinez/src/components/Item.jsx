import { Link } from 'react-router-dom'

const Item = ({ product }) => {
  const { id, name, price, image, category } = product

  return (
    <article className="item-card">
      <img src={image} alt={name} className="item-card__img" />
      <h3 className="item-card__title">{name}</h3>
      <p className="item-card__category">Categoría: {category}</p>
      <p className="item-card__price">${price}</p>
      <Link to={`/item/${id}`} className="item-card__detail-link">
        Ver detalle
      </Link>
    </article>
  )
}

export default Item
