import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import "../../style/Buyer_Content.css";
import { Link } from "react-router-dom";

const Buyer_Home = () => {
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
          <Box className="buyer_content_options" padding="5" paddingTop="10" color="#e8c897">
            <Link to="/BuyerContent">
              <i class="fa-solid fa-house"></i> Home
            </Link>
          </Box>
          <Box className="buyer_content_options" padding="5">
          <Link to="/BuyerCart">
          <i class="fa-solid fa-cart-shopping"></i>  Cart
          </Link>
          
          </Box>
          <Box className="buyer_content_options" padding="5">
          <Link to="/BuyerAccount">
          <i class="fa-solid fa-user"></i>  Account
          </Link>
          
          </Box>
        </Box>
        <Box></Box>
      </Box>
    </ChakraProvider>
  );
};

export default Buyer_Home;
