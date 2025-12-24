import React from 'react'

import upper from '../../assets/Vector 1.svg'
import mainWoman from '../../assets/dmitriy-7DD6tfTKqS4-unsplash 1.png'
import rightWoman from '../../assets/ionut-comanici-RDcEWH5hSDE-unsplash 1.png'
import leftWoman from '../../assets/allef-vinicius-YG97wpX0OEg-unsplash 1.png'

import { Link } from 'react-router-dom'

import styles from './Season.module.scss'

const Season = () => {
  return (
    <section className={styles.root}>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>
          Новые поступления <br />
          в этом сезоне
        </h2>
        <div className={styles.width}>
          <p className={styles.subtitle}>
            Утонченные сочетания и бархатные <br />
            оттенки - вот то, что вы искали в этом <br />
            сезоне. Время исследовать.
          </p>
          <div className={styles.button}>
            <div className={styles.buttonImage}>
              <img src={upper} alt="arrow" />
            </div>
            <Link to='/magazine' >
            <button className={styles.btn}>Открыть магазинdddd</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.imageBlock}>
        <div className={styles.bg}></div>
        <img src={mainWoman} alt="main" className={styles.mainImg} />
        <img src={leftWoman} alt="left" className={styles.leftImg} />
        <img src={rightWoman} alt="right" className={styles.rightImg} />
      </div>
    </section>
  )
}

export default Season
