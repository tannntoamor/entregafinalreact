# NavegaLasRutas+Martinez

Entrega 2 - Coderhouse: Navega las rutas.

## Tecnologías

- React + Vite
- React Router DOM

## Cómo correr el proyecto

1. Instalar dependencias:

```bash
npm install
```

2. Levantar el servidor de desarrollo:

```bash
npm run dev
```

3. Abrir el enlace que aparece en la consola, por ejemplo:

```
http://localhost:5173/
```

## Rutas principales

- `/` → Catálogo principal de productos.
- `/category/:categoryId` → Catálogo filtrado por categoría (`remeras`, `buzos`, `accesorios`).
- `/item/:id` → Vista en detalle de un producto.
- `*` → Ruta 404 (página no encontrada).

## Estructura de componentes

- Componentes contenedores:
  - `ItemListContainer` → Carga el listado completo o filtrado por categoría usando Promises.
  - `ItemDetailContainer` → Carga el detalle de un producto según el `id` de la URL.

- Componentes de presentación:
  - `NavBar`, `ItemList`, `Item`, `ItemDetail`, `ItemCount`, `CartWidget`, `NotFound`.

## Datos

Los datos se obtienen desde `src/data/products.js`, donde se simulan llamadas asíncronas con `Promises` y `setTimeout`.
