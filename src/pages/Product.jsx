import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { IoGridSharp } from "react-icons/io5";
import { AiOutlineBars } from "react-icons/ai";
import BagImg from "../assets/bag.png"
import { FaHeartbeat } from "react-icons/fa";
import { SlReload } from "react-icons/sl";
import { FaCartArrowDown } from "react-icons/fa";

const Product = () => {
  return (
     <Container>
         <h2 className='text-[49px] text-[#222] font-pops font-bold'>Products</h2>
         <p><Link to="/">Home</Link>&#62;products</p>
        <div className="flex pt-[50px]">
            <div className="w-[20%]">
               <h4 className='text-[24px] text-[#222] font-pops font-semibold'>Shop by Category</h4>
               <ul>
                <li className='text-[18px] text-[#222] font-pops font-normal'>Category 1</li>
                <li className='text-[18px] text-[#222] font-pops font-normal'>Category 2</li>
                <li className='text-[18px] text-[#222] font-pops font-normal'>Category 3</li>
                <li className='text-[18px] text-[#222] font-pops font-normal'>Category 4</li>
                <li className='text-[18px] text-[#222] font-pops font-normal'>Category 5</li>
               </ul>

               <div className=" pt-[50px]">
               <h4 className='text-[24px] text-[#222] font-pops font-semibold'>Shop by Color</h4>
               <ul className=''>
                <li className='text-[18px] text-[#222] font-pops font-normal'>Color 1</li>
                <li className='text-[18px] text-[#222] font-pops font-normal'>Color 2</li>
                <li className='text-[18px] text-[#222] font-pops font-normal'>Color 3</li>
                <li className='text-[18px] text-[#222] font-pops font-normal'>Color 4</li>
                <li className='text-[18px] text-[#222] font-pops font-normal'>Color 5</li>
               </ul>
               </div>

               
               <div className=" pt-[50px]">
               <h4 className='text-[24px] text-[#222] font-pops font-semibold'>Shop by Brand</h4>
               <ul>
                <li className='text-[18px] text-[#222] font-pops font-normal'>Brand 1</li>
                <li className='text-[18px] text-[#222] font-pops font-normal'>Brand 2</li>
                <li className='text-[18px] text-[#222] font-pops font-normal'>Brand 3</li>
                <li className='text-[18px] text-[#222] font-pops font-normal'>Brand 4</li>
                <li className='text-[18px] text-[#222] font-pops font-normal'>Brand 5</li>
               </ul>
               </div>
            </div>
            <div className="w-[80%]">
             <div className="flex gap-x-5 pb-[30px]">
              <a className='text-[25px] text-[#222] font-pops font-bold border-2 border-[#222] h-[40px] w-[40px] leading-[33px] text-center hover:bg-[green] hover:text-[#fff]' href="#"><IoGridSharp className='inline-block'/></a>
              <a className='text-[25px] text-[#222] font-pops font-bold border-2 border-[#222] h-[40px] w-[40px] leading-[33px] text-center hover:bg-[green] hover:text-[#fff]' href="#"><AiOutlineBars className='inline-block'/></a>
              </div>

             <div className="flex justify-between">
             <div className="w-[30%]">
                <div className="relative group overflow-hidden cursor-pointer">
                <picture>
                    <img src={BagImg} className='w-full h-[300px]' alt=""/>
                 </picture>
                 
                    <div className="bg-[red] py-5 absolute h-[150px] bottom-[-150px] left-0 w-full flex justify-end items-center opacity-0 group-hover:bottom-0 group-hover:opacity-100 group-hover:duration-500">
                        <div className="">
                        <div className="flex items-center justify-end py-2 mr-2 gap-x-3 hover:pl-7 opacity-70 hover:opacity-100 text-[16px] hover:pr-6 duration-500 font-semibold">
                            <p>Add to Wish List</p>
                            <FaHeartbeat/>
                        </div>
                        <div className="flex items-center justify-end py-2 mr-2 gap-x-3 hover:pl-7 opacity-70 hover:opacity-100 text-[16px] hover:pr-6 duration-500 font-semibold">
                            <p>Compare</p>
                            <SlReload/>
                        </div>
                        <div className="flex items-center justify-end py-2 mr-2 gap-x-3  hover:pl-7 opacity-70 hover:opacity-100 text-[16px] hover:pr-6 duration-500 font-semibold">
                            <p>Add to Cart</p>
                            <FaCartArrowDown/>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between pt-5">
                    <h5 className='text-[16px] text-[#222] font-pops font-bold'>Basic Crew Neck Tee</h5>
                    <h4 className='text-[16px] text-[#222] font-pops font-bold'>$44.00</h4>
                </div>
              </div>
              <div className="w-[30%]">
                <div className="relative group overflow-hidden cursor-pointer">
                <picture>
                    <img src={BagImg} className='w-full h-[300px]' alt=""/>
                 </picture>
                 
                    <div className="bg-[red] py-5 absolute h-[150px] bottom-[-150px] left-0 w-full flex justify-end items-center opacity-0 group-hover:bottom-0 group-hover:opacity-100 group-hover:duration-500">
                        <div className="">
                        <div className="flex items-center justify-end py-2 mr-2 gap-x-3 hover:pl-7 opacity-70 hover:opacity-100 text-[16px] hover:pr-6 duration-500 font-semibold">
                            <p>Add to Wish List</p>
                            <FaHeartbeat/>
                        </div>
                        <div className="flex items-center justify-end py-2 mr-2 gap-x-3 hover:pl-7 opacity-70 hover:opacity-100 text-[16px] hover:pr-6 duration-500 font-semibold">
                            <p>Compare</p>
                            <SlReload/>
                        </div>
                        <div className="flex items-center justify-end py-2 mr-2 gap-x-3  hover:pl-7 opacity-70 hover:opacity-100 text-[16px] hover:pr-6 duration-500 font-semibold">
                            <p>Add to Cart</p>
                            <FaCartArrowDown/>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between pt-5">
                    <h5 className='text-[16px] text-[#222] font-pops font-bold'>Basic Crew Neck Tee</h5>
                    <h4 className='text-[16px] text-[#222] font-pops font-bold'>$44.00</h4>
                </div>
              </div>
              <div className="w-[30%]">
                <div className="relative group overflow-hidden cursor-pointer">
                <picture>
                    <img src={BagImg} className='w-full h-[300px]' alt=""/>
                 </picture>
                 
                    <div className="bg-[red] py-5 absolute h-[150px] bottom-[-150px] left-0 w-full flex justify-end items-center opacity-0 group-hover:bottom-0 group-hover:opacity-100 group-hover:duration-500">
                        <div className="">
                        <div className="flex items-center justify-end py-2 mr-2 gap-x-3 hover:pl-7 opacity-70 hover:opacity-100 text-[16px] hover:pr-6 duration-500 font-semibold">
                            <p>Add to Wish List</p>
                            <FaHeartbeat/>
                        </div>
                        <div className="flex items-center justify-end py-2 mr-2 gap-x-3 hover:pl-7 opacity-70 hover:opacity-100 text-[16px] hover:pr-6 duration-500 font-semibold">
                            <p>Compare</p>
                            <SlReload/>
                        </div>
                        <div className="flex items-center justify-end py-2 mr-2 gap-x-3  hover:pl-7 opacity-70 hover:opacity-100 text-[16px] hover:pr-6 duration-500 font-semibold">
                            <p>Add to Cart</p>
                            <FaCartArrowDown/>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between pt-5">
                    <h5 className='text-[16px] text-[#222] font-pops font-bold'>Basic Crew Neck Tee</h5>
                    <h4 className='text-[16px] text-[#222] font-pops font-bold'>$44.00</h4>
                </div>
              </div>
             </div>
             </div>  
    
        </div>
     </Container>
  )
}

export default Product