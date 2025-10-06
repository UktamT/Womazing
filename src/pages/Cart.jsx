import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem } from '../redux/slices/cartSlice'
import { setDiscount} from '../redux/slices/cartSlice'

const Cart = () => {
  const [promo, setPromo] = React.useState('')
  const [promoSuccesfull, setPromoSuccesfull] = React.useState(false)

  const dispatch = useDispatch();
  const discount = useSelector(state => state.cart.discount)
  const cart = useSelector(state => state.cart.items)

  const totalPrice = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <div className='container'>
      <h3 style={{margin: '150px 0 20px'}} className='cart-title'>
        Корзина
      </h3>
      <p style={{marginBottom: '200px', fontSize: '17px', fontWeight: '500'}}>
        Главная <span style={{margin: '0 10px'}}>-</span> <span style={{color: 'rgba(145, 145, 145, 1)', fontSize:'17px', fontWeight: '500'}}>Корзина</span>
      </p>

      {
        cart.length > 0 ?
        <div className="cart-bottom">
        <div style={{display: 'flex', alignItems: 'center', borderBottom: '1px solid gray'}}>
          <p style={{marginRight: '450px', paddingBottom: '20px'}} className='size'>Товар</p>

          <p style={{marginRight: '180px', paddingBottom: '20px'}} className='size'>Цена</p>
          <p style={{marginRight: '180px', paddingBottom: '20px'}} className='size'>Количество</p>
          <p style={{paddingBottom: '20px'}} className='size'>Всего</p>
        </div>
        <div>
          <img src={cart.image} alt="" />
            {cart.map((item, i) => (
              <div style={{marginBottom: '20px'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                <p onClick={()=>dispatch(removeItem(item.id))} style={{cursor: 'pointer', color: 'gray', fontSize: '27px', fontWeight: '500', paddingRight: '20px'}}>
                  x
                </p>
                <img style={{width: '100px', height: '150px'}} src={item.image} alt="" />
                <h2 style={{paddingLeft: '20px'}}>{item.title}</h2>
                <p style={{padding: '0 20px 0 300px'}}>${item.price}</p>
                <p style={{margin: '0 240px 0 200px', border: '1px solid black', padding: '15px 20px'}}>{item.count}</p>
                <p>${item.totalPrice}</p>
                </div>
              </div>
            ))}

            <div style={{display: 'flex', marginTop: '100px', alignItems: 'center', justifyContent: 'space-between'}}>
          <div style={{display: 'flex',}}>
            <div style={{borderBottom: '1px solid black', width:'255px'}}>
          <input style={{border:'none', fontSize:'22px', margin: '20px 0 0 0'}} placeholder='Введите купон' type="text" value={promo} onChange={(e) => setPromo(e.target.value)} />
        </div>
        <button onClick={() => {
          if(promo === '123456789') {
            dispatch(setDiscount(0.2))
            setPromoSuccesfull(true)
          } else{
            dispatch(setDiscount(0))
            setPromoSuccesfull(false)
          }


        }} style={{color: 'var(--CTA, rgba(110, 156, 159, 1))', cursor: 'pointer', border:'1px solid var(--CTA, rgba(110, 156, 159, 1))', background:'transparent', padding: '22px 50px', marginLeft: '10px'}}>{promoSuccesfull ? 'Купон успешно применен' : 'Применить'}</button>
          </div>
          <button style={{color:'var(--CTA, rgba(110, 156, 159, 1))', border:'1px solid var(--CTA, rgba(110, 156, 159, 1))', background:'transparent', padding: '22px 50px', marginLeft: '10px'}}>Обновить корзину</button>
        
        </div>

      
            <div style={{display: 'flex', alignItems: 'center', columnGap: '20px', justifyContent: 'flex-end', marginTop: '146px'}}>
                <p style={{cursor: 'pointer', border: 'none', padding: '18px 50px', color: 'black', fontSize: '25px', background: 'rgba(241, 234, 220, 1)'}}>Итого: ${totalPrice * (1 - discount)}</p>
                <Link
                to='/form'
                state={{ discount, totalPrice: totalPrice * (1 - discount) }}
                >
                <button style={{cursor: 'pointer', border: 'none', padding: '22px 50px', color: 'white', fontSize: '17px', background: 'var(--CTA, rgba(110, 156, 159, 1))'}}>
                  Оформить заказ
                </button>
                </Link>
                
              </div>
          
            
        </div>
        

        
        
      </div> : 'Корзина пуста'
      }
      
    </div>
  )
}

export default Cart