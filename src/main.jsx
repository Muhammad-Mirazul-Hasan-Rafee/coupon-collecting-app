import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Header from './Components/Header.jsx';
import Brands from './Components/Brands.jsx';
import Profile from './Components/Profile.jsx';
import About from './Components/About.jsx';
import Register from './Components/Register.jsx';
import Login from './Components/Login.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
     {
      path:"/brands",
      element:<Brands></Brands>
     },
     {
      path: "/profile",
      element: <Profile></Profile>
     },
     {
      path: "/about",
      element: <About></About>
     },
     {
      path:"/register",
      element: <Register></Register>
     },
     {
       path: "/login",
       element: <Login></Login>
     }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
