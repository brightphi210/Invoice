import React from 'react'
import SideDash from '@/app/component/DashCompo/sideDash'
import RightSideDash from '@/app/component/DashCompo/RightSideDash'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import {AiOutlineCloseCircle} from 'react-icons/ai'



const DashPlanPage = () => {



  return (
    <div className='p-10 flex max-sm:block max-sm:p-0'>
        <div className='hidden max-sm:grid max-sm:grid-cols-2 max-sm:gap-72 max-sm:items-center 
          max-sm:bg-zinc-900 max-sm:p-5 max-sm:fixed max-sm:w-full max-sm:m-auto max-sm:text-center max-sm:justify-center justify-items-center'>
          <SideDash />
          <RightSideDash />
        </div>  

        <div>
            <SideDash />
        </div>
        <div className='w-screen pl-72 pr-96 p-10 max-sm:px-5 max-sm:w-full max-sm:pt-20'>
            <h2>Choose Your Plan </h2>
            <p>Best Plans For Invoice Management</p>

            <div className='grid grid-cols-3 gap-10 mt-5 max-sm:grid-cols-1'>

                <div className='bg-black border border-zinc-900  p-14 col-span-1 rounded-2xl justify-center m-auto w-full text-white' >
                    <button className='bg-white py-2 px-10 rounded-xl text-black'>Basic/Free </button>
                    <div className='text-left mt-4'>
                        <div className='my-6 flex items-end gap-3'>
                            <h2 className='text-4xl'>$10</h2>
                            <p>monthly</p>
                        </div>
                        <p className='pb-2 text-zinc-300 font-light flex gap-2'><AiOutlineCheckCircle className='text-green-300'/>Attendance Management</p>
                        <p className='pb-2 text-zinc-300 font-light flex gap-2'> <AiOutlineCheckCircle className='text-green-300'/>Leave System Management</p>
                        <p className='pb-2 text-zinc-300 font-light flex gap-2'> <AiOutlineCheckCircle className='text-green-300'/>Employee Management</p>
                        <p className='pb-2 text-zinc-300 font-light flex gap-2'> <AiOutlineCheckCircle className='text-green-300'/>Invoice Generate</p>
                        <p className='pb-2 text-zinc-500 font-light flex gap-2 line-through'> <AiOutlineCloseCircle className='text-red-300'/>Expense Tracking </p>
                        <p className='pb-2 text-zinc-500 font-light flex gap-2 line-through'>  <AiOutlineCloseCircle className='text-red-300'/>Purchase Generate </p>
                        <p className='pb-2 text-zinc-500 font-light flex gap-2 line-through'> <AiOutlineCloseCircle className='text-red-300'/>Payroll</p>
                        <p className='pb-2 text-zinc-500 font-light flex gap-2 line-through'> <AiOutlineCloseCircle className='text-red-300'/>Chat Support</p>
                        
                    </div>
                    <button className='bg-zinc-800 text-white py-3 px-20 rounded-xl mt-5'>Select Plan</button>
                </div>

                <div className='bg-black border border-zinc-900  p-14 col-span-1 rounded-2xl justify-center m-auto w-full' >
                    <button className='bg-white py-2 px-10 rounded-xl text-black'>Advance </button>
                    <div className='text-left mt-4'>
                        <div className='my-6 flex items-end gap-3'>
                            <h2 className='text-4xl'>$30</h2>
                            <p>monthly</p>
                        </div>
                        <p className='pb-2 text-zinc-300 font-light flex gap-2'> <AiOutlineCheckCircle className='text-green-300'/>Attendance Management</p>
                        <p className='pb-2 text-zinc-300 font-light flex gap-2'> <AiOutlineCheckCircle className='text-green-300'/>Leave System Management</p>
                        <p className='pb-2 text-zinc-300 font-light flex gap-2'> <AiOutlineCheckCircle className='text-green-300'/>Employee Management</p>
                        <p className='pb-2 text-zinc-300 font-light flex gap-2'> <AiOutlineCheckCircle className='text-green-300'/>Invoice Generate</p>
                        <p className='pb-2 text-zinc-300 font-light flex gap-2'> <AiOutlineCheckCircle className='text-green-300'/>Expense Tracking </p>
                        <p className='pb-2 text-zinc-300 font-light flex gap-2'> <AiOutlineCheckCircle className='text-green-300'/> Purchase Generate </p>
                        <p className='pb-2 text-zinc-500 font-light flex gap-2 line-through'><AiOutlineCloseCircle className='text-red-300'/> Payroll</p>
                        <p className='pb-2 text-zinc-500 font-light flex gap-2 line-through'><AiOutlineCloseCircle className='text-red-300'/> Chat Support</p>
                        
                    </div>
                    <button className='bg-zinc-800 text-white py-3 px-20 rounded-xl mt-5'>Select Plan</button>
                </div>


                <div className='bg-black border border-zinc-900  p-14 col-span-1 rounded-2xl justify-center m-auto w-full' >
                    <button className='bg-white py-2 px-10 rounded-xl text-black'>Premium </button>
                    <div className='text-left mt-4'>
                        <div className='my-6 flex items-end gap-3'>
                            <h2 className='text-4xl'>$50</h2>
                            <p>monthly</p>
                        </div>
                        <p className='pb-2 text-zinc-300 font-light flex gap-2'> <AiOutlineCheckCircle className='text-green-300'/>Attendance Management</p>
                        <p className='pb-2 text-zinc-300 font-light flex gap-2'> <AiOutlineCheckCircle className='text-green-300'/>Leave System Management</p>
                        <p className='pb-2 text-zinc-300 font-light flex gap-2'> <AiOutlineCheckCircle className='text-green-300'/>Employee Management</p>
                        <p className='pb-2 text-zinc-300 font-light flex gap-2'> <AiOutlineCheckCircle className='text-green-300'/>Invoice Generate</p>
                        <p className='pb-2 text-zinc-300 font-light flex gap-2'> <AiOutlineCheckCircle className='text-green-300'/>Expense Tracking </p>
                        <p className='pb-2 text-zinc-300 font-light flex gap-2'>  <AiOutlineCheckCircle className='text-green-300'/>Purchase Generate </p>
                        <p className='pb-2 text-zinc-300 font-light flex gap-2'> <AiOutlineCheckCircle className='text-green-300'/>Payroll</p>
                        <p className='pb-2 text-zinc-300 font-light flex gap-2'> <AiOutlineCheckCircle className='text-green-300'/>Chat Support</p>
                        
                    </div>
                    <button className='bg-zinc-800 text-white py-3 px-20 rounded-xl mt-5'>Select Plan</button>
                </div>


            </div>
        </div>
        <div className='max-sm:hidden'><RightSideDash /></div>
    </div>
  )
}

export default DashPlanPage