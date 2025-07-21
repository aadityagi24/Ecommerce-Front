import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios.get("https://ecommerce-back-e9fw.onrender.com/api/v1/auth/orders");
      console.log("Fetched Orders:", data);
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  return (
    <div className="container-fluid p-3 dashboard">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-11">
          <h2 className="text-center mb-4">All Orders</h2>

          {orders?.length === 0 && (
            <p className="text-center text-muted">No orders found.</p>
          )}

          {orders?.map((o, i) => (
            <div key={i} className="border shadow mb-4 p-3 rounded bg-white">
              {/* Order Summary */}
              <div className="table-responsive mb-3">
                <table className="table table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th>#</th>
                      <th>Status</th>
                      <th>Buyer</th>
                      <th>Date</th>
                      <th>Payment</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{i + 1}</td>
                      <td>{o?.status}</td>
                      <td>{o?.buyer?.name || "N/A"}</td>
                      <td>{moment(o?.createAt).fromNow()}</td>
                      <td>{o?.payment?.success ? "Success" : "Failed"}</td>
                      <td>{o?.products?.length || 0}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Product Cards */}
              <div className="row">
                {o?.products?.map((p) => (
                  <div className="col-12 col-md-6 col-lg-4 mb-3" key={p._id}>
                    <div className="card h-100">
                      <img
                        src={`https://ecommerce-back-e9fw.onrender.com/api/v1/product/product-photo/${p._id}`}
                        className="card-img-top"
                        alt={p.name}
                        style={{ height: "180px", objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <h6 className="card-title">{p.name}</h6>
                        <p className="card-text text-muted">
                          {p.description?.substring(0, 50)}...
                        </p>
                        <p className="text-success fw-bold">₹{p.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
