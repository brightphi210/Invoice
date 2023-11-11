
// 'use client'
// import React from 'react'
// import { useState } from 'react';
// import {BsArrowRightShort} from 'react-icons/bs'
// import mailImage from './mail.png'
// import Image from 'next/image';
// import Link from 'next/link';

// const Confirm = ({ isOpen, onClose }: any) => {

//   if (!isOpen) return null;
//   return (
//     <div>
//         <div className="fixed inset-0 flex items-center justify-center bg-zinc-900 bg-opacity-90">
//           <div className="bg-white p-10 px-14 rounded-lg text-black text-center m-auto justify-center max-sm:w-96">
//             {/* <TiTick className='text-2xl m-auto justify-center bg-yellow-500 rounded-full text-white'/> */}
//             <Image src={mailImage} alt='' width={100} height={100} className='m-auto'/>
//             <h2 className="font-semibold mt-4 text-xl ">Verify Your Email</h2>
//             <p className='text-zinc-700 text-sm pt-2'>Please check your email to verify your account.</p>
//             <Link href={'/login'}>
//               <button onClick={onClose} className="mt-4 bg-zinc-950 text-white rounded px-4 py-2 flex items-center m-auto">
//                 Continue <BsArrowRightShort />
//               </button>
//             </Link>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Confirm