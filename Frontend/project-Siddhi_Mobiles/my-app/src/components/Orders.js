import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('http://localhost:9540/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (isLoading) {
    return <div>Loading orders...</div>;
  }

  return (
    <div>
      <h1>Orders</h1>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div key={order.id}>
            <h2>Order #{order.id}</h2>
            <p>Date: {order.orderDate}</p>
            <p>Status: {order.status}</p>
            <p>Total Price: ${order.totalPrice?.toFixed(2) ?? 'N/A'}</p>
            <h3>Products</h3>
            <ul>
              {order.products.map((product) => (
                <li key={product.id}>{product.name} - ₹{product.price?.toFixed(2) ?? 'N/A'}</li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default OrdersPage;
