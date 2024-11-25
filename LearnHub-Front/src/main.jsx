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
import Login from './components/Login/Login.jsx';
import Register from './components/Login/Register.jsx';
import Layout from './components/Layout/Layout.jsx';
import Home from './pages/Home.jsx';
import DetalleCursos from './components/Cursos/DetalleCurso.jsx'
import Error404Page from './pages/Error404Page.jsx';


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
        path: "/cursos/:id",
        element: <ProtectedRoute> <DetalleCursos/> </ProtectedRoute>
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)