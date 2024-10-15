import React from 'react'
import Container from './Container'
import Flex from './Flex'
import cardImg from "../assets/card1.png"
import cardImg1 from "../assets/card2.png"
import cardImg2 from "../assets/card3.png"

const Sale = () => {
  return (
    <div>
        <Container>
            <Flex className="justify-between">
                <div className="w-[49%]">
                    <picture>
                        <img src={cardImg} alt="" />
                    </picture>
                </div>
                <div className="w-[49%]">
                    <picture>
                        <img src={cardImg1} alt="" />
                    </picture>
                    <picture>
                        <img src={cardImg2} className='mt-[50px]'  alt="" />
                    </picture>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Sale