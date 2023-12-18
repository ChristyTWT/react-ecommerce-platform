import './App.scss';
import Cart from "./components/cart/Cart";
import Account from "./components/account/Account";
import Products from "./components/products/Products";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
