import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import { GoStarFill } from "react-icons/go";
import { Link, useParams } from 'react-router-dom';
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";
import { IoIosStarOutline } from "react-icons/io";
import { RiStarHalfLine } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/slice/productSlice';

const ProductDetails = () => {
  let dispatch = useDispatch()
  let [saw, setSaw] = useState(false)
  let [mingleproduct, setMingleProduct] = useState([])
  let idItem = useParams()
   
  let proItem = () =>{
    axios.get(`https://dummyjson.com/products/${idItem.id}`).then((response)=>{
      setMingleProduct(response.data)
    })
  }
  useEffect(()=>{
    proItem()
  },[])


let clientRating = Array.from({length:5},(elm, index)=>{
  let number = index + 0.5
     return(
      mingleproduct.rating > index + 1 ? <GoStarFill/> : 
      mingleproduct.rating > number ? <RiStarHalfLine/> : <IoIosStarOutline/>
     )
})
let handleAdd = (item) =>{
  dispatch(addToCart({...item, qun:1}))
  
}

    
  return (
    <Container> 
    <h2 className='text-[49px] text-[#222] font-pops font-bold'>Products</h2>
     <p>Home&#62;Products</p>

     <div className="flex items-center py-5">
      <div className="w-[85%]">
       <div className="flex items-center">
       <h4 className='text-[30px] text-[#222] font-pops font-semibold pr-[20px]'>Product</h4>
       <span className='pr-[30px]'>$88.00</span>
       <p>$44.00</p>
       </div>
      </div>
      <div className="w-[15%]">
        <a className='text-[16px] text-[#222] font-pops font-normal hover:bg-[#222] hover:text-[#fff] px-[30px] py-[20px] text-center border-2 border-[#222] duration-700' href="#">Add to Cart</a>
      </div>
     </div>

      <div className="flex flex-wrap justify-between gap-y-[50px]">
        {mingleproduct?.images?.map((item,i)=>(
             <div className="w-[48%]">
             <picture>
               <img src={item} className='w-full' alt="" />
             </picture>
           </div>
      
    ))}
          </div>
          <div className="">
          <h2 className='text-[49px] text-[#222] font-pops font-semibold'>Products</h2>
          <div className="flex items-center py-[20px]">
            <div className="flex items-center text-[yellow] text-[4 0px] pr-[40px]">
                {clientRating}
            </div>
            <span>1 Review</span>
          </div>
         <div className="flex items-center">
         <h2 className='text-[25px] text-[#222] font-pops font-semibold'>QUANTITY:</h2>
          <div className="flex items-center justify-around px-[60px] py-[7px] border-2 border-[#222]">
             <div className="">
             <span className='text-[30px] font-pops font-semibold'>-</span>
             </div>
            <div className="">
            <p className='text-[30px] font-pops font-semibold pl-[50px] pr-[50px]'>0</p>    
            </div>
           <div className="">
           <span className='text-[30px] font-pops font-semibold'>+</span>
           </div>
          </div>
         </div>
         
         <div className="flex items-center py-[20px]">
         <h2 className='text-[25px] text-[#222] font-pops font-semibold'>STATUS:</h2>
         <h3 className='text-[20px] text-[#222] font-pops font-normal pl-[50px]'>In stock</h3>
         </div>
         <div className="flex items-center">
        <a className='text-[16px] text-[#222] font-pops font-normal hover:bg-[#222] hover:text-[#fff] px-[30px] py-[20px] text-center border-2 border-[#222] duration-700' href="#">Add to Wish List</a>
        <Link to="/cart">
        <a onClick={()=>handleAdd(mingleproduct)} className='text-[16px] text-[#222] font-pops font-normal hover:bg-[#222] hover:text-[#fff] px-[30px] py-[20px] text-center border-2 border-[#222] duration-700 ml-[20px]' href="#">Add to Cart</a>
        </Link>
      </div>
      <div className="py-[20px]">
        <div onClick={()=>setSaw(!saw)} className="w-[50%] flex items-center justify-between">
          <h5 className='text-[20px] text-[#222] font-pops font-medium'>FEATURES  & DETAILS</h5>
          {saw == true ? <span><LuMinus/></span> :<span><FiPlus/></span>}
        </div>
        {saw &&
              <div className="">
              <p className='text-[15px] text-[#222] font-pops font-medium w-[600px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        }
     
      </div>
       </div>
       
    </Container>
  )
}

export default ProductDetails