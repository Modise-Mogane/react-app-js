import React, { useState } from "react";

function Product() {
  const [products, setProduct] = useState([
    {
      name: "Wireless Mouse",
      category: "Electronics",
      price: 599.98,
      stockStatus: "In Stock",
    },
    {
      name: "Bluetooth Headphones",
      category: "Electronics",
      price: 799.98,
      stockStatus: "Out of Stock",
    },
    {
      name: "Running Shoes",
      category: "Footwear",
      price: 600.98,
      stockStatus: "In Stock",
    },
    {
      name: "Stainless Steel Bottle",
      category: "Home & Kitchen",
      price: 199.98,
      stockStatus: "In Stock",
    },
    {
      name: "LED Desk Lamp",
      category: "Office Supplies",
      price: 349.98,
      stockStatus: "In Stock",
    },
    {
      name: "Yoga Mat",
      category: "Fitness",
      price: 399.98,
      stockStatus: "Low Stock",
    },
    {
      name: "Smart Watch",
      category: "Wearables",
      price: 1599.98,
      stockStatus: "In Stock",
    },
    {
      name: "USB-C Charger",
      category: "Accessories",
      price: 249.98,
      stockStatus: "Out of Stock",
    },
    {
      name: "Notebook",
      category: "Stationery",
      price: 59.98,
      stockStatus: "In Stock",
    },
    {
      name: "Gaming Keyboard",
      category: "Gaming",
      price: 899.98,
      stockStatus: "Low Stock",
    },
  ]);

  const [filter, SetFilter] = useState(products);
  const [search, setSearch] = useState("");
  const [catigory, setCatigory] = useState("");

  function DynamicAss(sea, cat) {
    const updatedProducts = products.filter(
      (product) =>
        product.category.toLocaleLowerCase() === cat.toLocaleLowerCase() &&
        product.name.toLocaleLowerCase().includes(sea.toLocaleLowerCase())
    );
    SetFilter(updatedProducts);
  }

  const filterContant = (userInput, sea = "") => {
    if ((userInput !== "") & (sea !== "")) {
      DynamicAss(sea, userInput);
    } else if (sea !== "") {
      filterSearch(sea);
    } else if (userInput !== "") {
      const updatedProducts = products.filter(
        (product) =>
          product.category.toLocaleLowerCase() === userInput.toLocaleLowerCase()
      );
      SetFilter(updatedProducts);
    } else {
      SetFilter(products);
    }
  };

  const filterSearch = (userInput, cat = "") => {
    if ((userInput !== "") & (cat !== "")) {
      DynamicAss(userInput, cat);
    } else if (cat !== "") {
      filterContant(cat);
    } else if (userInput !== "") {
      const updatedProducts = products.filter((product) =>
        product.name.toLocaleLowerCase().includes(userInput.toLocaleLowerCase())
      );
      SetFilter(updatedProducts);
    } else {
      SetFilter(products);
    }
  };
  const filterStock = () => {
    const updatedProducts = products.filter(
      (product) => product.stockStatus.toLocaleLowerCase() !== "out of stock"
    );
    SetFilter(updatedProducts);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          columnGap: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Name of product"
          onChange={(e) => {
            filterSearch(e.target.value, catigory);
            setSearch(e.target.value);
          }}
        ></input>
        <select
          onClick={(e) => {
            filterContant(e.target.value, search);
            setCatigory(e.target.value);
          }}
        >
          <option value="">--Category--</option>
          <option value="Electronics">Electronics</option>
          <option value="Fitness">Fitness</option>
          <option value="Footwear">Footwear</option>
          <option value="Wearables">Wearables</option>
          <option value="Accessories">Accessories</option>
          <option value="Stationery">Stationery</option>
          <option value="Gaming">Gaming</option>
          <option value="Office Supplies">Office Supplies</option>
        </select>
        <label htmlFor="">Show available items only</label>
        <input
          type="checkbox"
          onChange={(e) => {
            e.target.checked ? filterStock() : SetFilter(products);
          }}
        ></input>
      </div>
      <div
        style={{
          backgroundColor: "darkkhaki",
          columnGap: "5px",
          rowGap: "10px",
        }}
      >
        {filter.length == 0 ? (
          <h1>No data item searched</h1>
        ) : (
          filter.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "beige",
              }}
            >
              <p key={index + 1}>
                <strong>Product Name: </strong>
                {item.name}
              </p>
              <p key={index + 2}>
                <strong>Product category: </strong>
                {item.category}
              </p>
              <p key={index + 3}>
                <strong>Product price: </strong>R{item.price}
              </p>
              <p key={index + 4}>
                <strong>Product stock status: </strong>
                {item.stockStatus}
              </p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Product;
