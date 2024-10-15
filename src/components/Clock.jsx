import React from 'react'
import CokImg from "../assets/clock.png"

const Clock = () => {
  return (
    <div className='my-[50px]'>
        <picture>
            <img src={CokImg} alt="" />
        </picture>
    </div>
  )
}

export default Clock