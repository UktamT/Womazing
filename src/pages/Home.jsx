import React from 'react'
import Header from '../components/Header'

import '../style.scss'
import Season from '../components/Season'
import Collection from '../components/Collection'

const Home = () => {
  return (
    <div className='container'>
      <Season/>
      <Collection/>
    </div>
  )
}

export default Home