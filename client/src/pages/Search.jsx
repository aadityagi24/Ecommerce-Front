import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/Search";
import { useCart } from "../context/cart";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../styles/SearchStyles.css"; // Make sure this file exists and is correctly named

const Search = () => {
  const [values] = useSearch(); 
  const [cart, setCart] = useCart();
  const navigate = useNavigate();

  return (
    <Layout title={"Search results"}>
      <div className="search-page">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6 className="results-count">
          {values?.results.length < 1
          ? "NO PRODUCTS FOUND"
          : `${values?.results.length} PRODUCT FOUND`}
        </h6>

        </div>

        <div className="d-flex flex-wrap">
          {values?.results.map((p) => (
            <div className="card" key={p._id}>
              <img
                src={`https://ecommerce-back-e9fw.onrender.com/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <div className="card-name-price">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-price">₹{p.price}</p>
                </div>
                <p className="card-text">{p.description?.substring(0, 30)}...</p>
                <div className="btn-container">
                  <button
                    className="custom-btn"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                  <button
                    className="custom-btn"
                    onClick={() => {
                      const updatedCart = [...cart, p];
                      setCart(updatedCart);
                      localStorage.setItem("cart", JSON.stringify(updatedCart));
                      toast.success("Item added to cart");
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Search;
