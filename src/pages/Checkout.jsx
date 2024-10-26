
import React from 'react'
import Container from '../components/Container'

const Checkout = () => {
  return (
   <Container>
    <div className="">
        <div className="font-pops text-[#222] text-[49px] font-bold">Checkout</div>
        <p>Home &#62; Checkout</p>
        <div className="py-[127px]">
            <a className='font-pops font-semibold text-[30px] ' href="#">Have a coupon? Click here to enter your code</a>
        </div>
        <div className="">
            <h3 className='font-pops font-bold text-[39px]'>Billing Details</h3>
            <div className="py-[20px] flex justify-between">
              <div className="">
              <p className='font-pops text-[#222] text-[20px] font-normal'>First Name *</p>
              <input type="text" className='w-[400px] h-[50px] border-none pl-[20px]' placeholder='Enter your name' />
              </div>
              <div className="">
              <p className='font-pops text-[#222] text-[20px] font-normal'>Last Name *</p>
              <input type="text" className='w-[400px] h-[50px] border-none pl-[20px]' placeholder='Enter your name' />
              </div>
            </div>
            <div className="py-[20px]">
                <p className='font-pops text-[#222] text-[20px] font-normal'>Country *</p>
                <input type="text" className='w-[400px] h-[50px] border-none pl-[20px]' placeholder='Enter your country name' />
            </div>
            <div className="py-[20px]">
                <p className='font-pops text-[#222] text-[20px] font-normal'>Companye Name (optional)</p>
                <input type="text" className='w-[400px] h-[50px] border-none pl-[20px]' placeholder='Enter your company name' />
            </div>
            <div className="py-[20px]">
                <p className='font-pops text-[#222] text-[20px] font-normal'>Street Address *</p>
                <input type="text" className='w-[400px] h-[50px] border-none pl-[20px]' placeholder='House number and street name' />
            </div>
            <div className="py-[20px]">
                <p className='font-pops text-[#222] text-[20px] font-normal'>Town/City *</p>
                <input type="text" className='w-[400px] h-[50px] border-none pl-[20px]' placeholder='Town/City' />
            </div>
            <div className="py-[20px]">
                <p className='font-pops text-[#222] text-[20px] font-normal'>County (optional)</p>
                <input type="text" className='w-[400px] h-[50px] border-none pl-[20px]' placeholder='County' />
            </div>
            <div className="py-[20px]">
                <p className='font-pops text-[#222] text-[20px] font-normal'>Post Code *</p>
                <input type="number" className='w-[400px] h-[50px] border-none pl-[20px]' placeholder='Post Code' />
            </div>
            <div className="py-[20px]">
                <p className='font-pops text-[#222] text-[20px] font-normal'>Email Address *</p>
                <input type="email" className='w-[400px] h-[50px] border-none pl-[20px]' placeholder='Email' />
            </div>
            <div className="py-[20px]">
                <p className='font-pops text-[#222] text-[20px] font-normal'>Phone *</p>
                <input type="number" className='w-[400px] h-[50px] border-none pl-[20px]' placeholder='Phone' />
            </div>
        </div>
    </div>
   </Container>
  )
}

export default Checkout