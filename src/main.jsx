import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './views/Home/Home.jsx';
import { Blog } from './views/Blog/Blog.jsx';
import { ARTICLES_MOCK } from './mock/articles_mock.js';
import { Artigo } from './views/Artigo/Artigo.jsx';
import { Produtos } from './views/Produtos/Produtos.jsx';
import { Contato } from './views/Contato/Contato.jsx';
import { Sobre } from './views/Sobre/Sobre.jsx';

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop/ScrollToTop.js';

const Layout = () => (
  <>
    <ScrollToTop />
    <Outlet />
  </>
);


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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
