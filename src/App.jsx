import React from "react"
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import Principios from "./components/Principios/Principios"
import Recursos from "./components/Recursos/Recursos"
import Herramientas from "./components/Herramientas/Herramientas"
import NavBar_Root from "./components/NavBar_Root/NavBar_Root"
import HomePage from "./components/HomePage/HomePage"



export default function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<NavBar_Root />}>
      <Route index element={<HomePage />} />
      <Route path="/principios" element={<Principios />} />
      <Route path="/recursos" element={<Recursos />} />
      <Route path="/herramientas" element={<Herramientas />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}