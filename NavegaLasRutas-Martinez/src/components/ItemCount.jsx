import { useState } from 'react'

const ItemCount = ({ initial = 1, stock, onAdd }) => {
  const [count, setCount] = useState(initial)

  const handleIncrease = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const handleAddToCart = () => {
    if (stock > 0) {
      onAdd(count)
    }
  }

  return (
    <div className="item-count">
      <div className="item-count__controls">
        <button onClick={handleDecrease} disabled={count <= 1}>
          -
        </button>
        <span>{count}</span>
        <button onClick={handleIncrease} disabled={count >= stock}>
          +
        </button>
      </div>
      <button
        className="item-count__add-btn"
        onClick={handleAddToCart}
        disabled={stock === 0}
      >
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount
