import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Magazine from './pages/Magazine';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Form from './pages/Form';
import Delivery from './pages/Delivery';

const App = () => {
  const [cart, setCart] = React.useState([]);
  const [onForm, setOnForm] = React.useState([]);

  console.log(cart);

  const onAddToCart = (product) => {
    setCart([...cart, product]);
  };
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/magazine" element={<Magazine />} />
        <Route
          path="/product/:index"
          element={<Product cart={cart} setCart={setCart} onAddToCart={onAddToCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/form" element={<Form cart={cart} setOnForm={setOnForm} />} />
        <Route path="/delivery" element={<Delivery />} />
      </Routes>
    </>
  );
};

export default App;
