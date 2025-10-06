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
  const [onForm, setOnForm] = React.useState([]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/magazine" element={<Magazine />} />
        <Route path="/product/:index" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/form" element={<Form setOnForm={setOnForm} />} />
        <Route path="/delivery" element={<Delivery />} />
      </Routes>
    </>
  );
};

export default App;
