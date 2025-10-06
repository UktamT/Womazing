import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


const Form = () => {
  const cart = useSelector(state => state.cart.items)
  const navigate = useNavigate();

  const location = useLocation();
  const { discount = 0, totalPrice: discountedTotal = 0 } = location.state || {};

  const totalPrice = cart.reduce((acc, item) => acc + item.totalPrice, 0);
  const finalPrice = discountedTotal || totalPrice * (1 - discount);

 


  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [country, setCountry] = React.useState('')
  const [city, setCity] = React.useState('')
  const [street, setStreet] = React.useState('')
  const [home, setHome] = React.useState('')
  const [room, setRoom] = React.useState('')
  const [subtitle, setSubtitle] = React.useState('')

  const onClickToSubmit = () => {
     if (
    !name.trim() ||
    !email.trim() ||
    !phone.trim() ||
    !country.trim() ||
    !city.trim() ||
    !street.trim() ||
    !home.trim()
  ) {
    alert('Пожалуйста, заполните все обязательные поля');
    return;
  }

  // Можно добавить проверку email
  if (!email.includes('@')) {
    alert('Введите корректный email');
    return;
  }
    const order = {
    id: Math.random(),
    cart,
    discount,
    totalPrice: finalPrice,
    name,
    email,
    phone,
    country,
    city,
    street,
    home,
    room,
    subtitle
};


    navigate('/delivery', {state: order})
  }

  return (
    <div className='container'>
      <h3 style={{fontSize: '55px', margin: '50px 0 10px'}}>
        Оформление заказа
      </h3>

      <p style={{marginBottom: '200px', fontSize: '17px', fontWeight: '500'}}>
        Главная <span style={{margin: '0 10px'}}>-</span> <span style={{color: 'rgba(145, 145, 145, 1)', fontSize:'17px', fontWeight: '500'}}>Оформление заказа</span>
      </p>

      <div style={{display: 'flex', gap: '300px'}}>
        <div>
          <div style={{display:'flex', flexWrap: 'wrap', maxWidth:'300px'}}>
            <h4 style={{fontSize: '25px', margin: '1px 0 30px'}}>
              Данные покупателя
            </h4>

            <form action="">
              <input
              onChange={(e) => setName(e.target.value)}
              value={name}
                style={{
                border: 'none',
                borderBottom: '1px solid black',
                outline: 'none',         
                padding: '10px 0',
                fontSize: '19px'
                }}
              placeholder="Имя"
              type="text"
              />
              <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
               style={{
                border: 'none',
                margin: '20px 0',
                fontSize: '19px',
                borderBottom: '1px solid black',
                padding: '10px 0'
                }} placeholder='E-mail' type="email" />
              <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
               style={{
                border: 'none',
                fontSize:'19px',
                borderBottom: '1px solid black',
                padding: '10px 0'
                }} placeholder='Телефон' type="text" />
            </form>
          </div>

          <div style={{display:'flex', flexWrap: 'wrap', maxWidth:'300px'}}>
            <h4 style={{fontSize: '25px', margin: '50px 0 30px'}}>
              Адрес получателя
            </h4>

            <form action="">
              <input
              onChange={(e) => setCountry(e.target.value)}
              value={country}
                style={{
                border: 'none',
                borderBottom: '1px solid black',
                outline: 'none',         
                padding: '10px 0',
                fontSize: '19px'
                }}
              placeholder="Страна"
              type="text"
              />
              <input
              onChange={(e) => setCity(e.target.value)}
              value={city}
               style={{
                border: 'none',
                margin: '20px 0',
                fontSize: '19px',
                borderBottom: '1px solid black',
                padding: '10px 0'
                }} placeholder='Город' type="text" />
              <input
              onChange={(e) => setStreet(e.target.value)}
              value={street}
               style={{
                border: 'none',
                fontSize:'19px',
                borderBottom: '1px solid black',
                padding: '10px 0'
                }} placeholder='Улица' type="text" />
                <input
                onChange={(e) => setHome(e.target.value)}
              value={home}
               style={{
                border: 'none',
                fontSize:'19px',
                borderBottom: '1px solid black',
                padding: '10px 0',
                margin: '20px 0'
                }} placeholder='Дом' type="text" />
                <input
                onChange={(e) => setRoom(e.target.value)}
              value={room}
               style={{
                border: 'none',
                fontSize:'19px',
                borderBottom: '1px solid black',
                padding: '10px 0'
                }} placeholder='Квартира' type="text" />
      
            </form>
          </div>

          <div style={{display:'flex', flexWrap: 'wrap', maxWidth:'300px'}}>
            <h4 style={{fontSize: '25px', margin: '50px 0 30px'}}>
              Комментарий к заказу
            </h4>

            <form action="">
              <input
              onChange={(e) => setSubtitle(e.target.value)}
              value={subtitle}
               style={{
                border: 'none',
                fontSize:'19px',
                borderBottom: '1px solid black',
                padding: '10px 0'
                }} placeholder='Комментарий' type="text" />
            </form>
          </div>
        </div>

        <div>
                <div style={{width: '205px'}}>
                  <h4 style={{
                    fontSize:'25px',
                    marginBottom:'20px',
                    fontWeight:'500'
                  }}>
                    Ваш заказ
                  </h4>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0 30px'}}>
                    <p style={{
                      fontSize: '20px',
                      fontWeight: '500'
                    }}>Товар</p>
                    <p style={{
                      fontSize: '20px',
                      fontWeight: '500'
                    }}>Всего</p>
                  </div>
                  <div>
                    {cart.map((item) => (
                      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <p style={{
                          fontSize: '17px',
                          fontWeight: '500',
                          padding: '10px 0'
                        }}>{item.title}</p>

                        <p>
                          ${item.price}
                        </p>
                      </div> 
                    ))}
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin:'10px 0'}}>
                      <p>Подытог</p>
                      <p>${totalPrice}</p>
                    </div>
                    
                  </div>

                  <div style={{
                      width: '205px',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between',
                      margin:'20px 0',
                      background: 'rgba(241, 234, 220, 1)',
                      padding: '15px 15px'
                      }}>
                      <p>Итого</p>
                      <p>${finalPrice}</p>
                    </div>                   
                </div>
              
                    <button style={{cursor: 'pointer', border: 'none', padding: '22px 34px', color: 'white', fontSize: '17px', background: 'var(--CTA, rgba(110, 156, 159, 1))'}} onClick={onClickToSubmit}>
                      Разместить заказ
                  </button>
                  
      
                
                
        </div>
      </div>
    </div>
  )
}

export default Form