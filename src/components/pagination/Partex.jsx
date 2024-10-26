import React from 'react'
import { FaHeartbeat } from "react-icons/fa";
import { SlReload } from "react-icons/sl";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Partex = ({allPage}) => {
  return (

  <div className="flex justify-between flex-wrap">
                        {allPage.map((item,i) => (
                            <div key={i}  className="w-[30%]">
                                <Link to={`/product/${item.id}`}>
                                <div className="relative group overflow-hidden cursor-pointer">
                                    <picture>
                                        <img src={item.thumbnail} className='w-full h-[300px]' alt="" />
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
                                    <h5 className='text-[16px] text-[#222] font-pops font-bold'>{item.title}</h5>
                                    <h4 className='text-[16px] text-[#222] font-pops font-bold'>{item.price}</h4>
                                </div>
                                </Link>
                                
                            </div>
                        ))}
                    </div>
   
  )
}

export default Partex