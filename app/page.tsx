"use client"
import Image from 'next/image'
import { useState,useEffect } from 'react'

interface T  {
  slip : I
}

interface I {
  id : number,
  advice: string
}
 
export default function Home() {

  let [data, setData] = useState({id:216,advice:"Try making a list."})
  function randomAd(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {setData(data.slip)}
    )
  }
  return (
    <div className=' w-screen h-screen bg-custom-500 flex justify-center items-center'>
      <div className=' bg-custom-400 pb-16 min-[480px]:w-[480px] w-11/12 flex justify-center items-center flex-col space-y-6 relative py-10 px-7 rounded-lg'>
        <div className=' text-custom-200 uppercase tracking-[.2em] text-center text-xs'>
        ADVICE #{data.id}
        </div>
        <div className=' text-[24px] text-custom-100 font-extrabold text-center'>
        "{data.advice}"
        </div>
        <Image
        src={"/images/pattern-divider-desktop.svg"}
        width={444}
        height={16}
        className=' hidden min-[480px]:flex'
        alt='line'/>
        <Image
        src={"/images/pattern-divider-mobile.svg"}
        width={295}
        height={16}
        className=' flex min-[480px]:hidden'
        alt='line'/>
        <button onClick={randomAd} className=' hover:shadow-[0_0px_40px_1px_rgba(82,255,168,1)] bg-custom-200 w-12 flex justify-center items-center h-12 rounded-full absolute -bottom-5 right-[calc(50%-24px)] text-white'>
          <Image
          src={"images/icon-dice.svg"}
          width={24}
          height={24}
          className=''
          alt='dice'/>
        </button>
      </div>
    </div>
  )}