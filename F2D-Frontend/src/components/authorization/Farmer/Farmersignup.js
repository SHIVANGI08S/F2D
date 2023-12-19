import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ViewIcon, ViewOffIcon} from '@chakra-ui/icons';


const Farmersignup = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    userName: "",
    email: "",
    password: "",
    c_password: ""
  });
  const [picLoading, setPicLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { userName, email, password, c_password } = credentials;
      const response = await axios.post("http://localhost:5000/api/auth/createuser", {
        name: userName,
        email,
        password,
        c_password
      });

      // Assuming the server returns a token upon successful registration
      const authtoken = response.data.authtoken;
      localStorage.setItem('token', authtoken);
      navigate("/FarmerContent");
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          toast({
            title: "User already exists",
            status: "error",
            duration: 3000
          });
        } else {
          console.error(`HTTP Error: ${error.response.status} - ${error.response.statusText}`);
          console.error(error.response.data);
          toast({
            title: "Server Error",
            status: "error",
            duration: 3000
          });
        }
      } else {
        console.error("Network Error:", error.message);
        toast({
          title: "Network Error",
          status: "error",
          duration: 3000
        });
      }
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <VStack spacing="5px">
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          name = "userName"
          value ={credentials.userName}
          onChange={onChange}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          name = "email"
          value = {credentials.email}
          placeholder="Enter Your Email Address"
          onChange={onChange}
        />
      </FormControl>
      <FormControl isRequired>
      <FormLabel>Password</FormLabel>
      <InputGroup size="md">
        <Input
          value={credentials.password}
          name = "password"
          pr="4.5rem"
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          onChange={onChange}
        />
        <InputRightElement width="4.5rem">
          {showPassword ? (
            <ViewOffIcon
              h="1.75rem"
              w="1.75rem"
              cursor="pointer"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <ViewIcon
              h="1.75rem"
              w="1.75rem"
              cursor="pointer"
              onClick={togglePasswordVisibility}
            />
          )}
        </InputRightElement>
      </InputGroup>
    </FormControl>



    <FormControl isRequired>
      <FormLabel>Confirm Password</FormLabel>
      <InputGroup size="md">
        <Input
          name = "c_password"
          value={credentials.c_password}
          pr="4.5rem"
          type={showPassword ? "text" : "password"}
          placeholder="Confirm password"
          onChange={onChange}
        />
        <InputRightElement width="4.5rem">
          {showPassword ? (
            <ViewOffIcon
              h="1.75rem"
              w="1.75rem"
              cursor="pointer"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <ViewIcon
              h="1.75rem"
              w="1.75rem"
              cursor="pointer"
              onClick={togglePasswordVisibility}
            />
          )}
        </InputRightElement>
      </InputGroup>
    </FormControl>

      
      <Button
        // colorScheme="green"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={picLoading}
        bg="#e8c897"
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Farmersignup