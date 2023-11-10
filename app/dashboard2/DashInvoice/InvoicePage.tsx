
'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import fade from './fade.png'
import SideDash from '@/app/component/DashCompo/sideDash'
import {BsSearch} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import RightSideDash from '@/app/component/DashCompo/RightSideDash'
import Invoice from '@/app/component/DashCompo/Invoice'

import { supabase } from '@/utils/supabaseClient'
import { useRouter } from 'next/navigation'

const InvoicePage = () => {

    const [invoiceData, setInvoice] = useState([])
    const [selectedInvoice, setSelectedInvoice] = useState(null)


    const [userData, setUserData] = useState(null)

    const [isLoading, setIsLoading] = useState(false)


    const handleOpen = (myInvoice: any) => {
        // setIsOpen(true)
        setSelectedInvoice(myInvoice)
        console.log("This is my Invoice work ", myInvoice)
    }

    const handleClose = () => {
        // setIsOpen(false)
        setSelectedInvoice(null)
    }



    useEffect(() => {
        const fetchData =async () => {
            setIsLoading(true)
            let { data: { user } } = await supabase.auth.getUser()
  
            setUserData(user)
            
            if (user) {
                

                let { data: invoice, error } = await supabase
                .from('invoice')
                .select('*')
                // .eq('id', user.id)
              
                  
                if (error) {
                    console.error('Error fetching profile:', error);
                    // setIsLoading(false)
                } else {
                    setInvoice(invoice);
                    setIsLoading(false)
                }

            }

        }

    fetchData();
    }, []);


    console.log(invoiceData)
    

  return (
    <div className='flex p-10 max-sm:block max-sm:p-0'>

        <div className='hidden max-sm:grid max-sm:grid-cols-2 max-sm:gap-72 max-sm:items-center 
            max-sm:bg-zinc-900 max-sm:p-5 max-sm:fixed max-sm:w-full max-sm:m-auto max-sm:text-center max-sm:justify-center justify-items-center
            '>
            <SideDash />
            <RightSideDash />
        </div>  

        <SideDash />


        <div className='ml-72 mr-96 w-screen max-sm:m-0 max-sm:p-5'>
            <h2 className='pt-10 text-2xl max-sm:pt-16 max-sm:text-lg'>Invoices</h2>
            <div className='relative max-sm:-z-10'>
                <input type="text" placeholder='Search for something. . . .' 
                    className='w-full p-4 pl-19 rounded-2xl mt-2 max-sm:p-3 max-sm:pl-19 max-sm:rounded-lg bg-zinc-900 ' />
                <BsSearch  className='absolute top-7 left-6 pr-1 border-r-2 border-zinc-500 text-2xl max-sm:top-5'/>
            </div>
            <ul className='grid grid-cols-5 pt-8 gap-20 w-full max-sm:grid-cols-6 max-sm:gap-6 max-sm:m-auto  max-sm:hidden'>

                <div className='col-span-2 max-sm:col-span-3'>
                <li className='text-zinc-500 text-sm'>Invoice Name</li>                
                </div>

                <div className='col-span-1 '>
                <li className='text-zinc-500 text-sm'>Date</li>
                </div>

                <div className='col-span-1'>
                <li className='text-zinc-500 text-sm'>Plan</li>
                </div>

                <div className='col-span-1'>
                <li className='text-zinc-500 text-sm'>All</li>
                </div>
            </ul>


            {/* ====================== ITEM 1 ============================ */}
            {invoiceData.map((myInvoice, index)=>(
                
            <>
            {console.log(myInvoice.image_url)}
            <div className='grid grid-cols-5 pt-4 gap-20 max-sm:grid-cols-6 max-sm:gap-5 
                max-sm:mt-5 max-sm:p-5 rounded-2xl max-sm:items-start max-sm:border max-sm:border-zinc-800 max-sm:block' key={myInvoice.id}>

                <div className='pt-8 flex gap-2 col-span-2 max-sm:col-span-3 max-sm:pt-3'>
                    {/* <Image src={fade} alt='' height={20} width={40} className='max-sm:w-10 max-sm:h-10'/> */}
                    
                    {/* https://vgssrxcrciemrcemxedz.supabase.co/storage/v1/object/public/images/fc612f2d-f263-4421-bf46-1f866b44628d/6ba6d766-11f5-4c0f-a520-0968cbfb7889 */}
                    <img src={`https://vgssrxcrciemrcemxedz.supabase.co/storage/v1/object/public/images/${myInvoice.image_url}`} alt=""  
                        className='w-12 h-12 rounded-2xl max-sm:rounded-lg'/>
                    <div>
                        <h2 className='max-sm:text-lg'>{myInvoice.cus_name}</h2>
                        <p className='text-zinc-500 max-sm:text-sm'>{myInvoice.cus_email}</p>
                    </div>
                </div>


                <div className='pt-8 col-span-1 max-sm:pt-3'>
                    <h2 className='max-sm:text-sm'><b>Date:</b> {myInvoice.created_at}</h2>
                </div>

                <div className='pt-8 col-span-1 max-sm:pt-3'>
                    <h2 className='max-smtext-sm'><b>Plan: </b>Free</h2>
                </div>

                <div className='pt-8 col-span-1 max-sm:pt-3'>
                    <button className='bg-white text-black py-2 px-10 rounded-xl mt-0 max-sm:px-3 
                        max-sm:py-1 max-sm:text-sm max-sm:rounded-md max-sm:w-20' onClick={()=>handleOpen(myInvoice)}>View</button>
                        {/* onClick={() => onClick(product)} */}
                </div>

                </div>
            </>
            ))}

            {isLoading && <div>
                <div className="fixed inset-0 flex items-center justify-center bg-zinc-900 bg-opacity-90 ">
                    <span className="loading loading-spinner loading-md"></span>
                </div>
            </div>}



            <button className='bg-zinc-800 px-10 py-3 mt-6 flex items-center rounded-3xl
                max-sm:py-2 max-sm:text-sm rounded-xl'>see more <BsArrowRightShort className='pl-2 text-2xl'/></button>
        </div>

        <div className='max-sm:hidden'>
            <RightSideDash />
        </div>
        
        {selectedInvoice && (<><Invoice myInvoice={selectedInvoice} onClose={handleClose}/></>)}
        
    </div> 
  )
}

export default InvoicePage
