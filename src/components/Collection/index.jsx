import React from 'react'
import brooke from '../../assets/brooke-cagle-h3vR1F8-caI-unsplash 1.png'
import christopher from '../../assets/christopher-campbell-va0YmkIFtPA-unsplash 1.png'
import ben from '../../assets/Фото товара.png'

import styles from './Collection.module.scss'

import { Link } from 'react-router-dom'

import {collection} from '../../data'

const Collection = () => {

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>
        Новая коллекция
      </h2>
      <div className={styles.cards}>
        {collection.map((item) => (
          <div key={item.title}>
            <img className={styles.image} src={item.image} alt="" />
            <p className={styles.name}>{item.title}</p>
            <p className={styles.price}>${item.price}</p>
          </div>
        ))}
      </div>

        <Link to='/magazine'>
          <button className={styles.btn}>
            Открыть магазин
          </button>
        </Link>
      
    </div>

  )
}

export default Collection