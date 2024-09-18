import React from 'react'
import Card from '../Cards'

export default function Hero({title}: {title: string}) {
  return (
    <div className='w-screen h-[80vh] border flex items-center overflow-hidden '>
      <div className=" w-[565px] h-fit leading-none px-20   text-white font-clash text-[6.5rem] font-bold  uppercase">{title}</div>
        <Card/>
    </div>
  )
}
