import React from 'react'
import Container from './Container'
import Sogo from "../assets/logo.png"
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='py-[100px] bg-[#F5F5F3]'>
        <Container>
            <div className="flex ">
                <div className="w-[15%]">
                    <h4 className='text-[24px] text-[#222] font-pops font-bold'>MENU</h4>
                    <ul>
                        <li className='text-[20px] text-[#222] font-pops font-normal'>Home</li>
                        <li className='text-[20px] text-[#222] font-pops font-normal'>Shop</li>
                        <li className='text-[20px] text-[#222] font-pops font-normal'>About</li>
                        <li className='text-[20px] text-[#222] font-pops font-normal'>Contact</li>
                        <li className='text-[20px] text-[#222] font-pops font-normal'>Journal</li>
                    </ul>
                </div>
                <div className="w-[15%]">
                <h4 className='text-[24px] text-[#222] font-pops font-bold'>SHOP</h4>
                    <ul>
                        <li className='text-[20px] text-[#222] font-pops font-normal'>Category 1</li>
                        <li className='text-[20px] text-[#222] font-pops font-normal'>Category 2</li>
                        <li className='text-[20px] text-[#222] font-pops font-normal'>Category 3</li>
                        <li className='text-[20px] text-[#222] font-pops font-normal'>Category 4</li>
                        <li className='text-[20px] text-[#222] font-pops font-normal'>Category 5</li>
                    </ul>
                </div>
                <div className="w-[20%]">
                <h4 className='text-[24px] text-[#222] font-pops font-bold'>HELP</h4>
                    <ul>
                        <li className='text-[20px] text-[#222] font-pops font-normal'>Privacy Policy</li>
                        <li className='text-[20px] text-[#222] font-pops font-normal'>Terms & Conditions</li>
                        <li className='text-[20px] text-[#222] font-pops font-normal'>Special E-shop</li>
                        <li className='text-[20px] text-[#222] font-pops font-normal'>Shipping</li>
                        <li className='text-[20px] text-[#222] font-pops font-normal'>Secure Payments</li>
                    </ul>
                </div>
                <div className="w-[25%]">
                <h4 className='text-[24px] text-[#222] font-pops font-bold'>HELP</h4>
                <p className='text-[20px] text-[#222] font-pops font-semibold'>company@domain.com</p>
                <h4 className='text-[20px] text-[#222] font-pops font-semibold'>575 Crescent Ave. Quakertown, PA 18951</h4>
                </div>
                <div className="w-[25%]">
                    <picture>
                        <img src={Sogo} className='w-[100px] h-[30px]' alt="" />
                    </picture>
                </div>

            </div>

            <div className="flex pt-[50px]">
                    <div className="w-[60%]">
                       <div className="flex items-center gap-x-5">
                       <a className='text-[24px]' href="#"><FaFacebookSquare/></a>
                        <a className='text-[24px]'  href="#"><FaTwitter/></a>
                        <a className='text-[24px]'  href="#"><FaInstagram/></a>
                       </div>
                    </div>
                    <div className="w-[40%]">
                        <p className='text-[18px] text-[#222] font-pops font-normal'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                    </div>
                </div>
        </Container>
    </footer>
  )
}

export default Footer