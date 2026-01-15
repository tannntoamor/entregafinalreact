import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../data/products'
import ItemList from './ItemList'

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)

    const fetchData = async () => {
      try {
        if (categoryId) {
          const filtered = await getProductsByCategory(categoryId)
          setItems(filtered)
        } else {
          const all = await getProducts()
          setItems(all)
        }
      } catch (error) {
        console.error('Error cargando productos', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [categoryId])

  if (loading) {
    return (
      <section className="item-list-container">
        <h2>{greeting}</h2>
        <p>Cargando productos...</p>
      </section>
    )
  }

  return (
    <section className="item-list-container">
      <h2>{greeting}</h2>
      {categoryId && <p>Mostrando categoría: {categoryId}</p>}
      <ItemList items={items} />
    </section>
  )
}

export default ItemListContainer
