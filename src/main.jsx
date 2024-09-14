import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './template/Header'
import Footer from './template/Footer'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home';
import SobreMim from './pages/SobreMim';
import Contato from './pages/Contato';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
      
    
  },
  {
    path: "sobremim",
    element: <SobreMim/>
  },
  {
    path: "contato",
    element: <Contato/>
    }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <RouterProvider router={router} />
    <Footer/>
  </StrictMode>
)
