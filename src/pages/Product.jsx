import React from 'react'
import { useParams } from 'react-router-dom'

import {filter} from '../filter'

const Product = ({cart, setCart, onAddToCart}) => {

  const {index} = useParams();
  const products = filter.find((item) => item.index === Number(index))

  const [selected, setSelected] = React.useState(0)
  const [selectedColor, setSelectedColor] = React.useState(0)
  const [added, setAdded] = React.useState(false)
  const [count, setCount] = React.useState(1)

  const itIsInCart = cart.some(item => item.id === products.index)


  const onClickToAddToCart = () => {
    onAddToCart({
      id: products.index,
      title: products.title,
      price: getPrice(),
      size: products.size[selected],
      totalPrice,
      count: count,
      color: products.color[selectedColor],
      image: products.image,
    })
    setAdded(true);
    if(itIsInCart) {
      const removedItem = cart.filter((item) => item.id !== products.index)
      setCart(removedItem)
    } else {
      const updatedCart = [...cart, {
        id: products.index,
      title: products.title,
      price: getPrice(),
      size: products.size[selected],
      totalPrice,
      count: count,
      color: products.color[selectedColor],
      image: products.image,
      }]
      setCart(updatedCart)
    }
  }
  
  const getPrice = () => {
    if (selected === 0) return products.price;
    if (selected === 1) return products.price + 10;
    if (selected === 2) return products.price + 20;
    if (selected === 3) return products.price + 30;

  }

  const totalPrice = getPrice() * count;

  const plus = () => setCount(prev => prev+1)
  const minus = () => setCount(prev => (prev > 1 ? prev - 1 : 1));

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
            <button onClick={() => setSelected(i)} className={selected === i ? 'product-active' : 'product-button'}>{item}</button>
          ))}
        </div>
        

        <p style={{padding: '60px 0 35px'}}>
          Выберите цвет
        </p>
        <div style={{display: 'flex', alignItems: 'center'}}>
          {products.color.map((item, i) => (
            <div>
              <img className={selectedColor === i ? 'color-active' : 'color-unActive'} onClick={() => setSelectedColor(i)} src={item} alt="" />
            </div>
          ))}
        </div>

          <div style={{position: 'relative', display: 'flex', alignItems: 'center', margin: '40px 0 0'}}>
            <button onClick={plus}>+</button>
            <p style={{background:'transperent', border: '1px solid grey', padding: '22px 24px'}}>{count}</p>
            <button onClick={minus}>-</button>
            <button onClick={onClickToAddToCart} style={{cursor: 'pointer', margin: '0 0 0 10px', border: 'none', background: 'rgba(110, 156, 159, 1)', padding: '22px 50px', color: 'white', fontSize: '17px'}}>{itIsInCart ? "Удалить из корзины" : 'Добавить в корзину'}</button>
          </div>

      </div>
      </div>
    </div>
  )
}

export default Product 