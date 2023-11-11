
// 'use client'
// import React from 'react'
// import Image from 'next/image'
// import signImage from './signImage.png'
// import Link from 'next/link'
// import {FcGoogle} from 'react-icons/fc'
// import { useState } from 'react'
// import { supabase } from '@/utils/supabaseClient'

// import { useRouter } from 'next/navigation'

// import Confirm from './confirm'

// export const Registeration = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const [isLoading, setLoading ] = useState(false);
//   const router = useRouter()

//   const [isSignedUp, setIsSignedUp] = useState(false);

//   const handleRegister = async (e:any) => {
//     setLoading(true)
//     e.preventDefault();
//     try {
//       const { data, error } = await supabase.auth.signUp({
//         email,
//         password,
//       });

//       if (error) {
//         console.error('Error registering user:', error.message);
//       } else {
//         console.log('User registered:', data);
//         router.push('/login')
//         setIsSignedUp(true);
//       }
//     } catch (error) {
//       console.error('Error registering user:', error.message);
//     }
//   };

//   return (
//     <div>
//       <section className='items-center pt-40 pb-12 py-40 px-100 max-sm:px-0 max-sm:pt-0 h-screen max-sm:h-screen 
//           bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black via-stone-950 to-black 
//           '>

//           <div className='pb-3 text-center max-sm:text-left max-sm:p-5 max-sm:pt-20'>
//             <Link href={'/'}><h2 className='text-3xl'>Invoicing</h2></Link>
//             <p>Welcome to Invoicing</p>
//           </div>
          
//         <div className=' bg-white text-black p-16 rounded-2xl max-sm:px-6 max-sm:py-10 
//                max-sm:bg-white w-full max-sm:h-110 max-sm:rounded-none bottom-0'>
//                 <h2 className='text-black text-2xl mb-10 max-sm:text-xl max-sm:mb-3'>Setup your account</h2>

                
//             <form action="" onSubmit={handleRegister}>
//               {/* <input type="Full Name" 
//                 placeholder='Full Name' 
//                 className='block p-4 w-full text-black bg-white border mb-5 border-zinc-300 rounded-md  '
//               /> */}

//               <input type="email" 
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder='Email' 
//                 className='block p-4 w-full text-black bg-white border mb-5 border-zinc-300 rounded-md '
//                 />

//               <input type="password" 
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder='Password' 
//                 className='block p-4 w-full text-black bg-white border mb-5 border-zinc-300 rounded-md' 
//                 />


//               <button  type='submit' className='bg-black w-full p-4 rounded-md text-white'>{isLoading ? <><span className="loading loading-ring loading-sm"></span></> : 'Register'}</button>

//               <div className='flex my-5  items-center gap-5'>
//                 <p>or</p>
//               </div>

//               <div  className='flex gap-4 border border-zinc-300 items-center m-auto text-center w-full justify-center p-4 cursor-pointer'>
//                 <FcGoogle className='text-xl' />
//                 <p className='bg-white rounded-md text-black '>  Sinin with google</p> 
//               </div>
//               <p className='mt-10 text-slate-600'>Don’t have an account? <Link href={'/login'} ><span className='text-red-600 pl-4'>Login</span></Link></p>
//             </form>
//         </div>
//       </section>

//       <Confirm isOpen={isSignedUp}  />
//     </div>
//   )
// }
