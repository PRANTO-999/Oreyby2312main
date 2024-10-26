import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import { FaHeartbeat } from "react-icons/fa";
import { SlReload } from "react-icons/sl";
import { FaCartArrowDown } from "react-icons/fa";
import Slider from "react-slick";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { ApiData } from './ContextApi';


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className='absolute top-[50%] right-0 w-[40px] h-[40px] leading-[40px] text-center rounded-full bg-[#9c9696] translate-y-[-50%]'
      onClick={onClick}
    ><IoIosArrowRoundForward className='inline-block text-[#fff]' /></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className='absolute top-[50%] left-0 w-[40px] h-[40px] leading-[40px] text-center rounded-full bg-[#9c9696] z-50 translate-y-[-50%]'
      onClick={onClick}
    ><IoIosArrowRoundBack className='inline-block text-[#fff]'/></div>
  );
}

const Newarrivals = () => {

  let dum = useContext(ApiData)

    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };


  
  return ( 
    <Container>
        <h3 className='text-[40px] text-[#222] font-pops font-bold'>New Arrivals</h3>
        <Slider {...settings}>
        {dum.map((item,i)=>(
                <div key={i} className="!w-[96%] my-3">
                <div className="relative group overflow-hidden cursor-pointer">
                <picture>
                    <img src={item.thumbnail} className='w-full h-[300px]' alt=""/>
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
              </div>
       ))}
        </Slider>
    </Container>
  )   
}

export default Newarrivals