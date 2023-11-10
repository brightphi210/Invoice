'use client'
import React from 'react'
import{ CgMenuGridR } from 'react-icons/cg'
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia'
import {LuPackage2} from 'react-icons/lu'
import {AiOutlineSetting} from 'react-icons/ai'
import {AiOutlineLogout} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/utils/supabaseClient'


const SideDash = () => {

    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const [isLoading, setIsLoading] = useState(false);



    const showNavbar = () => {
      setIsNavbarOpen(true);
    };

    const hideNavbar = () => {
        setIsNavbarOpen(false);
    };

    const router = useRouter();

    const handleLogout = async () => {
        setIsLoading(true)
        const { error } = await supabase.auth.signOut();
        if (error) {
          console.error('Error logging out:', error.message);
          return;
        }

        router.push ('/');
      };

  return (
    <div>

        <CgMenuGridR className='text-xl col-span-1 hidden max-sm:block max-sm:bg-zinc-800 
            max-sm:p-2 max-sm:rounded-full  max-sm:text-4xl' onClick={showNavbar} />

        <ul className={`bg-zinc-950  rounded-tl-3xl rounded-bl-3xl w-52 p-10 h-fit fixed left-10 text-white, max-sm:text-left
            max-sm:none max-sm:rounded-none max-sm:w-full max-sm:h-screen max-sm:bg-zinc-950 max-sm:z-50
            max-sm:left-0 max-sm:top-0  ${ isNavbarOpen ? 'max-sm:block ' :'max-sm:hidden'} transition-all duration-500 ease-in-out`}>
            <div className='pb-36 max-sm:flex max-sm:items-center max-sm:gap-60'>
                <Link href={'/'}><h2 className='text-3xl'>LOGO</h2></Link>
                <AiOutlineClose className='hidden max-sm:block text-2xl text-white' onClick={hideNavbar}/>
            </div>

            <Link href={'/' + 'dashboard2/DashboardHome'}>
            <div className='pb-10 flex items-center gap-3 cursor-pointer hover:text-gray-400 hover:transition-all'>
                <CgMenuGridR />
                <li>Dashboard</li>
                
            </div> 
            </Link>

            <Link href={'/' + 'dashboard2/DashInvoice'}>
                <div className='pb-10 flex items-center gap-3 cursor-pointer hover:text-gray-400 hover:transition-all'>
                    <LiaFileInvoiceDollarSolid />
                    <li>Invoice</li>
                </div>
            </Link>

            <Link href={'/' + 'dashboard2/DashboardPlan'}>
            <div className='pb-10 flex items-center gap-3 cursor-pointer  hover:text-gray-400 hover:transition-all'>
                <LuPackage2 />
                <li>Pricing</li>
            </div>
            </Link>

            <div className='pt-120 max-sm:pt-40'>
            <Link href={'/' + 'dashboard2/DashSetting'}>
                <div className='pb-10 flex items-center gap-3 cursor-pointer hover:text-gray-400 hover:transition-all'>
                    <AiOutlineSetting />
                    <li>Settings</li>
                </div>
            </Link>

                <div className='flex items-center gap-3 cursor-pointer hover:text-gray-400 hover:transition-all'>
                    <AiOutlineLogout />
                    <li onClick={handleLogout}>Log out </li>
                </div>
            </div>
            <div>
            {isLoading && <div>
                <div className="fixed inset-0 flex items-center justify-center bg-zinc-900 bg-opacity-90 ">
                    <span className="loading loading-spinner loading-md"></span>
                </div>
            </div>}
        </div>

        </ul>
    </div>
  )
}

export default SideDash





