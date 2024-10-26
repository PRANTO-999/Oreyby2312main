import React from 'react'
import Menu from '../Menu'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Box from '../Box'

const RootLayout = () => {
  return (
    <>
    <Menu/>
    <Box/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout