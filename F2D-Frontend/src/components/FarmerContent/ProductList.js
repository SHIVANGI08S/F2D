import React, { useState , useContext, useEffect} from 'react';
import { Box, Button, ChakraProvider } from "@chakra-ui/react";
import productContext from '../../Contexts/smallProducts/productContext';

const ProductList = () => {
  
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState({
    name: '',
    price: '',
    image: '',
    quantity: '',
  });

  
  const context = useContext(productContext);
  const { products, addProduct , deleteProduct, getAllProducts} = context;
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getAllProducts();
    } else {
    }
  }, [getAllProducts]);

  const [searchTerm, setSearchTerm] = useState('');

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const add = () => {
        addProduct(product.name, product.price, product.image, product.quantity);
  
        // Clear the fields immediately after adding an idea
       setProduct({
          name: '',
          price: '',
          image: '',
          quantity: '',
        });
    closeModal();
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  return (
    <ChakraProvider>
      <div>
        <input
          className='search_button'
          type="text"
          placeholder="Search by Name"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className='add_button' onClick={openModal}><i class="fa-solid fa-plus"></i> Add new Product</button>
      </div>

      {showModal && (
        <Box className="modal">
          <Box className="modal-content" width="80" bg="#b18e64" color="#665039" fontFamily="serif" fontSize="xl">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <label>Name:</label>
            <input className='input_box' type="text" name="name" value={product.name} onChange={handleChange}  />
            <label>Price:</label>
            <input className='input_box'  type="text" name="price" value={product.price} onChange={handleChange} />
            <label>Image URL:</label>
            <input className='input_box'  type="text" name="image" value={product.image} onChange={handleChange} />
            <label>Quantity in Stock:</label>
            <input className='input_box'  type="text" name="quantity" value={product.quantity} onChange={handleChange} />
            <button onClick={add}>Add</button>
          </Box>
        </Box>
      )}

      <Box className="product-list" display="flex" flexWrap="wrap">
        {products.map((product, index) => (
          <Box key={index} className="product-card" margin="5" bg="#E8C897" color="#665039" display="flex">
<Box paddingTop="2">
<img src={product.image} alt={product.name} className='product_img'/>
</Box>
            <Box padding="2"  >
            <h3>{product.name}</h3>
            <p>Price: {product.price} Rs</p>
            <p>{product.quantity} kgs in stock</p>
            <Button color="#665039" bg="#E8C897"  onClick={() => deleteProduct(product._id)}><i class="fa-solid fa-trash fa-lg"></i></Button>
            </Box>
        
          </Box>
        ))}
      </Box>
    </ChakraProvider>
  );
};

export default ProductList;