const products = [
  {
    id: '1',
    name: 'Remera "Ni santos ni diablos"',
    category: 'remeras',
    price: 18000,
    stock: 10,
    description: 'Remera oversize blanca con estampa full back, caos dulce y blasfemo.',
    image: 'https://via.placeholder.com/500x500?text=Ni+Santos+Ni+Diablos',
  },
  {
    id: '2',
    name: 'Remera "Bloody Kiss"',
    category: 'remeras',
    price: 19000,
    stock: 8,
    description: 'Beso sangriento, drama asegurado. 100% algodón, 1000% intensidad.',
    image: 'https://via.placeholder.com/500x500?text=Bloody+Kiss',
  },
  {
    id: '3',
    name: 'Buzo "Chaos Dept"',
    category: 'buzos',
    price: 32000,
    stock: 5,
    description: 'Buzo negro, suave por dentro, violento por fuera. Para el departamento de caos.',
    image: 'https://via.placeholder.com/500x500?text=Chaos+Dept',
  },
  {
    id: '4',
    name: 'Gorra "Tanto Amor Riot"',
    category: 'accesorios',
    price: 15000,
    stock: 12,
    description: 'Gorra trucker para los disturbios emocionales de todos los días.',
    image: 'https://via.placeholder.com/500x500?text=Tanto+Amor+Riot',
  },
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 500)
  })
}

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find((prod) => prod.id === id)
      resolve(product)
    }, 500)
  })
}

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = products.filter((prod) => prod.category === categoryId)
      resolve(filtered)
    }, 500)
  })
}
