//ProductForm.jsx
//ProductForm.jsx
//ProductForm.jsx
//ProductForm.jsx
// ProductForm.jsx
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductForm.css'; 

const ProductForm = ({ onSubmit }) => {
 
  const ProductosCarrito = [
    {
      id: 1,
      name: 'Zapatos',
      price: 59.99,
      quantity: 1,
      image: '/images/nike.jpg',  
      description: 'Comodos para toda ocasion.',
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 699.99,
      quantity: 1,
      image: '/images/smartphone.jpg',  
      description: 'El celular mas avanzado.',
    },
    {
      id: 3,
      name: 'TV',
      price: 499.99,
      quantity: 1,
      image: '/images/tv.jpg',  
      description: '55 pulgadas la mejor imagen.',
    },
  ];
  


const handleAddPredefinedProduct = (product) => {
 
  if (onSubmit) {
    onSubmit(product);    
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...currentCart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }
};

  return (
    <div className="container">
      <h2 className="text-center mb-4">Lo ultimo en productos</h2>
      <div className="row">
        {ProductosCarrito.map((item) => (
          <div key={item.id} className="col-md-4 mb-4"> 
            <div className="product-item border rounded p-3 shadow"> 
              <img src={item.image} alt={item.name} className="img-fluid" style={{ height: '150px', objectFit: 'cover' }} />
              <h3 className="text-center">{item.name}</h3>
              <p>{item.description}</p>
              <p className="font-weight-bold">Precio: ${item.price.toFixed(2)}</p>
              <button className="btn btn-primary" onClick={() => handleAddPredefinedProduct(item)}>Adicionar al carro</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ProductForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ProductForm;


