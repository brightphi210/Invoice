'use client'

import React from 'react'

const Invoice = ({ isOpen, onClose, myInvoice }: any) => {
    
    console.log(myInvoice)
    // if (!isOpen) return null;
    
  return (
    <div>

        {/* ====================== INVOICE 1 ============================ */}
        <div className=' fixed inset-0 flex items-center justify-center bg-zinc-900 bg-opacity-90 max-sm:overflow-scroll'>
            <div className='bg-white w-130 max-sm:w-full max-sm:m-0 max-sm:mt-0'>
                <div className='grid grid-cols-2 bg-black p-10 text-white max-sm:p-4 max-sm:pt-8'>
                    <h2 className='col-span-1 text-2xl'>Invoice</h2>
                    <div className='col-span-1 text-right'>
                        <h3 className='text-xl'>{myInvoice.owner_name}</h3>
                        {/* <p className='text-sm text-zinc-300 font-normal'>#91 D/Line, Josh Lane</p> */}
                        <p className='text-sm text-zinc-300 font-normal'>{myInvoice.owner_email}</p>
                        <p className='text-sm text-zinc-300 font-normal'>{myInvoice.owner_State}</p>
                        <p className='text-sm text-zinc-300 font-normal'>{myInvoice.owner_City}</p>
                        <p className='text-sm text-zinc-300 font-normal'>500001</p>
                    </div>
                </div>

                <div className='grid grid-cols-2 p-10 pt-10 max-sm:p-4'>
                    <div className='col-span-1 text-left text-zinc-800'>
                        <h3 className='text-md'>Bill to:</h3>
                        <p className='text-sm pt-1'>{myInvoice.cus_name}</p>
                        <p className='text-sm pt-1'>{myInvoice.cus_email}</p>
                        <p className='text-sm pt-1'>{myInvoice.cus_State}</p>
                        <p className='text-sm pt-1'>500001</p>
                    </div>

                    <div className='col-span-1 text-right text-zinc-800'>
                        <h3 className='text-md'>INVOICE #</h3>
                        <p className='text-sm pt-1'>00001</p>
                        <p className='text-sm pt-1'>Date: {myInvoice.created_at}</p>
                        <p className='text-sm pt-1'>{myInvoice.cus_City}</p>
                    </div>
                </div>

                <hr className='mx-6'/>


                <div className='px-10 py-10 max-sm:p-5'>
                    <div className='grid grid-cols-7 gap-5'>
                        <p className='text-sm text-zinc-400 col-span-1'>Item</p>
                        <p className='text-sm text-zinc-400 col-span-3'>Descrition</p>
                        <p className='text-sm text-zinc-400 col-span-1'>Quantity</p>
                        <p className='text-sm text-zinc-400 col-span-1'>Price</p>
                        {/* <p className='text-sm text-zinc-400 col-span-1'>Tax</p> */}
                        <p className='text-sm text-zinc-400 col-span-1'>Amount</p>
                    </div>


                    {myInvoice.items.map((item: any)=>(
                        <>
                        {console.log(item)}
                        <div className='grid grid-cols-7 gap-5 text-zinc-800 pt-4'>
                            <p className='text-sm bg-zinc-50 p-2  w-full col-span-1'>{item.name}</p>
                            <p className='text-sm bg-zinc-50 p-2  w-full col-span-3'>{item.description}</p>
                            <p className='text-sm bg-zinc-50 p-2  w-full col-span-1'>{item.quantity}</p>
                            <p className='text-sm bg-zinc-50 p-2  w-full col-span-1'>${item.price}</p>
                            {/* <p className='text-sm bg-zinc-50 p-2  w-full col-span-1'>$5</p> */}
                            <p className='text-sm bg-zinc-50 p-2  w-full col-span-1'>${item.total}</p>
                        </div>
                        </>
                    ))}



                </div>


                <div className='p-10 max-sm:p-4'>
                    <div className='bg-zinc-50 p-5 max-sm:p-3'>
                        <h3 className='text-zinc-600'>Description</h3>
                        <p className='text-zinc-600 text-sm text-justify pt-3'>
                            {myInvoice.notes}
                        </p> 
                    </div>
                    <button className='bg-zinc-900 mt-2 py-2 px-10 rounded-full text-sm'>Download</button>
                    <button className='border border-zinc-900 mt-2 py-2 px-10 rounded-full text-sm ml-4 text-zinc-900' onClick={onClose}>Close</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Invoice