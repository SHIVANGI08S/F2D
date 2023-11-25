import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Farmer_Order = () => {
  return (
    <ChakraProvider>
      <Box>
        <Box margin="5" marginRight="20">
          <ul className="farmer-content-options " color="#665039">
            <li className="farmer-content-options-name" color="#665039">
              <Link to="/FarmerProduct">
                <i class="fa-solid fa-cube "></i> Product
              </Link>
            </li>
            <li className="farmer-content-options-name" color="#665039">
              <Link to="/FarmerOrder">
                <i class="fa-solid fa-list-check"></i> Order
              </Link>
            </li>
            <li className="farmer-content-options-name" color="#E8C897">
              <Link to="/FarmerContent">
                <i class="fa-regular fa-user "></i> Account
              </Link>
            </li>
          </ul>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Farmer_Order;
