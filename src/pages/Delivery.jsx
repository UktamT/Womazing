import React from 'react';
import { useLocation } from 'react-router-dom';

const Delivery = () => {
  const location = useLocation();
  const order = location.state;

  if (!order) return <p>Заказ не найден</p>;

  return (
    <div className='container' style={{ padding: '50px' }}>
      <h2>Заказ успешно отправлен!</h2>
      <p>Номер заказа: {order.id}</p>
      <h3>Данные покупателя:</h3>
      <p>Имя: {order.name}</p>
      <p>Email: {order.email}</p>
      <p>Телефон: {order.phone}</p>
      <h3>Адрес:</h3>
      <p>{order.country}, {order.city}, {order.street}, {order.home}, {order.room}</p>
      <h3>Комментарий:</h3>
      <p>{order.subtitle}</p>
      <h3>Ваш заказ:</h3>
      {order.cart.map(item => (
        <p key={item.id}>{item.title} - ${item.totalPrice}</p>
      ))}
      <p>Итого: ${order.totalPrice}</p>
    </div>
  );
};

export default Delivery;
