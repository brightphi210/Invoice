
import React from 'react'
import Image from 'next/image'

import myImage from './image1.png'
import {AiOutlineArrowRight} from 'react-icons/ai'
const SectionOne = () => {
  return (
    <div className = 'h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black via-stone-800 to-black '>
        <section className='grid grid-cols-2 p-10 px-56 items-center justify-center pt-40
        max-sm:block max-sm:px-8  
        '>
            <div className='col-span-1 max-sm:block'>
                <h2 className='text-4xl text-white max-sm:text-2xl'>Better way to manage your Business</h2>
                <h1 className='text-7xl pt-6 pb-6 max-sm:text-5xl'>
                    <b className='text-gradient max-sm:text-6xl'>Invoicing software </b> 
                    for small business
                </h1>
                <p className='text-xl max-sm:text-base'>Invoice in seconds, get paid faster, and easily track 
                    finances so you  can focus on what matters most.
                </p>
                <button className='myBtn-gradient p-3 px-8 my-5 
                text-black inline w-auto flex items-center rounded-md border-none' 
                >Get Started for free <span className='pl-6'><AiOutlineArrowRight /></span></button>
            </div>

            <div className='col-span-1 mt-10'>
                <Image src={myImage} alt='' width={1000} height={1000} />
            </div>
        </section>

        <div className='grid grid-cols-4 px-56 gap-10 max-sm:grid max-sm:grid-cols-2 max-sm:px-10 max-sm:gap-4 pb-40'>
            <div className='col-span-1 border border-slate-300 p-4 rounded-xl '>
                <h2>43 million </h2>
                <p className='text-xs'>transactions processed</p>
            </div>

            <div className='col-span-1 border border-slate-300 p-4 rounded-xl'>
                <h2>43 million </h2>
                <p className='text-xs'>transactions processed</p>
            </div>

            <div className='col-span-1 border border-slate-300 p-4 rounded-xl'>
                <h2>43 million </h2>
                <p className='text-xs'>transactions processed</p>
            </div>

            <div className='col-span-1 border border-slate-300 p-4 rounded-xl'>
                <h2>43 million </h2>
                <p className='text-xs'>transactions processed</p>
            </div>
        </div>
    </div>
  )
}

export default SectionOne