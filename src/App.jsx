// App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Views from './views'; // Import the new views file

const App = () => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id ? { ...existingProduct, quantity: existingProduct.quantity + 1 } : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Productos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">Cart ({cart.length})</Link>
          </li>
        </ul>
      </nav>

      <Views cart={cart} setCart={setCart} handleAddToCart={handleAddToCart} /> {/* Use the Views component */}
    </Router>
  );
};

export default App;
