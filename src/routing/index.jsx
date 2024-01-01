import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import About from "../pages/About"
import Product from "../pages/Product"
import Pricing from "../pages/Pricing"
import Contact from "../pages/Contact"
import Blog from "../pages/Blog"
import BlogPost from "../pages/BlogPost"
import NotFound from "../pages/NotFound"
const WebRouting = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/blogpost/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
export default WebRouting
