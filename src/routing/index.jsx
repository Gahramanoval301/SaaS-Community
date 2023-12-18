import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import About from "../pages/About"
import Product from "../pages/Product"

const WebRouting = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/about-us" element={<About />} />
            </Routes>
    )
}
export default WebRouting
