import React from 'react'
import cardData from './data'
import arrow from "./assets/Arrow.png"
import logo from "./assets/name.png"
import swipe from "./assets/swipe.png"
import orderArr from "./assets/Vector.png"

function Cards() {

  return (
    <div className={` w-[1080px] text-white flex flex-col justify-center items-center bg-black `}>
          {cardData.map((card, index) => (
              <div id={card.id + index} className={`h-screen w-full px-[90px] bg-img${card.id} bg-contain bg-no-repeat bg-right-top`}>
                  <div className='flex justify-between mt-[20px]'>
                      <img src={logo} alt="logo"/>
                      <img src={arrow} alt="arrow"/>
                  </div>
                  <div className='font-black text-[110px] leading-[113px] mt-[170px]'>
                      <p className='text-[28px] leading-[29px] mb-[23px]'>{card.subtag }</p>
                      <h1>{ card.tag1}</h1>
                      <h1>{ card.tag2}</h1>
                </div>
                <div className='mt-[130px]  ml-[200px] animate-pulse'>
                     <img src={orderArr} alt="order"  className='w-[90px] h-[100px]'/> 
                    </div>
                <div className='flex justify-between items-center font-black text-[40px] leading-[41px] mb-[30px]'>
                          <p className=''>Order Now</p>
                          <img src={swipe} alt="swipe" className='w-[220px] h-[70px]'/>
                  </div>

                <hr className='bg-white'/>
              </div>
        ))}
    </div>
  )
}

export default Cards