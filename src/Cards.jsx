import React from 'react'
import cardData from './data'
import arrow from "./assets/Arrow.png"
import logo from "./assets/name.png"
import swipe from "./assets/swipe.png"
import orderArr from "./assets/Vector.png"


function Cards() {

const card = cardData.map((card, index) => (
            <div
                key={card.id + index}
                className={`h-screen w-screen md:w-[1080px] md:px-[90px] px-[50px] bg-cover bg-no-repeat bg-right bg-img${card.img} text-white overflow-hidden`}>
                <div className='flex justify-between md:pt-[30px] pt-[25px]'>
                    <img src={logo} alt="logo" className='md:w-auto h-auto w-[150px]'/>
                    <img src={arrow} alt="arrow" className='animate-pulse md:w-auto w-[75px] md:h-auto h-[15px] md:mt-0 mt-[10px]'/>
                </div>
                <div className='font-black md:text-[110px] md:leading-[113px] md:mt-[170px] text-[75px] leading-[76px] mt-[100px]'>
                    <p className='text-[28px] leading-[29px] mb-[23px]'>{card.subtag }</p>
                    <h1>{ card.tag1}</h1>
                    <h1>{ card.tag2}</h1>
                </div>
                <div className='mt-[100px] ml-[75px] md:ml-[150px] animate-pulse '>
                    <img src={orderArr} alt="order"  className='w-[90px] h-[100px]'/> 
                    </div>
                <div className='flex md:flex-row flex-col justify-between items-center font-black text-[40px] leading-[41px] text-left'>
                        <p className='md:mb-0 mb-10'><a href='#' target='_blank'>Order Now</a></p>
                        <img src={swipe} alt="swipe" className='w-[220px] h-[70px] animate-pulse'/>
                </div>

            </div>
        ))


  return (
      <div
          className={`flex flex-wrap justify-center items-center bg-black`}>
             {card} 
    </div>
  )
}

export default Cards