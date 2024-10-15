
import React, { useState } from 'react'
import Container from './Container'
import Logo from "../assets/logo.png"
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Flex from './Flex';
import { Link } from 'react-router-dom';

const Menu = () => {
    let [show ,setShow] = useState(false)

  return (
   <nav className='py-7'>
     <Container>
       <Flex className="justify-between items-center">
       <div className="w-[15%]">
            <picture>
                <img src={Logo} alt="" />
            </picture>
        </div>

        <div className="w-[85%]">
            <ul className={`lg:flex justify-center absolute lg:static text-center z-10 ${show == true ? 'top-[50px] duration-500 left-0 bg-[green] w-full':'top-[-200px] duration-500 left-0  w-full'}`}>
                <li className='font-pops text-[#222] text-[16px] font-bold lg:px-5 lg:py-0 py-2'><Link to="/">Home</Link></li>
                <li className='font-pops text-[#222] text-[16px] font-bold lg:px-5 lg:py-0 py-2'><Link to="/product">Shop</Link></li>
                <li className='font-pops text-[#222] text-[16px] font-bold lg:px-5 lg:py-0 py-2'>About</li>
                <li className='font-pops text-[#222] text-[16px] font-bold lg:px-5 lg:py-0 py-2'>Contacts</li>
                <li className='font-pops text-[#222] text-[16px] font-bold lg:px-5 lg:py-0 py-2'>Journal</li>
            </ul>
        </div>

        <div className="lg:hidden flex items-center" onClick={()=>setShow(!show)}>
            {show ?  <RxCross2/>:  <FaBars/>}
        </div>
       </Flex>
    </Container>
   </nav>
  )
}

export default Menu