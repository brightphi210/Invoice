
// 'use client'

// import React from 'react'
// import SideDash from '@/app/component/DashCompo/sideDash'
// import RightSideDash from '@/app/component/DashCompo/RightSideDash'
// import {BiRightArrowAlt} from 'react-icons/bi'
// import{ CgMenuGridR } from 'react-icons/cg'
// import {FaRegUser} from 'react-icons/fa'
// import Image from 'next/image'
// import fade from './fade.png'
// import Link from 'next/link'
// import { useState, useEffect } from 'react'
// import Invoice from '@/app/component/DashCompo/Invoice'
// import { supabase } from '@/utils/supabaseClient'

// const DashHomePage = () => {
//   const [invoiceData, setInvoice] = useState([])
//   const [selectedInvoice, setSelectedInvoice] = useState(null)


//   const [userData, setUserData] = useState(null)

//   const [isLoading, setIsLoading] = useState(false)


//   const handleOpen = (myInvoice: any) => {
//       // setIsOpen(true)
//       setSelectedInvoice(myInvoice)
//       console.log("This is my Invoice work ", myInvoice)
//   }

//   const handleClose = () => {
//       // setIsOpen(false)
//       setSelectedInvoice(null)
//   }



//     useEffect(() => {
//       const fetchData =async () => {
//           setIsLoading(true)
//           let { data: { user } } = await supabase.auth.getUser()

//           setUserData(user)
          
//           if (user) {
              

//               let { data: invoice, error } = await supabase
//               .from('invoice')
//               .select('*')
//               // .eq('id', user.id)
            
                
//               if (error) {
//                   console.error('Error fetching profile:', error);
//                   // setIsLoading(false)
//               } else {
//                   setInvoice(invoice);
//                   setIsLoading(false)
//               }

//           }

//       }

//   fetchData();
//   }, []);


//   return (
//     <div className='p-10 flex max-sm:block max-sm:p-0'>

//         <div className='hidden max-sm:grid max-sm:grid-cols-2 max-sm:gap-72 max-sm:items-center 
//           max-sm:bg-zinc-900 max-sm:p-5 max-sm:fixed max-sm:w-full max-sm:m-auto max-sm:text-center max-sm:justify-center justify-items-center'>
//           <SideDash />
//           <RightSideDash />
//         </div>  

//         <SideDash />
//         <div className='w-screen pl-72 pr-96 p-10 max-sm:px-5 max-sm:w-full max-sm:pt-20 '>
//           <div className='text-white'>
//             <h2 className='text-3xl'>Overview</h2>
//             <p className='text-zinc-300'>Welcome back, Bella! Your progress is really good. Keep it up</p>
//           </div>

//          {/* =============================== Cards ================================ */}
//           <div className='grid grid-cols-4 gap-7 mt-6 max-sm:grid-cols-2 max-sm:gap-4'>
//             <div className='col-span-1 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] 
//             from-yellow-50 via-yellow-50 to-yellow-200 text-center p-5 text-black rounded-2xl'>
//               <h2 className='text-3xl font-medium'>20</h2>
//               <p className='text-xl'>Invoices</p>
              
//               <Link href={'/' + 'dashboard2/DashInvoice'}>
//               <div className='flex items-center text-center m-auto justify-center gap-2 pt-2 cursor-pointer hover:pl-3 hover:transition-all'>
//                 <span className='block text-sm'>view all </span>
//                 <BiRightArrowAlt />
//               </div>
//               </Link>
//             </div>

//             <div className='col-span-1 bg-white text-center p-5 text-black rounded-2xl'>
//               <h2 className='text-3xl font-medium'>FREE</h2>
//               <p className='text-xl'>Package</p>

              
//             <Link href={'/' + 'dashboard2/DashboardPlan'}>
//             <div className='flex items-center text-center m-auto justify-center gap-2 pt-2 cursor-pointer hover:pl-3 hover:transition-all'>
//                 <span className='block text-sm'>Upgrade Plan</span>
//                 <BiRightArrowAlt />
//               </div>
//             </Link>
//             </div>

//             <div className='col-span-1 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] 
//             from-yellow-50 via-yellow-50 to-yellow-200 text-center p-5 text-black rounded-2xl'>
//               <h2 className='text-3xl font-medium'>$2000</h2>
//               <p className='text-xl'>Earned</p>


