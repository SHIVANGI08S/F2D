import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import "../../style/Buyer_Content.css";
import { Link } from "react-router-dom";

const Buyer_Cart = ({
  cartItems,
  removeItem,
  calculateTotal,
  handleCheckout,
}) => {
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
          <Box className="buyer_content_options" padding="5" paddingTop="10">
            <Link to="/BuyerContent">
              <i class="fa-solid fa-house"></i> Home
            </Link>
          </Box>
          <Box className="buyer_content_options" padding="5" color="#e8c897">
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
          <div className="cart">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div>
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item" className="card">
                  <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <button className="button" onClick={() => removeItem(item.id)}>
                      Remove from Cart
                    </button>
                  </div>
                ))}
                <p>Total: ${calculateTotal()}</p>
                <button className="
                 b_chck" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            )}
          </div>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Buyer_Cart;
