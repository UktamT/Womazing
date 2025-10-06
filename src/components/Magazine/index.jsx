import React from 'react'
import brooke from '../../assets/brooke-cagle-h3vR1F8-caI-unsplash 1.png'
import christopher from '../../assets/christopher-campbell-va0YmkIFtPA-unsplash 1.png'
import ben from '../../assets/Фото товара.png'

import styles from './Magazine.module.scss'
import {filter} from '../../filter'
import { Link } from 'react-router-dom'

const Magazine = () => {

  const [selected, setSelected] = React.useState(0);

  const filteredItems = selected === 0 ? filter : filter.filter(item => item.id === selected)

  return (
    <div>
      <h2 className={styles.h}>
        Магазин
      </h2>
      <h3 className={styles.hThree}>
        Главная - <span className={styles.span}>Магазин</span>
      </h3>
      <div className={styles.flex}>
        <button className={selected === 0 ? styles.btn : styles.btnActive} onClick={() => setSelected(0)}>
          Все
        </button>
        <button className={selected === 1 ? styles.btn : styles.btnActive} onClick={() => setSelected(1)}>
          Пальто
        </button>
        <button className={selected === 2 ? styles.btn : styles.btnActive} onClick={() => setSelected(2)}>
          Свитшоты
        </button>
        <button className={selected === 3 ? styles.btn : styles.btnActive} onClick={() => setSelected(3)}>
          Кардиганы
        </button>
        <button className={selected === 4 ? styles.btn : styles.btnActive} onClick={() => setSelected(4)}>
          Толстовки
        </button>

      </div>
      <div className={styles.cardsFlex}>
        {
        filteredItems.map((item) => (
         <Link to={`/product/${item.index}`}>
          <div className={styles.bottom}>
            <img className={styles.image} src={item.image} alt="" />
            <p className={styles.title}>{item.title}</p>
            <p className={styles.subtitle}>${item.price}</p>
          </div>
          </Link>
          
        ))
      }
      </div>
    </div>
  )
}

export default Magazine