//               {/* <div className='flex items-center text-center m-auto justify-center gap-2 pt-2 cursor-pointer hover:pl-3 hover:transition-all'>
//                 <span className='block text-sm'>Earn More </span>
//                 <BiRightArrowAlt />
//               </div> */}

              
//             </div>


//             <div className='col-span-1 bg-white text-center p-5 text-black rounded-2xl'>
//               <h2 className='text-3xl font-medium'>$100</h2>
//               <p className='text-xl'>Processed</p>

              
//               {/* <div className='flex items-center text-center m-auto justify-center gap-2 pt-2 cursor-pointer hover:pl-3 hover:transition-all'>
//                 <span className='block text-sm'>Upgrade Plan</span>
//                 <BiRightArrowAlt />
//               </div> */}
//             </div>
//           </div>

//           <button className=' bg-zinc-800 border-none mt-8 px-10 py-3 text-white flex rounded-xl hover:bg-slate-300 hover:text-black hover:transition-all '>
//           <Link href={ '/' + 'dashboard2/DashboardCreate'} className='flex'>
//             Create Invoice <BiRightArrowAlt  className='pl-2 text-2xl'/>
//           </Link>
//           </button>

//             {/* ============================== Invoices ================================== */}
//           <div>
//             <div className='pt-20 grid grid-cols-4 items-center max-sm:grid-cols-2 '>
//               <h2 className='col-span-3 text-3xl max-sm:col-span-1'>Invoices</h2>
//               <Link href={'/' + 'dashboard2/DashInvoice'}>
//                 <button className='col-span-1 flex items-center ml-28 max-sm:col-span-1'>View all <BiRightArrowAlt className='pl-2 text-2xl'/></button>
//               </Link>
//             </div>

//             <ul className='grid grid-cols-5 pt-8 gap-20 max-sm:grid-cols-6 max-sm:gap-6 max-sm:m-auto '>

//               <div className='col-span-2 max-sm:col-span-3'>
//                 <li className='text-zinc-500 text-sm'>Invoice Name</li>                
//               </div>

//               <div className='col-span-1 '>
//                 <li className='text-zinc-500 text-sm'>Date</li>
//               </div>

//               <div className='col-span-1'>
//                 <li className='text-zinc-500 text-sm'>Plan</li>
//               </div>

//               <div className='col-span-1'>
//                 <li className='text-zinc-500 text-sm'>All</li>
//               </div>
//             </ul>


//             {invoiceData.map((myInvoice, index)=>(
//               <>
//                 <div className='grid grid-cols-5 pt-4 gap-20 max-sm:grid-cols-6 max-sm:gap-5 max-sm:pt-5 max-sm:items-start' key={myInvoice.id}>
//                   <div className='pt-8 flex gap-2 col-span-2 max-sm:col-span-3 max-sm:pt-3'>
//                     {/* <Image src={fade} alt='' height={20} width={40} className='max-sm:w-10 max-sm:h-10'/> */}
//                     <img src={`https://vgssrxcrciemrcemxedz.supabase.co/storage/v1/object/public/images/${myInvoice.image_url}`} alt=""  className='w-12 h-12 rounded-2xl'/>
//                     <div>
//                       <h2 className='max-sm:text-sm'>{myInvoice.cus_name}</h2>
//                       <p className='text-zinc-500 max-sm:text-sm'>{myInvoice.cus_email}</p>
//                     </div>
//                   </div>

                  
//                   <div className='pt-8 col-span-1 max-sm:pt-3'>
//                     <h2 className='max-sm:text-sm'>{myInvoice.created_at}</h2>
//                   </div>

//                   <div className='pt-8 col-span-1 max-sm:pt-3'>
//                     <h2 className='max-smtext-sm'>Free</h2>
//                   </div>

//                   <div className='pt-8 col-span-1 max-sm:pt-3'>
//                     <button className='bg-white text-black py-2 px-10 rounded-xl mt-0 
//                     max-sm:px-3 max-sm:py-1 max-sm:text-sm max-sm:rounded-md ' onClick={()=>handleOpen(myInvoice)}>View</button>
//                   </div>
//               </div>
//               </>
//             ))}
//             {/* ====================== ITEM 1 ============================ */}


//           </div>
//         </div>
//         <div className='max-sm:hidden'><RightSideDash /></div>
//         {selectedInvoice && (<><Invoice myInvoice={selectedInvoice} onClose={handleClose}/></>)}
//         {/* <Invoice isOpen={isOpen} onClose = {handleClose}/> */}
//     </div>
//   )
// }

// export default DashHomePage