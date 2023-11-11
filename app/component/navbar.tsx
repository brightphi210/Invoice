// 'use client'


// import React from 'react'
// import Link from 'next/link'

// import { FaBars } from "react-icons/fa6"
// import { BsArrowRightShort } from "react-icons/bs"

// import { supabase } from '@/utils/supabaseClient'
// import { useRouter } from 'next/navigation'

// import { useState, useEffect } from 'react'

// const Navbar = () => {
  
//   const [isNavbarOpen, setIsNavbarOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const [token, setToken] = useState('');

//   const toggleNavbar = () => {
//     setIsNavbarOpen(!isNavbarOpen);
//   };


//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const storedToken  = localStorage.getItem('sb-vgssrxcrciemrcemxedz-auth-token');
//       console.log('This is the token', token)
//       setToken(storedToken);
//     }
//   }, []);
  



//   const router = useRouter();

//   const handleLogout = async () => {
//       setIsLoading(true)
//       const { error } = await supabase.auth.signOut();
//       if (error) {
//         console.error('Error logging out:', error.message);
//         return;
//       }

//       router.push ('/');
//     };

  


//   return (
//     <div>

//       <nav className=' bg-black text-white fixed  top-0 right-0 w-full px-56 p-3 mb-10 grid grid-cols-2 items-center 
//       max-sm:fixed max-sm:p-5 max-sm:pt-8 shadow-custom '>
//         <h2 className='col-span-1 text-2xl'>INVOICING</h2>
//         <ul className={`col-span-1 items-center justify-center m-auto 
//                 max-sm:bg-zinc-950 max-sm:fixed ${isNavbarOpen ? 'max-sm:block' : 'max-sm:hidden'} max-sm:w-full max-sm:h-screen
//                   max-sm:top-20 max-sm:pt-5 max-sm:pl-4`
//         }>


//               <div className='col-span-1 p-4 flex gap-20 items-center content-center max-sm:block max-md:block max-sm:text-left'>

//                   {token === null || token === undefined || token === '' ? 
//                     <>
//                       <Link href={'/pricing'}><li>pricing</li></Link>
//                       <Link href={'/login'}><li className='max-sm:pb-6'>Login</li></Link>
//                       <Link href={'/signup'} className='bg-slate-300 py-3 px-10 rounded-full 
//                         text-black max-sm:rounded-md max-sm:block max-sm:w-max max-sm:m-0'>
//                         <button className='m-0 max-sm:m-0'><li>Get Started</li></button>
//                       </Link>
//                     </> :
//                     <>
//                       <Link href={'/pricing'}><li>pricing</li></Link>
//                       <Link href={'/dashboard2/DashboardHome'} className='bg-slate-300 py-3 px-10 rounded-full 
//                         text-black max-sm:rounded-md max-sm:block max-sm:w-max max-sm:m-0'><li className='max-sm:pb-6'>Dashboard</li></Link>
//                       <button className='flex gap-2 items-center hover:pl-2 transition-all' onClick={handleLogout}>Log out <BsArrowRightShort /></button>
//                     </>
//                   }
                  
//               </div>
//             {/* <p className='hidden text-white text-3xl max-sm:block max-sm:top-10 max-sm:absolute max-sm:right-10 '><CgClose /></p> */}
//         </ul>
//           <div className='hidden flex max-sm:block ' onClick={toggleNavbar}>
//             <p className='text-white text-3xl max-sm:absolute max-sm:right-10 max-sm:top-8 max-sm:text-lg'><FaBars /></p>
//           </div>
//       </nav>
        
//         <>{isLoading && <>
//           <div className="fixed inset-0 flex items-center justify-center bg-zinc-900 bg-opacity-90 ">
//           <span className="loading loading-spinner loading-md"></span>
//           </div>
//         </>}</>

//     </div>
//   )
// }

// export default Navbar