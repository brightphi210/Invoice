
'use client'

import React from 'react'
import SideDash from '@/app/component/DashCompo/sideDash'
import Avatar from './Avatar.png'
import Image from 'next/image'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react';

import { supabase } from '@/utils/supabaseClient'
import { useRouter } from 'next/navigation'

// import v

import { v4 as uuidv4 } from "uuid";

const DashSettingPage = ( ) => {
    const [ userData, setUserData ] = useState(null);
    const [userProfile, setUserProfle] = useState([]);

    const [full_name, setFull_name] = useState('');
    const [username, setUsername] = useState('');
    const [image, setImage] = useState(null);
    

    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData =async () => {
            setIsLoading(true)
            let { data: { user } } = await supabase.auth.getUser()
            const { data: { session } } = await supabase.auth.getSession()
            
            console.log('This is user session', session)
            console.log('This is user', user)
            setUserData(user)
            
            if (user) {
                

                let { data: profiles, error } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', user.id)
              
                  
                if (error) {
                    console.error('Error fetching profile:', error);
                    // setIsLoading(false)
                } else {
                    setUserProfle(profiles);
                    setIsLoading(false)
                }

            }

        }

        
    
    fetchData();
    }, []);

    const router = useRouter()
    // const [image, setImage] = useState(null);


    const handleImageChange = (event:any) => {
        const file = event.target.files[0];
        setImage(file);
      };
    
    const handleUpdateProfile = async (e:any) => {
        setIsLoading(true)
        e.preventDefault();


        let { data: { user } } = await supabase.auth.getUser()
        // const { data:profiles, error } = await supabase.auth.updateUser({email: 'new@email.com'})

        const filename = `${uuidv4()}-${image.name}`;
        const { data, error } = await supabase.storage
        
            .from('avatars')
            .upload(user.id + '/' + uuidv4(), image, {
            cacheControl: '3600',
            upsert: false
        })



        if (error) {
            console.error('Error uploading image:', error);
        } else {
        console.log('Successfully uploaded image')
        const imageUrl = data.path;
        
    
            if (user) {
                const { error } = await supabase
                    .from('profiles')
                    .update({ 'full_name' : full_name, 'username' : username, 'avatar_url': imageUrl})
                    .eq('id', user.id)
                    .select()
            
                if (error) {
                    // setError('Error updating profile');
                    console.error('Error updating profile:', error);
                    setIsLoading(false)
                } else {
                    setSuccess(true); 
                    setIsLoading(false)
                    router.push('/' + 'dashboard2/DashSetting')
                    console.log('Profile updated successfully')
                }
            }
        }
    }


    setTimeout(function() {
        setSuccess(false)
    }, 50000);


    console.log(userProfile)
  return (
    <div className='p-10 flex max-sm:p-0 max-sm:block'>
        <div className='hidden max-sm:grid max-sm:grid-cols-2 max-sm:gap-72 max-sm:items-center 
            max-sm:bg-zinc-900 max-sm:p-5 max-sm:fixed max-sm:w-full max-sm:m-auto max-sm:text-center max-sm:justify-center justify-items-center
            '>
            <SideDash />
        </div>  
        <SideDash />
        <form action="" onSubmit={handleUpdateProfile} className='text-white gap-20 ml-72 w-screen p-5 pt-20 rounded-3xl 
          max-sm:m-0 max-sm:block max-sm:p-4 max-sm:rounded-none max-sm:pt-20'>
            <div className=' border-zinc-800 pb-5 max-sm:border-none max-sm:border-b-2 '>

            {success && 
                <div className="alert alert-success max-sm:flex max-sm:w-full w-130 bg-purple-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 " fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Your Profile is successfully Updated !!!</span>
                </div>
            }

                {userProfile && userProfile.map((myUser, index)=>(
                    
                    <>
                    {console.log('Check the user', myUser)}
                        <div className='bg-zinc-950 w-130 p-6 rounded-xl mb-8 max-sm:w-full'>
                            <h2 className='text-zinc-500 pb-3 text-md'>Account Information</h2>
                            <div className='' key={index}>
                                <div className='grid grid-cols-2 gap-10 items-center mb-2 max-sm:grid-cols-3 max-sm:gap-5 max-sm:w-full' >
                                    <p className='col-span-1 text-sm text-zinc-400'>Email: </p>
                                    <p className='col-span-1 max-sm:col-span-2 text-sm text-zinc-400 border border-zinc-900 p-3 rounded-lg' >{userData.email}</p>
                                </div>

                                <div className='grid grid-cols-2 gap-10 items-center mb-2 max-sm:grid-cols-3 max-sm:gap-5' >
                                    <p className='col-span-1 text-sm text-zinc-400'>Username: </p>
                                    <p className='col-span-1 max-sm:col-span-2 text-sm text-zinc-400 border border-zinc-900 p-3 rounded-lg' >@{myUser.username}</p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-zinc-950 w-130 p-6 rounded-xl mb-8 max-sm:w-full'>
                            <h2 className='text-zinc-500 pb-3 text-md'>Profile</h2>
                            <div key={index} className=''>
                                {myUser.avatar_url ? (
                                    <>
                                    <img src={myUser.avatar_url} 
                                    alt='' className='w-14 rounded-full'>
                                </img></>
                                ): (<><Image src={Avatar} alt='' width={50} height={50}/></>)}
                            </div>
                            {/* =2023-11-09T10%3A55%3A15.265Z */}
                            <div className='' key={index}>
                                <div className='grid grid-cols-2 gap-10 items-center mb-2 max-sm:grid-cols-3 max-sm:gap-5' >
                                    <p className='col-span-1 text-sm text-zinc-400'>Full Name: </p>
                                    <p className='col-span-1 max-sm:col-span-2 text-sm text-zinc-400 border border-zinc-900 p-3 rounded-lg w-full' >{myUser.full_name}</p>
                                </div>
                                <input type="file" 
                                    onChange={handleImageChange}
                                    placeholder="You can't touch this" 
                                    className="file-input file-input-bordered w-full max-w-xs" 
                                />
                            </div>
                        </div>


                        <div className='bg-zinc-950 w-130 p-6 rounded-xl max-sm:w-full'>
                            
                            <div className='flex gap-40 items-center max-sm:gap-10'>
                                <h2 className='text-zinc-500 pb-1 text-md'>Edit</h2>
                                <div className='flex gap-4 items-center'>
                                    <button className='py-2 px-7 rounded-xl text-sm bg-zinc-800 text-white max-sm:text-sm max-sm:py-2 max-sm:px-8'>Cancle</button>
                                    <button type='submit' className='py-2 px-7 rounded-xl text-sm bg-zinc-50 text-black 
                                    max-sm:text-sm max-sm:py-2 max-sm:px-8'>Save</button>
                                </div>
                            </div>
                            <div className='mt-5'> 
                                <input 
                                    type="text" 
                                    value={full_name}
                                    onChange={(e) => setFull_name(e.target.value)}

                                    placeholder='Full Name' 
                                    className='bg-black border border-zinc-900 text-zinc-600 
                                    outline-none block p-3 rounded-md w-full mb-3 max-sm:p-3 
                                    max-sm:mb-3 max-sm:text-sm'
                                />

                                <input 
                                    type="text" 
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}

                                    placeholder='Username' 
                                    className='bg-black border border-zinc-900 text-zinc-600 
                                    outline-none block p-3 rounded-md w-full mb-3 max-sm:p-3 
                                    max-sm:mb-3 max-sm:text-sm'
                                />
                            </div>
                        </div>

                    </>
                ))}

            </div>
        </form>
        {isLoading && <div>
            <div className="fixed inset-0 flex items-center justify-center bg-zinc-900 bg-opacity-90 ">
                <span className="loading loading-spinner loading-md"></span>
            </div>
        </div>}
    </div>
  )
}

export default DashSettingPage