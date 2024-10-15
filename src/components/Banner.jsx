import React from 'react'
import BanImg from "../assets/banner.png"
import Container from './Container'
import Flex from './Flex'
import { FaCarSide } from "react-icons/fa";
import { IoReloadSharp } from "react-icons/io5";
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position:"absolute",
          top:"50%",
          left:"60px",
          transform:"translateY(-50%)"
          
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className='banPart'
        style={{
          width: "30px",
          color: "transparent",
          fontSize:"20px",
          fontWeight:"600",
          borderRight: "4px #fff solid",
          padding:"10px 0",
        }}
      >
        0{i + 1}
      </div>
    )
  };
  return (
    <div className='pt-[20px] z-10'>
        <Slider {...settings}>
        <picture>
        <img src={BanImg} alt="" />
      </picture>
      <picture>
        <img src={BanImg} alt="" />
      </picture>
      <picture>
        <img src={BanImg} alt="" />
      </picture>
      <picture>
        <img src={BanImg} alt="" />
      </picture>
        </Slider>
      <Container>
      <Flex className="items-center justify-between py-6">
      <div className="flex items-center">
        <span className='text-[24px] text-[#222] font-pops font-bold'>2</span>
        <p className='text-[16px] text-[#222] font-pops font-semibold pl-4'>Two years warranty</p>
      </div>
      <div className="flex items-center">
        <FaCarSide/>
        <p className='text-[16px] text-[#222] font-pops font-semibold pl-4'>Free shipping</p>
      </div>
      <div className="flex items-center">
        <IoReloadSharp/>
        <p className='text-[16px] text-[#222] font-pops font-semibold pl-4'>Return policy in 30 days</p>
      </div>
    </Flex>
      </Container>
    </div>
  )
}

export default Banner