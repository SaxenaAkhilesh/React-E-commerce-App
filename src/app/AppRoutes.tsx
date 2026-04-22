import { Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import Product from "../pages/Product"


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  )
}

export default AppRoutes