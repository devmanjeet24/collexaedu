import { MoveRight, Sparkles, UserRoundCheck } from 'lucide-react';
import React from 'react'

const Personalized = () => {
    return (
        <>
            <div className='w-full max-w-7xl mx-auto px-4 py-16'>
                <div className='relative rounded-3xl border border-primary/20 bg-white/90 backdrop-blur-lg shadow-2xl p-10 sm:p-14 text-center'>

                    <div className='absolute bottom-5 right-5 text-2xl'><Sparkles className='text-[#b0d6ff]' /></div>

                    <div className='flex flex-col items-center'>
                        <div className='inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-green-100 via-blue-100 to-pink-100 text-green-700 font-semibold text-base shadow mb-3 border border-green-100/60 '><span><Sparkles /></span> Find Your Best Fit</div>

                        <h4 className='text-5xl  font-extrabold text-center text-blue-900 tracking-tight drop-shadow mb-3'>Get Your Personalized Program Match</h4>

                        <p className='mt-4 text-xl text-neutral-700 max-w-2xl text-center'><span className='font-semibold text-green-700'>Answer a few quick questions </span> and receive <span className='font-semibold text-pink-700'>expert-backed suggestions</span> in minutes. <span className='font-semibold text-blue-700'>No spam, just clarity!</span></p>

                        <div className='mt-10 flex flex-wrap items-center gap-4'>

                            <div className='inline-flex items-center gap-2 rounded-full px-7 py-3 text-base font-semibold text-[#163683] bg-[#163683]/10 shadow hover:text-[#19dac3]   transform transition-transform duration-300 hover:scale-105'>
                                <p className='flex items-center gap-2'><span><Sparkles className='text-[#ffdf20]' /> </span> Get My Match <span> <MoveRight /></span> </p>
                            </div>

                            <div className='inline-flex items-center gap-2 rounded-full px-7 py-3 text-base font-semibold text-[#163683] hover:text-[#19dac3] border border-[#163683]/20 bg-white shadow hover:bg-[#19dac3]/10 transform transition-transform duration-300 hover:scale-105'>
                                <p className='flex items-center gap-2'>Talk to expert <span><UserRoundCheck /></span></p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Personalized;