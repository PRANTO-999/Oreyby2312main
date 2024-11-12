import React, { useContext, useEffect, useState } from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { IoGridSharp } from "react-icons/io5";
import { AiOutlineBars } from "react-icons/ai";
import { ApiData } from '../components/ContextApi';
import Partex from '../components/pagination/Partex';
import PaginationArea from '../components/pagination/PaginationArea';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Product = () => {
    let [showcate, setShowCate] = useState(false)
    let sum = useContext(ApiData)
    let [pagestart, setPageStart] = useState(1)
    let [category, setCategory] = useState([])
    let [perpage, setPerPage] = useState(6)
    let [catefillter, setCateFillter] = useState([])
    let [multi, setMulti] = useState("")

    useEffect(()=>{
        setCategory([...new Set(sum.map((item)=>item.category))]) 
    },[sum])
    
  let handleItem = (citem) =>{
    let categoryFillter = sum.filter((item)=>item.category == citem)
    setCateFillter(categoryFillter)
  }

    

    let lastPage = pagestart * perpage
    let firstPage = lastPage - perpage

    let allPage = sum.slice(firstPage, lastPage)


    let pageNumber = []

    for(let i = 0; i < Math.ceil(catefillter.length > 0 ? catefillter : sum.length / perpage); i++ ){
      pageNumber.push(i)
    }
    let paginate = (pageNumber) =>{
    setPageStart(pageNumber + 1);
    
 }   
 let next = () =>{
  if(pagestart < pageNumber.length){
    setPageStart((state)=>state+1)
  }

 } 
 let prve = () =>{
    if(pagestart > 1){
        setPageStart((state)=> state-1)
    }
 }
 let handleList = () =>{
    setMulti("activeMulti")
 }
   
 console.log(multi);
 
    return (
        <Container>
            <h2 className='text-[49px] text-[#222] font-pops font-bold'>Products</h2>          
            <p><Link to="/">Home</Link>&#62;products</p>
            <div className="flex pt-[50px]">
                <div className="w-[20%]">
                    <div className=" pr-[15px]">
                    <div onClick={()=>setShowCate(!showcate)} className="flex justify-between items-center">
                    <h4 className='text-[24px] text-[#222] font-pops font-semibold'>Shop by Category</h4>
                    {showcate == true ? <FaMinus/>  : <FaPlus/>}
                    </div>
                    {showcate &&
                     <ul>
                        {category.map((item)=>(
                           <li onClick={()=>handleItem(item)}>{item}</li>
                        ))}
                     </ul>
                    }
                    </div>

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
                        <a onClick={()=>setMulti("")} className='text-[25px] text-[#222] font-pops font-bold border-2 border-[#222] h-[40px] w-[40px] leading-[33px] text-center hover:bg-[green] hover:text-[#fff]' href="#"><IoGridSharp className='inline-block' /></a>
                        <a onClick={handleList} className='text-[25px] text-[#222] font-pops font-bold border-2 border-[#222] h-[40px] w-[40px] leading-[33px] text-center hover:bg-[green] hover:text-[#fff]' href="#"><AiOutlineBars className='inline-block' /></a>
                    </div>
                    <div className="text-end">
                        <Partex allPage={allPage} catefillter={catefillter} multi={multi} />
                        <div className="">
                            <PaginationArea pageNumber={pageNumber} paginate={paginate} pagestart={pagestart} next={next} prve={prve}/>
                        </div>
                    </div>
                </div>

                </div>



        </Container>
    )
}

export default Product