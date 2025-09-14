import { GraduationCap, Mail, MessageCircle, Phone, User } from 'lucide-react';
import React from 'react'

const Contactform = () => {
  return (
    <>
        
        <form action="" className='relative rounded-3xl border border-primary/20 bg-white/90 backdrop-blur-lg shadow-2xl p-8 sm:p-10 mb-4'>
        

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-2'>

            <div>
                <label htmlFor="" className='text-sm text-neutral-600 font-semibold flex items-center gap-1 mb-2'><span> <User className='text-[#51a2ff]' /></span> Full Name</label>
                <input type="text" placeholder='Your name' className='flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 shadow-xs '/>
            </div>

             <div>
                <label htmlFor="" className='text-sm text-neutral-600 font-semibold flex items-center gap-1 mb-2'><span> <Mail className='text-green-600' /></span> Full Name</label>
                <input type="text" placeholder='Your name' className='flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 shadow-xs '/>
            </div>
        

              <div>
                <label htmlFor="" className='text-sm text-neutral-600 font-semibold flex items-center gap-1 mb-2'><span> <Phone className='text-orange-600' /></span> Full Name</label>
                <input type="text" placeholder='Your name' className='flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 shadow-xs '/>
            </div>
        

              <div>
                <label htmlFor="" className='text-sm text-neutral-600 font-semibold flex items-center gap-1 mb-2'><span> <GraduationCap className='text-pink-600' /></span> Full Name</label>
                <input type="text" placeholder='Your name' className='flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 shadow-xs '/>
            </div>
         
            <div className='col-span-2'>
                 <label htmlFor="" className='text-sm text-neutral-600 font-semibold flex items-center gap-1 mb-2'><span> <MessageCircle className='text-[#51a2ff]' /></span> Full Name</label>
                <textarea name="" id="" placeholder='Tell us about your goals, background, or any questions you have' className='w-full flex h-20 min-w-0 rounded-md border bg-transparent px-3 py-1 shadow-xs'></textarea>

            </div>
         




        </div>

        <div className='mt-7 mb-2'>
            <button className='w-full rounded-full bg-[#163683]/90 text-white font-semibold text-lg py-3 shadow-lg hover:bg-[#163683] flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 h-9'>Send Message</button>

            <p className='mt-2 text-sm text-neutral-600 text-center'>We respect your privacy. Your details are <span className='text-green-500'> never shared. </span></p>
        </div>
        
        
        
        </form>

    </>
  )
}

export default Contactform;