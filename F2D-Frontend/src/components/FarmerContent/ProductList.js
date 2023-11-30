import React, { useState } from "react";
import { Box, Button, ChakraProvider } from "@chakra-ui/react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
    quantity: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const addProduct = () => {
    setProducts([...products, newProduct]);
    setNewProduct({ name: "", price: "", image: "", quantity: "" });
    closeModal();
  };

  const deleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ChakraProvider>
      <div>
        <input
          className="search_button"
          type="text"
          placeholder="Search by Name"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="add_button" onClick={openModal}>
          <i class="fa-solid fa-plus"></i> Add new Product
        </button>
      </div>

      {showModal && (
        <Box className="modal">
          <Box
            className="modal-content"
            width="80"
            bg="#b18e64"
            color="#665039"
            fontFamily="serif"
            fontSize="xl"
          >
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <label>Name:</label>
            <input
              className="input_box"
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleChange}
            />
            <label>Price:</label>
            <input
              className="input_box"
              type="text"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
            />
            <label>Image URL:</label>
            <input
              className="input_box"
              type="text"
              name="image"
              value={newProduct.image}
              onChange={handleChange}
            />
            <label>Quantity in Stock:</label>
            <input
              className="input_box"
              type="text"
              name="quantity"
              value={newProduct.quantity}
              onChange={handleChange}
            />
            <button onClick={addProduct}>Add</button>
          </Box>
        </Box>
      )}

      <Box className="product-list" display="flex" flexWrap="wrap">
        {filteredProducts.map((product, index) => (
          <Box
            key={index}
            className="product-card"
            margin="5"
            bg="#E8C897"
            color="#665039"
            display="flex"
          >
            <Box paddingTop="2">
              <img
                src={product.image}
                alt={product.name}
                className="product_img"
              />
            </Box>
            <Box padding="2">
              <h3>{product.name}</h3>
              <p>Price: {product.price} Rs</p>
              <p>{product.quantity} kgs in stock</p>
              <Button
                color="#665039"
                bg="#E8C897"
                onClick={() => deleteProduct(index)}
              >
                <i class="fa-solid fa-trash fa-lg"></i>
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </ChakraProvider>
  );
};

export default ProductList;
