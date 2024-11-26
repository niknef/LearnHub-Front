import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import 'bootstrap-icons/font/bootstrap-icons.css';

import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProtectedRoute from './components/Rutas/ProtectedRoute.jsx';
import AdminRoute from './components/Rutas/AdminRoute.jsx';
import AdminHome from './pages/AdminHome.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Login/Register.jsx';
import Layout from './components/Layout/Layout.jsx';
import Home from './pages/Home.jsx';
import DetalleCursos from './components/Cursos/DetalleCurso.jsx'
import Error404Page from './pages/Error404Page.jsx';
import Logout from './components/Login/Logout.jsx'
import Tecnologias from './pages/Tecnologias.jsx'
import Categorias from './pages/Categorias.jsx';
import Profesores from './pages/Profesores.jsx';
import AdminCursos from './components/Admin/AdminCursos.jsx';
import AdminCategorias from './components/Admin/AdminCategorias.jsx';
import AdminTecnologias from './components/Admin/AdminTecnologias.jsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error404Page />,
    children: [ 
      {
        path: "/",
        element: <ProtectedRoute><Home /></ProtectedRoute>, 
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/logout",
        element: <Logout />
      },
      {
        path: "/cursos/:id",
        element: <ProtectedRoute> <DetalleCursos/> </ProtectedRoute>
      },
      {
        path: "/tecnologias",
        element: <ProtectedRoute> <Tecnologias/> </ProtectedRoute>
      },
      {
        path: "/categorias",
        element: <ProtectedRoute> <Categorias/> </ProtectedRoute>
      },
      {
        path: "/profesores",
        element: <ProtectedRoute> <Profesores/> </ProtectedRoute>
      },
      {
        path: "/admin",
        element: <AdminRoute><AdminHome /></AdminRoute>
        
      },
      {
        path: "/admin/cursos",
        element: <AdminRoute><AdminCursos /></AdminRoute>
      },
      {
        path: "/admin/categorias",
        element: <AdminRoute><AdminCategorias /></AdminRoute>
      },
      {
        path: "/admin/tecnologias",
        element: <AdminRoute><AdminTecnologias /></AdminRoute>
      }

    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)