import React from 'react'
import dress from '../../assets/dress (1) 1.svg'
import call from '../../assets/Vector.svg'
import cart from '../../assets/Vector (1).svg'

import { Link } from 'react-router-dom'


import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className="container">
      <div className={styles.header}>
        <Link to='/'>
        <div className={styles.logo}>
        <img src={dress} alt="" />
        <h1 className={styles.title}>WOMAZING</h1>
        </div>
        </Link>
      <ul className={styles.ul}>
        <li className={styles.liSecond}>
          Главная
        </li>
        <Link to='/magazine'>
        <li className={styles.li}>
          Магазин
        </li>
        </Link>
        
        <li className={styles.li}>
          О бренде
        </li>
        <li className={styles.li}>
          Контакты
        </li>
      </ul>
      <div className={styles.left}>
        <div className={styles.phone}>
          <img src={call} alt="" />
          <p className={styles.number}>+7 (495) 823-54-12</p>
        </div>
        <Link to='/cart'>
        <img src={cart} alt="" />
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Header