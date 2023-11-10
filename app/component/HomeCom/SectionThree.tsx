
import React from 'react'
import myImage from './image2.png'
import Image from 'next/image'
const SectionThree = () => {


    // const handleChange = () =>{

    // }
    
  return (
    <div className = 'bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black via-stone-800 to-black pt-20'>
        <section className='myBgTwo-gradient2 m-40 flex items-center px-20 rounded-3xl gap-16 max-sm:block max-sm:mx-8 max-sm:px-6 max-sm:my-10'>
            <div>
                <h2 className='text-5xl text-black font-semibold max-sm:text-xl max-sm:pt-7 '>Automate Your Invoices Today</h2>
                <p className='text-xl pt-7 text-black max-sm:text-sm max-sm:pt-3 text-justify'>
                    Simplify invoicing and estimates and stay organized with Invoicequick, 
                    an online invoicing software. <br /> Set it up in seconds and start collecting payments 
                    on autopilot
                </p>
                <div className='flex'>
                    <button className='bg-black mt-5 p-4 px-14 rounded-xl mr-4 max-sm:px-6'>Free Trial</button>
                    <button className='border border-zinc-600 mt-5 p-4 px-14 rounded-xl text-black max-sm:px-4'>View Pricing</button>
                </div>
            </div>

            <div className='col-span-1 mt-10'>
                <Image src={myImage} alt='' width={400} height={400} />
            </div>
        </section>

        <div className='px-40 pb-20 max-sm:px-8'>
            <h2 className='text-center text-5xl pb-8 max-sm:text-2xl max-sm:pt-10 max-sm:pb-4 '>Frequently Asked Questions</h2>
            <div className='grid grid-cols-2 gap-10 max-sm:block'>
                <div className='col-span-1 bg-zinc-950 p-12 rounded-3xl max-sm:mb-6' >
                    <h2 className='text-2xl pb-5'>Can I add my business logo?</h2>
                    <p>
                        Yes, when you create an account you can add your logo once 
                        and it will appear on all invoices and estimates.
                    </p>
                </div>

                <div className='col-span-1 bg-zinc-950 p-12 rounded-3xl max-sm:mb-6'> 
                    <h2 className='text-2xl pb-5'>How do I send an invoice to clients?</h2>
                    <p>
                    You can email it directly through InvoiceQuick and 
                    get notified when clients open, view, download, or pay the invoice.
                    </p>
                </div>

                <div className='col-span-1 bg-zinc-950 p-12 rounded-3xl max-sm:mb-6'>
                    <h2 className='text-2xl pb-5'>How can Invoicing help me stay organized?</h2>
                    <p>
                    We’ve got you covered with powerful accounting and customer management 
                    features. Monitor cash flow with income and expense accounts. View business stats and 
                    </p>
                </div>

                <div className='col-span-1 bg-zinc-950 p-12 rounded-3xl max-sm:mb-6'>
                    <h2 className='text-2xl pb-5'>Can I import or export data?</h2>
                    <p>
                    Yes, you can import existing customers, expenses, and invoice items. 
                    You can export invoices, customers, invoice items, vendors and expenses with one click.
                    </p>
                </div>

                {/* <button onClick={handleChange}>Click</button> */}

            </div>
        </div>
    </div>
  )
}

export default SectionThree