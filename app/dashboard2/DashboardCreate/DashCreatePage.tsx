
'use client'

import React from 'react'
import SideDash from '@/app/component/DashCompo/sideDash'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {PiCaretUpDownFill} from 'react-icons/pi'
import { supabase } from '@/utils/supabaseClient'

import { v4 as uuidv4 } from "uuid";

import { useState, useEffect } from 'react'

import { useRouter } from 'next/navigation'

const DashCreatePage = () => {


    const [owner_name, setOwner_name] = useState('')
    const [owner_email, setOwner_email] = useState('')
    const [owners_State, setOwners_State] = useState('')
    const [owners_City, setOwners_City] = useState('')

    const [cus_name, setCus_name] = useState('')
    const [cus_email, setCus_email] = useState('')
    const [cus_State, setCus_State] = useState('')
    const [cus_City, setCus_City] = useState('')

    const [notes, setNotes] = useState('')

    const [image, setImage] = useState(null);
    // const [total, setTotal] = useState(null)
    


    const [items, setItems] = useState([
      {name: "", price: null, quantity:null, description: "", total: null},
    ])


    const handleAdd = (e:any) => {
      e.preventDefault();
      setItems([...items, {name: "", price: null, quantity:null, description: "", total: null}])
    }

    const handleRemove = (e:any) => {
      const list = [...items];
      list.splice(e, 1)
      setItems(list)
    }



    const [isLoading, setIsLoading] = useState(false)
    const [success, setSuccess] = useState(false);
    const router = useRouter()

  const handleImageChange = (event:any) => {
    const file = event.target.files[0];
    setImage(file);
  };


    const fetchData =async (e:any) => {
        e.preventDefault();

        setIsLoading(true)
        let { data: { user } } = await supabase.auth.getUser()
        const { data: { session } } = await supabase.auth.getSession()
        
        const { data, error } = await supabase.storage
          .from('images')
          .upload(user.id + '/' + uuidv4(), image, {
            cacheControl: '3600',
            upsert: true
        })



        if (error) {
            console.error('Error uploading image:', error);
        } else {
          const imageUrl = data.path;
        

        if (user) {
            let { data: invoice, error } = await supabase
            .from('invoice')
            .insert({
              'owner_name': owner_name, 'owner_email':owner_email,  'owner_City':owners_City, 'owner_State': owners_State, 'cus_name' : cus_name,
              'cus_email': cus_email, 'cus_City': cus_City, 'cus_State': cus_State, 'notes': notes, 'items':items, 'image_url': imageUrl
            })
            .select()

            if (error) {
                console.error('Error fetching profile:', error);
                setIsLoading(false)
            } else {
                setSuccess(true)
                router.push(`${'/'}dashboard2/DashboardCreate`)
                console.log('Inoice Uploaded Successfully')
                setIsLoading(false)
            }

        }
        }

    }


    setTimeout(function() {
      setSuccess(false)
  }, 100000);


   

    
  return (
    <div className='p-10 flex max-sm:p-0 max-sm:block'>
          <div className='hidden max-sm:grid max-sm:grid-cols-2 max-sm:gap-72 max-sm:items-center 
            max-sm:bg-zinc-900 max-sm:p-5 max-sm:fixed max-sm:w-full max-sm:m-auto max-sm:text-center max-sm:justify-center justify-items-center
            '>
            <SideDash />
          </div>  
          <SideDash />
        <form action="" onSubmit={fetchData} className='bg-zinc-100 grid grid-cols-4 gap-10 ml-72 w-screen px-10 py-5 rounded-3xl 
          max-sm:m-0 max-sm:block max-sm:p-4 max-sm:rounded-none max-sm:pt-20'>
            {success && 
                <div className="alert alert-success max-sm:flex max-sm:w-full w-full bg-purple-500 absolute top-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 " fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Your Profile is successfully Updated !!!</span>
                    <AiOutlineCloseCircle className='text-xl cursor-pointer hover:text-zinc-400 hover:transition-all' onClick={()=>setSuccess(false)}/>
                </div>
            }
            <div className='bg-white col-span-3 p-6 rounded-3xl text-black over'>
              <div className='grid grid-cols-3 pb-8 max-sm:grid-cols-2'>

                <div className='flex items-center col-span-1 cursor-pointer max-sm:'>
                  <h2 className='max-sm:text-sm'><b>Date:</b> 24/10/2023</h2>
                  <PiCaretUpDownFill className='pl-2 text-2xl' />
                </div>
                
                <div className='flex items-center col-span-1 cursor-pointer'>
                  <h2 className='max-sm:text-sm'><b>Due Date:</b> Select date</h2>
                  <PiCaretUpDownFill className='pl-2 text-2xl'/>
                </div>
              </div>

              <h2 className='text-center text-2xl pb-5'>Invoice #001</h2>
              <hr />

              
                <div className='grid grid-cols-2 gap-5 py-4 max-sm:block'>
                  <div className='col-span-1'>
                    <label htmlFor="" className=''>Bill from</label>
                    <input type="text" 
                        value={owner_name}
                        onChange={(e) => setOwner_name(e.target.value)}
                        placeholder='Full name' className='block w-full px-4 
                        py-3 my-4 rounded-lg bg-zinc-100 outline-none'/>


                    <input type="email" 
                        value={owner_email}
                        onChange={(e) => setOwner_email(e.target.value)}
                        placeholder='Email' 
                        className='block w-full px-4 py-3 mb-2 rounded-lg bg-zinc-100 outline-none'/>


                    <div className='flex gap-3'>
                      <input type="text" 
                          value={cus_State}
                          onChange={(e) => setCus_State(e.target.value)}
                          placeholder='State' 
                          className='block w-full px-4 py-3 mb-2 rounded-lg bg-zinc-100 outline-none'
                      />

                      <input type="text" 
                          value={cus_City}
                          onChange={(e) => setCus_City(e.target.value)}
                          placeholder='City' 
                          className='block w-full px-4 py-3 mb-2 rounded-lg bg-zinc-100 outline-none'
                      />
                    </div>
                  </div>

                  

                  <div className='col-span-1 max-sm:mt-6'>
                    <label htmlFor="">Bill to</label>
                    <input type="text" 

                      value={cus_name}
                      onChange={(e) => setCus_name(e.target.value)}
                      placeholder='Full name' 
                      className='block w-full px-4 py-3 my-4 rounded-lg bg-zinc-100 outline-none'/>

                    <input type="text" 

                      value={cus_email}
                      onChange={(e) => setCus_email(e.target.value)}
                      placeholder='Email' 
                      className='block w-full px-4 py-3 mb-2 rounded-lg bg-zinc-100 outline-none'/>

                    <div className='flex gap-3'>
                      <input type="text" 
                          value={owners_State}
                          onChange={(e) => setOwners_State(e.target.value)}
                          placeholder='State' 
                          className='block w-full px-4 py-3 mb-2 rounded-lg bg-zinc-100 outline-none'
                      />

                      <input type="text" 
                          value={owners_City}
                          onChange={(e) => setOwners_City(e.target.value)}
                          placeholder='City' 
                          className='block w-full px-4 py-3 mb-2 rounded-lg bg-zinc-100 outline-none'
                      />
                    </div>
                  </div>
                  
                </div>  
                <hr />

                <div className='pb-5'>
                  <ul className='grid grid-cols-2 pt-4 gap-4 pb-5'>

                    <div className='col-span-1'>
                      <li >ITEM</li>
                    </div>

                    <div className='col-span-1 grid grid-cols-4 gap-3 max-sm:flex'>
                      <li className='col-span-1 text-sm max-sm:text-xs'>QTY</li>
                      <li className='col-span-1 text-sm max-sm:text-xs'>RATE</li>
                      <li className='col-span-1 text-sm max-sm:text-xs'>TOTAL</li>
                      <li className='col-span-1 text-sm max-sm:text-xs' >ACTION</li>
                    </div>

                  </ul>

                {items.map((item, index) => (
                  <>
                  <hr className=' max-sm:block my-5'/>
                    <div className='grid grid-cols-2 gap-4 max-sm:block max-sm:mb-5' key={index}>
                      <div className='col-span-1' >
                        <input type="text" 
                          required
                          value={item.name}
                          onChange={(e) => {
                            const newItems = [...items];
                            newItems[index].name = e.target.value;
                            setItems(newItems);
                          }}
                          placeholder='Item Name' 
                          className='block w-full px-4 py-3 mb-2 rounded-lg bg-zinc-100 outline-none'/>

                        <input type="text" 
                        required
                          value={item.description}
                          onChange={(e) => {
                            const newItems = [...items];
                            newItems[index].description = e.target.value;
                            setItems(newItems);
                          }}
                          placeholder='Description' 
                          className='block w-full px-4 py-3 mb-2 rounded-lg bg-zinc-100 outline-none'/>
                      </div>
                      

                      <div className='col-span-1 grid grid-cols-4 gap-3 max-sm:pt-5 max-sm:gap-5'>
                        <div><input type="number" 
                        required
                            value={item.quantity}
                            onChange={(e) => {
                              const newItems = [...items];
                              newItems[index].quantity = parseInt(e.target.value);
                              setItems(newItems);
                            }}
                            className='block w-full p-3 mb-2 rounded-lg bg-zinc-100 outline-none' placeholder='1 '/>
                        </div>

                          
                        <div><input type="number" 
                        required
                              value={item.price}
                              onChange={(e) => {
                                const newItems = [...items];
                                newItems[index].price = parseFloat(e.target.value);
                                setItems(newItems);
                              }}
                          className='block w-full p-3 mb-2 rounded-lg bg-zinc-100 outline-none' placeholder='$ 0.00'/></div>
                        <p>$ {item.total =(item.price * item.quantity)}</p>
                        {items.length > 1 && (

                        <AiOutlineCloseCircle className='text-xl cursor-pointer hover:text-zinc-400 hover:transition-all' onClick={handleRemove}/>
                        )}
                      </div>
                      
                      {items.length -1 === index && items.length < 10 && (

                        <button className=' text-white cursor-pointer max-sxm:text-sm bg-purple-500 w-fit py-2 px-10 rounded-xl my-3' 
                          onClick={handleAdd}>Add item</button>
                      )}
                    </div>
                  </>
                ))}


                <label className="w-64 flex flex-col items-center px-4 py-6 bg-gray-200 text-gray-700 rounded-lg shadow-lg tracking-wide uppercase cursor-pointer">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1h-5l-2 3-2-3H3a1 1 0 01-1-1V4zm15-1a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h1v3a1 1 0 001 1h10a1 1 0 001-1V3h1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="mt-2 text-base leading-normal">Select an image</span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>

                

                </div>
                <hr />

                <div className='grid grid-cols-5 pt-5 max-sm:gap-3'>
                  <div className='col-span-4'>
                    <p className='pb-2 max-sm:text-sm max-sm:pb-1'>Sub total</p>
                    {/* <p className='pb-2 text-red-800 cursor-pointer max-sm:text-sm max-sm:pb-1'>Add discount</p> */}
                    {/* <p className='text-red-800 cursor-pointer max-sm:text-sm'>Add task</p> */}
                  </div>
                  <p className='col-span-1 max-sm:text-sm'>$0.00</p>
                </div>

                <div className='grid grid-cols-5 py-5'>
                  {/* <p className='col-span-2'></p> */}
                  <p className='col-span-4 max-sm:text-sm max-sm:pl-3'><b>Total</b></p>
                  <p className='col-span-1 max-sm:text-sm'>$0.00</p>
                </div>
                <hr />

                <div className='pt-3'>
                  <p>Notes</p>
                  <textarea 

                    value={notes}
                    onChange={(e)=> setNotes(e.target.value)}
                    placeholder='Thanks for your business' 
                    className='block w-full px-4 py-3 rounded-lg bg-zinc-100 outline-none'/>
                </div>

            </div>

            <div className='col-span-1 pt-8'>
              <button type='submit' className='bg-purple-950 text-white w-full p-3 rounded-lg' >Generate Invoice</button>
              <div className='flex gap-3 mt-4'>
                {/* <button className='bg-white w-full p-3 text-black rounded-lg'>Preview</button> */}
                {/* <button className='bg-white w-full p-3 text-black rounded-lg'>Download</button> */}
              </div>

              <div className='mt-10 text-black'>
                <h2>Currency</h2>
                <div className='bg-white py-3 px-10 mt-3 flex items-center'>
                  <p className=''>USD( United state dollars)</p>
                  <PiCaretUpDownFill className=''/>
                </div>
              </div>
            </div>

            {isLoading && <div>
              <div className="fixed inset-0 flex items-center justify-center bg-zinc-900 bg-opacity-90 ">
                  <span className="loading loading-spinner loading-md"></span>
              </div>
          </div>}

        </form>
    </div>
  )
}

export default DashCreatePage