import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";
import moment from "moment";
import { Select } from "antd";
const { Option } = Select;

const AdminOrders = () => {
  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancel",
  ]);
  const [orders, setOrders] = useState([]);
  const [auth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios.get("https://ecommerce-back-e9fw.onrender.com/api/v1/auth/all-orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch orders");
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  const handleChange = async (orderId, value) => {
    try {
      await axios.put(`https://ecommerce-back-e9fw.onrender.com/api/v1/auth/order-status/${orderId}`, {
        status: value,
      });
      getOrders();
    } catch (error) {
      console.log(error);
      toast.error("Failed to update order status");
    }
  };

  return (
    <div className="container-fluid px-3 py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <h1 className="text-center mb-4">All Orders</h1>

          {orders?.map((o, i) => (
            <div className="border shadow-sm p-3 mb-4 bg-white rounded" key={o._id}>
              <div className="table-responsive">
                <table className="table">
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
                      <td>
                        <Select
                          bordered={false}
                          onChange={(value) => handleChange(o._id, value)}
                          defaultValue={o?.status}
                          style={{ width: "100%" }}
                          size="small"
                        >
                          {status.map((s, index) => (
                            <Option key={index} value={s}>
                              {s}
                            </Option>
                          ))}
                        </Select>
                      </td>
                      <td>{o?.buyer?.name}</td>
                      <td>{moment(o?.createdAt).fromNow()}</td>
                      <td>{o?.payment?.success ? "Success" : "Failed"}</td>
                      <td>{o?.products?.length}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Products */}
              <div className="row">
                {o?.products?.map((p) => (
                  <div
                    className="col-12 d-flex flex-column flex-md-row align-items-center border rounded p-2 mb-3"
                    key={p._id}
                  >
                    <div className="me-md-3 mb-2 mb-md-0 text-center">
                      <img
                        src={`https://ecommerce-back-e9fw.onrender.com/api/v1/product/product-photo/${p._id}`}
                        className="img-fluid"
                        alt={p.name}
                        style={{ maxWidth: "120px", borderRadius: "6px" }}
                      />
                    </div>
                    <div className="flex-grow-1">
                      <p className="mb-1 fw-bold">{p.name}</p>
                      <p className="mb-1 text-muted">
                        {p.description?.substring(0, 60)}...
                      </p>
                      <p className="mb-0">Price: ₹{p.price}</p>
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

export default AdminOrders;
