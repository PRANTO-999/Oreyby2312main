import React, { useEffect, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaBars } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { useRef } from 'react';
import { RxCross2 } from "react-icons/rx";



const Box = () => {
  let [info, setInfo] = useState(false)
  let [handleshow, setHandleshow] = useState(false)
  let [getshow, setGetshow] = useState(false)

  let getData = useRef()
  let getForm = useRef()
  let disForm = useRef()


  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (getData.current.contains(e.target) == true) {
        setInfo(!info)
      } else {
        setInfo(false)
      }
      if (getForm.current.contains(e.target) == true) {
        setHandleshow(!handleshow)
      } else {
        setHandleshow(false)
      }
      if (disForm.current.contains(e.target) == true) {
        setGetshow(!getshow)
      } else {
        setGetshow(false)
      }
    })
  }, [info, handleshow, getshow])


  return (
    <section className="my-[30px] px-[10px]">
      <Container>
        <div className="flex flex-wrap items-center">
          <div className="lg:w-[20%] relative">
            <div className="flex items-center" ref={getData}>
              <FaBars />
              <p className='pl-[10px]'>Shop by Category</p>
            </div>
            {info &&
              <div className="absolute top-[32px] left-0 bg-[#222] w-[300px] z-40">
                <ul className='py-[20px]'>
                  <li className='text-[16px] text-[#fff] opacity-70 hover:opacity-100 hover:pl-8 duration-700 pl-[20px] py-4 lg:py-0'>Accesories</li>
                  <li className='text-[16px] text-[#fff] opacity-70 hover:opacity-100 hover:pl-8 duration-700 pl-[20px] py-4 lg:py-0'>Furniture</li>
                  <li className='text-[16px] text-[#fff] opacity-70 hover:opacity-100 hover:pl-8 duration-700 pl-[20px] py-4 lg:py-0'>Electronics</li>
                  <li className='text-[16px] text-[#fff] opacity-70 hover:opacity-100 hover:pl-8 duration-700 pl-[20px] py-4 lg:py-0'>Clothes</li>
                  <li className='text-[16px] text-[#fff] opacity-70 hover:opacity-100 hover:pl-8 duration-700 pl-[20px] py-4 lg:py-0'>Bags</li>
                  <li className='text-[16px] text-[#fff] opacity-70 hover:opacity-100 hover:pl-8 duration-700 pl-[20px] py-4 lg:py-0'>Home appliances</li>
                </ul>
              </div>
            }
          </div>
          <div className="lg:w-[60%] w-full my-[20px] lg:my-0">
            <input className='border-2 border-[#222] w-full h-9 lg:pl-12 px-2' type="text" placeholder='Enter your search product...' />
          </div>
          <div className="lg:w-[20%]">
                <div className="flex items-center justify-end">
              <div className="flex items-center pr-[20px] relative ">
                <div className="flex items-center pr-[20px]" ref={getForm}>
                  <FaUserAlt />
                  <IoIosArrowDown />          
                </div>

                {handleshow &&
                  <div className="absolute top-[30px] left-[-300px] z-40">
                    <h3 className='w-[250px] h-[40px] leading-[40px] text-center border-2 border-[#222] hover:bg-[#222] hover:text-[#fff] duration-500'>My Account</h3>
                    <h3 className='w-[250px] leading-[40px] h-[40px] text-center border-2 border-[#222] hover:bg-[#222] hover:text-[#fff] duration-500 mt-[10px]'>Log Out</h3>
                  </div>
                }
              </div>
              <div className="relative ">
                <div className="" ref={disForm}>
                  <FaShoppingCart />
                </div>
                {getshow &&
                  <div className="w-[360px] h-[241px] absolute top-[50px] left-[-350px] z-40">
                    <div className="flex items-center justify-between bg-[#F5F5F3] py-4 px-4 mb-[10px]">
                      <div className="w-[80px] h-[80px] bg-[#D8D8D8] pl-2"></div>
                      <div className="">
                        <h3>Black Smart Watch</h3>
                        <h4>$44.00</h4>
                      </div>
                      <div className="pr-2">
                        <RxCross2 />
                      </div>
                    </div>
                    <div className="">
                      <h4 className='text-[24px] text-[#222] font-pops font-semi'>Subtotal: $44.00</h4>
                    </div>
                    <div className="flex justify-between items-center pt-[20px]">
                      <div className="">
                        <h3 className='w-[160px] h-[60px] leading-[60px] text-center border-2 border-[#222] hover:bg-[#222] hover:text-[#fff] duration-500'>View Cart</h3>
                      </div>
                      <div className="">
                        <h4 className='w-[160px] h-[60px] leading-[60px] text-center border-2 border-[#222] hover:bg-[#222] hover:text-[#fff] duration-500'>Checkout</h4>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Box