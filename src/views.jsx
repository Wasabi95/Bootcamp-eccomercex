// views.jsx
import { Routes, Route } from 'react-router-dom';
import ProductForm from './ProductForm';
import Cart from './Cart';
import Invoice from './Invoice';

const Views = ({ cart, setCart, handleAddToCart }) => {
  return (
    <Routes>
      <Route path="/" element={<ProductForm onSubmit={handleAddToCart} />} />
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      <Route path="/invoice" element={<Invoice cart={cart} />} />
    </Routes>
  );
};

export default Views;
