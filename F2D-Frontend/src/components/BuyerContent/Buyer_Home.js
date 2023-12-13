import React, { useState } from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import "../../style/Buyer_Content.css";
import { Link } from "react-router-dom";

const Buyer_Home = ({ addToCart }) => {
  const [sampleData, setSampleData] = useState([
    {
      id: 1,
      name: 'Item 1',
      price: 20.99,
      inCart: false,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdUQQikpLtoMLg3XjSfoxREhca1OAjz1f8dgo1lwuprg&s', // Replace with your image link
    },
    {
      id: 2,
      name: 'Item 2',
      price: 29.99,
      inCart: false,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdUQQikpLtoMLg3XjSfoxREhca1OAjz1f8dgo1lwuprg&s', // Replace with your image link
    },
    {
      id: 3,
      name: 'Item 1',
      price: 20.99,
      inCart: false,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdUQQikpLtoMLg3XjSfoxREhca1OAjz1f8dgo1lwuprg&s', // Replace with your image link
    },
    {
      id: 4,
      name: 'Item 1',
      price: 20.99,
      inCart: false,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdUQQikpLtoMLg3XjSfoxREhca1OAjz1f8dgo1lwuprg&s', // Replace with your image link
    },
    {
      id: 5,
      name: 'Item 1',
      price: 20.99,
      inCart: false,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdUQQikpLtoMLg3XjSfoxREhca1OAjz1f8dgo1lwuprg&s', // Replace with your image link
    },
    {
      id: 6,
      name: 'Item 1',
      price: 20.99,
      inCart: false,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdUQQikpLtoMLg3XjSfoxREhca1OAjz1f8dgo1lwuprg&s', // Replace with your image link
    },
  ]);

  const handleAddToCart = (item) => {
    addToCart(item);
    setSampleData((prevData) =>
      prevData.map((data) =>
        data.id === item.id ? { ...data, inCart: true } : data
      )
    );
  };

  return (
    <ChakraProvider>
      <Box display="flex">
        <Box
          display="flex"
          flexDirection="column"
          color="#665039"
          className="buyer_content"
          paddingLeft="10"
          paddingTop="20"
        >
          <Box
            className="buyer_content_options"
            padding="5"
            paddingTop="10"
            color="#e8c897"
          >
            <Link to="/BuyerContent">
              <i class="fa-solid fa-house"></i> Home
            </Link>
          </Box>
          <Box className="buyer_content_options" padding="5">
            <Link to="/BuyerCart">
              <i class="fa-solid fa-cart-shopping"></i> Cart
            </Link>
          </Box>
          <Box className="buyer_content_options" padding="5">
            <Link to="/BuyerAccount">
              <i class="fa-solid fa-user"></i> Account
            </Link>
          </Box>
        </Box>
        <Box className="buyer_home">
          <div className="home">
            <h1>Welcome to the Buyer's Home Page</h1>
            <div className="item-container">
              {sampleData.map((item) => (
                <div key={item.id} className="card">
                  <h2>{item.name}</h2>
                  <img className="buyer_img" src={item.image} alt={item.name} style={{ width: '100px', height: '100px'  }} />
                  
                  <p>Price: ${item.price}</p>
                  {item.inCart ? (
                    <Link to="/BuyerCart">
                      <button className="button b_view" >View in Cart</button>
                    </Link>
                  ) : (
                    <button className="button" onClick={() => handleAddToCart(item)}>
                      Add to Cart
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Buyer_Home;
