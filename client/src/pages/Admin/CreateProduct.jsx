import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Select } from "antd";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState(null);

  // Get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("https://ecommerce-back-e9fw.onrender.com/api/v1/category/get-category");
      

      if (data?.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log("Error fetching categories:", error);
      toast.error("Something went wrong in getting categories");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // Create product
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("category", category);
      productData.append("shipping", shipping);

      const { data } = await axios.post(
  "https://ecommerce-back-e9fw.onrender.com/api/v1/product/create-product",
  productData,
  {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }
);

      if (data?.success) {
        toast.success("Product Created Successfully");
        navigate("/dashboardadmin/admin/products");
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while creating the product");
    }
  };

  return (
   
      <div className="container-fluid m-3 p-3">
        <div className="row">
          
          <div className="col-md-9">
            <h1>Create Product</h1>
            <div className="m-1 w-75">
              {/* Category Dropdown (AntD v5 style) */}
              <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => setCategory(value)}
                options={categories.map((c) => ({
                  value: c._id,
                  label: c.name,
                }))}
              />

              {/* Upload Photo */}
              <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>

              {/* Show Uploaded Photo Preview */}
            {photo && (
  <div className="mb-2 text-center d-flex justify-content-center">
    <img
      src={URL.createObjectURL(photo)}
      alt="product_photo"
      style={{
        maxHeight: "200px",
        width: "auto",
        maxWidth: "100%",
        objectFit: "contain",
      }}
      className="img-fluid"
    />
  </div>
)}


              {/* Name */}
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="Write a name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* Description */}
              <div className="mb-3">
                <textarea
                  value={description}
                  placeholder="Write a description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              {/* Price */}
              <div className="mb-3">
                <input
                  type="number"
                  value={price}
                  placeholder="Write a price"
                  className="form-control"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              {/* Quantity */}
              <div className="mb-3">
                <input
                  type="number"
                  value={quantity}
                  placeholder="Write quantity"
                  className="form-control"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>

              {/* Shipping */}
              <div className="mb-3">
                <Select
                  bordered={false}
                  placeholder="Select shipping"
                  size="large"
                  className="form-select mb-3"
                  onChange={(value) => setShipping(value)}
                  options={[
                    { value: "0", label: "No" },
                    { value: "1", label: "Yes" },
                  ]}
                />
              </div>

              {/* Submit Button */}
              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleCreate}>
                  CREATE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default CreateProduct;
