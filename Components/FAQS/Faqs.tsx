import { Sparkles } from 'lucide-react';
import React from 'react'
import Faqacc from './Faqacc';

const Faqs = () => {
  return (
    <div className='w-full max-w-5xl mx-auto px-2'>

        <div className='flex flex-col items-center mb-10'>

            <div className='inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-green-100 via-blue-100 to-pink-100 text-green-700 font-semibold text-base shadow mb-3 border border-green-100/60 '><span><Sparkles /></span> Got Question?</div>

            <h4 className='text-5xl  font-extrabold text-center text-blue-900 tracking-tight drop-shadow mb-3'>Frequently Asked Questions</h4>

            <p className='mt-4 text-xl text-neutral-700 max-w-2xl text-center'><span className='font-semibold text-green-700'>Everything you want to know, answered.</span> Still curious? Ask us anything!</p>

        </div>


        <Faqacc />

    </div>
  )
}

export default Faqs;