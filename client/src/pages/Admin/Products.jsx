import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

// If you don't have a Layout component, you can remove this import
// or create the Layout component in the correct path

const Products = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get('https://ecommerce-back-e9fw.onrender.com/api/v1/product/get-product');
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">All Products List</h1>
      <div className="row">
        {products?.map((p) => (
          <div className="col-md-4 mb-4" key={p._id}>
            <Link to={`/dashboardadmin/product/${p.slug}`} className='text-decoration-none text-dark'>
              <div className="card h-100 shadow-sm">
                <img
                  src={`https://ecommerce-back-e9fw.onrender.com/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top p-3"
                  alt={p.name}
                  style={{ 
                    height: '200px',
                    objectFit: 'contain',
                    backgroundColor: '#f8f9fa'
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text text-muted small">{p.description.substring(0, 60)}...</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="text-success fw-bold">₹{p.price}</span>
                    <span className="badge bg-secondary">{p.quantity} in stock</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;