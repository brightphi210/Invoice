import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'

const FooterNew = () => {
  return (
    <div>
        <section className='grid grid-cols-5 gap-10 p-40 items-center max-sm:block max-sm:p-10 max-sm:pt-12'>
            <div className='col-span-2 max-sm:pb-10'>
                <h2 className='text-4xl uppercase font-semibold max-sm:text-2xl' >Invoicing</h2>
                <p className='text-md pt-4 max-sm:pt-2'>use our plartform and get your business <br /> quick and running</p>
            </div>
            <div className='col-span-1 max-sm:pb-10'>
                <h2 className='text-xl pb-5 max-sm:pb-3'>Resources</h2>
                <p>Home</p>
                <p>Invoicing</p>
                <p>Pricing</p>
            </div>
 
            <div className='col-span-1 max-sm:pb-10'>
                <h2  className='text-xl pb-5 max-sm:pb-3' >Other Links</h2>
                <p>Registration</p>
                <p>FAQ’s</p>
                <p>Login</p>
            </div>

            <div className='col-span-1 max-sm:pb-10'>
                <h2  className='text-xl pb-5 max-sm:pb-3' >Connect with us:</h2>
                <div className='flex gap-5 text-2xl'>
                    <BsFacebook />
                    <BsTwitter />
                    <AiFillLinkedin />
                </div>
            </div>
        </section>
    </div>
  )
}

export default FooterNew