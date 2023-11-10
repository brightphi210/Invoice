'use client'
import React from 'react'
import Image from 'next/image'
import myAvatar from './Avatar.png'

import {HiMiniBellAlert} from 'react-icons/hi2'
import {CiMenuKebab} from 'react-icons/ci'
import {BsArrowRightSquare} from 'react-icons/bs'

import {FaRegUser} from 'react-icons/fa'

import { useState } from 'react'

import Link from 'next/link'


import leaf from './leaf.png'
const RightSideDash = () => {

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const showNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div>
          <FaRegUser className='text-xl col-span-1 hidden max-sm:block max-sm:bg-zinc-800 
            max-sm:p-2 max-sm:rounded-full  max-sm:text-4xl' onClick={showNavbar}/>

        <ul className={`bg-zinc-950  rounded-tr-3xl rounded-br-3xl w-80 p-10 h-fit fixed  max-sm:h-full max-sm:pt-16
            right-10 max-sm:left-0  max-sm:top-0 text-white ${isNavbarOpen ? 'max-sm:block' : 'max-sm:hidden'}`}>

          <Link href={'/' + 'dashboard2/DashSetting'}>
          <Image src={myAvatar} alt='' width={80} height={80} className='m-auto max-sm:w-20 max-sm:h-20'/>
            <div className='border-b-4 border-zinc-800 pb-10 text-center'>
                <li className='text-2xl max-sm:text-xl'>Irfan Ahsan</li>
                <p className='font-light text-zinc-400 max-sm:text-base'>Middle UX/UI Designer</p>
            </div>
          </Link>

            <div className='pt-8'>
                <h3 className='text-xl'>Recent Transactions</h3>
                <p className='font-light text-zinc-400 text-base'>Updated 20 mins ago</p>
            </div>

            <div className='flex gap-4 items-center mt-10 p-3 bg-white rounded-2xl text-black max-sm:p-2 max-sm:pl-4 
                max-sm:text-left max-sm:bg-zinc-800 max-sm:text-white'>
                <HiMiniBellAlert className='text-3xl text-orange-300 max-sm:text-2xl' />
                <div>
                  <h3 className='text-base'>Payment</h3>
                  <p className='text-sm text-zinc-600'>8:00 AM - 12:00 PM</p>
                </div>
                <CiMenuKebab className='text-2xl cursor-pointer' />
            </div>


            <div className='flex gap-4 items-center mt-6 p-3 bg-white rounded-2xl text-black max-sm:p-2 max-sm:pl-4 
                max-sm:text-left max-sm:bg-zinc-800 max-sm:text-white'>
                <HiMiniBellAlert className='text-3xl text-orange-300 max-sm:text-2xl'/>
                <div>
                  <h3 className='text-base'>Workshop</h3>
                  <p className='text-sm text-zinc-600'>8:00 AM - 12:00 PM</p>
                </div>
                <CiMenuKebab className='text-2xl cursor-pointer' />
            </div>
            

            <div className='bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] 
            from-yellow-100 via-yellow-100 to-yellow-200 mt-10 pt-10 px-5 pb-5 rounded-2xl max-sm:p-3 max-sm:pl-8'>
              <Image src={leaf} alt='' width={170} height={170} className='max-sm:w-20 '/>
              <div className='flex items-end gap-4 pt-5'>
                <h2 className='text-black text-2xl font-Michroma max-sm:text-left max-sm:text-lg' >Upgrade <br /> to Premium</h2>
                <BsArrowRightSquare className='pb-2 text-3xl cursor-pointer text-black ' />
              </div>
            </div>
        </ul>
    </div>
  )
}

export default RightSideDash