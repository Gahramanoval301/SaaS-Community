import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import About from "../pages/About"
import Product from "../pages/Product"
import Pricing from "../pages/Pricing"
import Contact from "../pages/Contact"

const WebRouting = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="" element={}/>
        </Routes>
    )
}
export default WebRouting
