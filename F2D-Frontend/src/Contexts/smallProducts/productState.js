import React, { useState } from "react";
import productContext from "./productContext";

const ProductState = (props) => {
  const host = "http://localhost:5000";
  const initialProduct = [];

  const [products, setProducts] = useState(initialProduct);

  // GET ALL products
  const getAllProducts = async () => {
    const response = await fetch(`${host}/api/products/fetchAllProducts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setProducts(json);
};
 


  // ADD a product
  const addProduct = async (name,price,image,quantity) => {
    const response = await fetch(`${host}/api/products/addProduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({name,price,image,quantity}),
    });
    const json = await response.json();
    console.log(json);
    const product = {
      _id: json._id,
      user: json.user,
      name : name,
      price: price,
      image: image,
      quantity: quantity,
      __v: 0,
    };
    setProducts([...products, product]);
  };

// //Delete a product
const deleteProduct = async(id) => {
  const response = await fetch(`${host}/api/products/deleteProduct/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "auth-token":localStorage.getItem('token')
    }
  });   
  const newProduct = products.filter((product) => {
    return product._id !== id;
  });
  setProducts(newProduct);
};
  return (
    <productContext.Provider
      value={{
        products,
        addProduct,
        getAllProducts,
        deleteProduct,
      }}
    >
      {props.children}
    </productContext.Provider>
  );
};




export default ProductState;
