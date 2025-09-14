import { MainFaculty } from '@/DataFile/Data';
import { Plus, Sparkles, Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const Faculty = () => {
    return (
        <>

            <div className='px-4 py-20 max-w-7xl mx-auto'>
                <h5 className='text-4xl sm:text-4xl lg:text-5xl font-extrabold text-center tracking-tight text-[#163683]'>Meet Our Rockstar Faculty & Mentors</h5>
                <p className='mt-4 text-lg sm:text-xl text-neutral-600 text-center max-w-2xl mx-auto'>Learn from the best minds in the industry. Our mentors are leaders from IIT, ISB, Meta, Goldman Sachs & more.</p>


                <div className='mt-12 grid  grid-cols-4 gap-8'>


                    {
                        MainFaculty.map((ind, id) => {
                            return (

                                <div key={id} className='flex justify-center items-center'>
                                    <div className='rounded-3xl border border-neutral-200 bg-[#eee]/90 backdrop-blur p-8 text-center shadow-xl overflow-hidden group hover:scale-[1.03] transition-transform duration-200 flex justify-center items-center flex-col'>

                                        <div className='flex justify-center items-center bg-[#fff] rounded-full p-4 w-[100px]'>
                                            <Image src={ind.Faultyimg} alt="faculty" width={80} height={80} />
                                        </div>

                                        <p className='mt-4 text-lg font-semibold text-neutral-900'>{ind.name}</p>
                                        <p className='text-sm text-neutral-600'>{ind.tech}</p>
                                        <p className='mt-1 text-xs text-neutral-500'>{ind.exp}</p>

                                        <div>
                                            <p className='mt-4 italic text-[13px] text-neutral-700 px-2 opacity-90'>&quot;{ind.quote}&quot;</p>
                                        </div>

                                    </div>

                                </div>

                            )
                        })
                    }





                </div>


                <div className='mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6'>

                    <div className='flex justify-center items-center flex-col rounded-2xl border border-neutral-200 bg-white/90 p-7 text-center shadow-md overflow-hidden'>

                        <span><Sparkles className='text-[rgb(218,218,21)] mb-2'/></span>

                        <p className='text-3xl font-bold text-neutral-900 mb-2'>500+</p>

                        <p className='text-sm text-neutral-600'>Expert mentors</p>

                    </div>

                    <div className='flex justify-center items-center flex-col rounded-2xl border border-neutral-200 bg-white/90 p-7 text-center shadow-md overflow-hidden'>

                        <span><Star className='text-[#f6339a] mb-2'/></span>
                    
                        
                      <p className='text-3xl font-bold text-neutral-900 mb-2'>500+</p>

                        <p className='text-sm text-neutral-600'>Expert mentors</p>

                    </div>

                    <div className='flex justify-center items-center flex-col rounded-2xl border border-neutral-200 bg-white/90 p-7 text-center shadow-md overflow-hidden'>

                        <div className='flex justify-center items-center gap-1 mb-2'>
                            <span><Star className='text-[#fdc700]'/></span>
                            <span><Star className='text-[#fdc700]'/></span>
                            <span><Star className='text-[#fdc700]'/></span>
                            <span><Star className='text-[#fdc700]'/></span>
                            <span><Star className='text-[#fdc700]'/></span>
                        </div>

                         <p className='text-3xl font-bold text-neutral-900'>500+</p>

                        <p className='text-sm text-neutral-600'>Expert mentors</p>
                    </div>

                </div>
            </div>

            <div className='mt-6 flex justify-center'>
               <p className='inline-flex items-center gap-2 rounded-full px-8 py-3 text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-150 text-[#163683] underline'>Connect with a Mentor</p>
            </div>

        </>
    )
}

export default Faculty;