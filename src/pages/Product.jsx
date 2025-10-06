import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, removeItem} from '../redux/slices/cartSlice'
import { setSelected, setCount, minusCount, setSelectedColor } from '../redux/slices/selectedSlice';


import {filter} from '../filter'

const Product = () => {
  const dispatch = useDispatch();
  const selected = useSelector(state => state.select.index)
  const cart = useSelector(state => state.cart.items)
  const count = useSelector(state => state.select.count)
  const selectedColor = useSelector(state => state.select.color)

  const {index} = useParams();
  const products = filter.find((item) => item.index === Number(index))

  const itIsInCart = cart.some(item => item.id === products.index);

  const onClickToAddToCart = () => {
  
  if(itIsInCart) {
    dispatch(removeItem(products.index));
  } else {
    dispatch(addCart({
      id: products.index,
      title: products.title,
      price: getPrice(),
      size: products.size[selected],
      totalPrice: totalPrice,
      count: count,
      color: products.color[selectedColor],
      image: products.image,
    }));
  }
};

  
  const getPrice = () => {
    if (selected === 0) return products.price;
    if (selected === 1) return products.price + 10;
    if (selected === 2) return products.price + 20;
    if (selected === 3) return products.price + 30;
  }

  const totalPrice = getPrice() * count;

  return (
    <div className='container'>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <div>
        <h1 className='product-title'>
        {products.title}  
      </h1>
      <img src={products.image} alt="" />
      </div>
      
      <div style={{margin: '180px 0 0 50px'}} className="information">
          <p className='product-price'>
            ${totalPrice}
        </p>
        <p style={{padding: '59px 0 30px'}}>Выберите размер</p>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          {products.size.map((item, i) => (
            <button onClick={() => dispatch(setSelected(i))} className={selected === i ? 'product-active' : 'product-button'}>{item}</button>
          ))}
        </div>
        

        <p style={{padding: '60px 0 35px'}}>
          Выберите цвет
        </p>
        <div style={{display: 'flex', alignItems: 'center'}}>
          {products.color.map((item, i) => (
            <div>
              <img style={{margin: '0 10px'}} className={selectedColor === i ? 'color-active' : 'color-unActive'} onClick={() => dispatch(setSelectedColor(i))} src={item} alt="" />
            </div>
          ))}
        </div>

          <div style={{position: 'relative', display: 'flex', alignItems: 'center', margin: '40px 0 0'}}>
            <button onClick={() => dispatch(setCount())}>+</button>
            <p style={{background:'transperent', border: '1px solid grey', padding: '22px 24px'}}>{count}</p>
            <button onClick={() => dispatch(minusCount())}>-</button>
            <button onClick={onClickToAddToCart} style={{cursor: 'pointer', margin: '0 0 0 10px', border: 'none', background: 'rgba(110, 156, 159, 1)', padding: '22px 50px', color: 'white', fontSize: '17px'}}>{itIsInCart ? "Удалить из корзины" : 'Добавить в корзину'}</button>
          </div>

      </div>
      </div>
    </div>
  )
}

export default Product 