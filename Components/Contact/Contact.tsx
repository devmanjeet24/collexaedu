import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import Contactform from './Contactform';

const Contact = () => {
  return (
    <>


       <div className='w-full max-w-5xl mx-auto px-4 py-16'>

        <div className='grid md:grid-cols-2 gap-10'>

            <div className='flex flex-col items-start mb-10'>

                <h3 className="text-4xl sm:text-5xl font-extrabold text-blue-900 tracking-tight drop-shadow mb-[24px]">Contact Us</h3>

                <p className="mt-3 text-lg text-neutral-700 max-w-xl my-[12px]"><span className="font-semibold text-green-700">Confused about your options?</span> Our expert counselors are just a message away. Reach out for <span className="text-blue-700 font-semibold">personalized guidance</span> and <span className="text-pink-600 font-semibold">quick support</span>.</p>


                <div className='mt-7 flex flex-col gap-3'>
                    <div className='flex items-center gap-3 text-base text-neutral-800'><span className='flex items-center justify-center h-9 w-9 rounded-full bg-blue-50 border border-blue-100 shadow-sm'><Mail className='text-[#163683]'/></span> <p className='font-medium'>Email:</p> <Link href="mailto:U3s8A@example.com">info@collexa.app</Link></div>

                    <div className='flex items-center gap-3 text-base text-neutral-800'><span className='flex items-center justify-center h-9 w-9 rounded-full bg-blue-50 border border-blue-100 shadow-sm'><Clock className='text-[#163683]'/></span> <p className='font-medium'>Toll Free:</p> <Link href="tel:1800-000-000">1800-000-000</Link></div>

                    <div className='flex items-center gap-3 text-base text-neutral-800'><span className='flex items-center justify-center h-9 w-9 rounded-full bg-blue-50 border border-blue-100 shadow-sm'><Phone className='text-[#163683]'/></span> <p className='font-medium'>Hours:</p> <p>Mon–Sat: 9am – 7pm</p></div>
                    

                    <div className='flex items-center gap-3 text-base text-neutral-800'><span className='flex items-center justify-center h-9 w-9 rounded-full bg-blue-50 border border-blue-100 shadow-sm'><MapPin className='text-[#163683]'/></span> <p className='font-medium'>Address:</p> <p>Pan India (Online Support)</p></div>
                  
                </div>

            </div>


            <Contactform />

        </div>

       </div>
        
    </>
  )
}

export default Contact;