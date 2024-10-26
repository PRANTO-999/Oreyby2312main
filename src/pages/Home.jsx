import React from 'react'
import Banner from '../components/Banner'
import Sale from '../components/Sale'
import Newarrivals from '../components/Newarrivals'
import Bestseller from '../components/Bestseller'
import Clock from '../components/Clock'


const Home = () => {
  return (
    <>
      <Banner />
      <Sale />
      <Newarrivals />
      <Bestseller />
      <Clock />
    </>
  )
}

export default Home