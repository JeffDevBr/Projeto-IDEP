import './index.scss'
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './views/Home/Home.jsx'
import { Blog } from './views/Blog/Blog.jsx'
import { ARTICLES_MOCK } from './mock/articles_mock.js'
import { Artigo } from './views/Artigo/Artigo.jsx'
import { Produtos } from './views/Produtos/Produtos.jsx'
import { Contato } from './views/Contato/Contato.jsx'
import { Sobre } from './views/Sobre/Sobre.jsx'

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import ScrollToTop from './components/ScrollToTop/ScrollToTop.js'
import { CartOverlay } from './components/Cart/CartOverlay.jsx'
import { CartContext } from './components/contexts/CartContext.js'

const Layout = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState({})

  const removeFromCart = (productId) => {
    const cartItemsCopy = { ...cartItems }
    delete cartItemsCopy[productId]
    setCartItems(cartItemsCopy)
  }

  const addToCart = (productId) => {
    setCartItems({
      ...cartItems,
      [productId]: (cartItems[productId] ?? 0) + 1,
    })
  }

  const decreaseUnit = (productId) => {
    if (cartItems[productId] > 1) {
      setCartItems({
        ...cartItems,
        [productId]: cartItems[productId] - 1,
      })
    } else {
      removeFromCart(productId)
    }
  }



  return (
    <CartContext.Provider value={{ isCartOpen, setIsCartOpen, cartItems, addToCart, decreaseUnit, removeFromCart }}>
      <CartOverlay />
      <ScrollToTop />
      <Outlet />
    </CartContext.Provider>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home data={ARTICLES_MOCK} /> },
      { path: "/Produtos", element: <Produtos /> },
      { path: "/Blog", element: <Blog data={ARTICLES_MOCK} /> },
      { path: "/Artigo/:artigoId", element: <Artigo data={ARTICLES_MOCK} /> },
      { path: "/Sobre", element: <Sobre /> },
      { path: "/Contato", element: <Contato /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
