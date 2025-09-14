import { Collexagroup } from '@/DataFile/Data';
import { Sparkles, UserRoundCheck } from 'lucide-react';
import React from 'react'

const Collexapage = () => {
    return (
        <>

            <div className='max-w-7xl mx-auto px-4 py-20'>

                <div className='grid md:grid-cols-2 items-center'>

                    <div className="text-left">

                        <h4 className='text-4xl sm:text-5xl font-extrabold tracking-tight text-[#163683]'>Why Collexa?</h4>

                        <p className='mt-5 text-lg text-[#163683] max-w-xl font-bold'>No confusion, only clarity!</p>

                        <p className='mb-5'><span className='text-indigo-600 font-semibold'>Compare, match, and win</span> <span className='font-semibold'> with </span> <span className='text-yellow-600  font-semibold'>India’s trusted education platform.</span></p>


                        <div className='mt-10 flex flex-wrap items-center gap-4'>

                            <div className='inline-flex items-center gap-2 rounded-full px-7 py-3 text-base font-semibold text-[#163683] bg-[#163683]/10 shadow hover:text-[#19dac3]   transform transition-transform duration-300 hover:scale-105'>
                                <p className='flex items-center gap-2'>Get My Match <span><Sparkles /></span></p>
                            </div>

                            <div className='inline-flex items-center gap-2 rounded-full px-7 py-3 text-base font-semibold text-[#163683] hover:text-[#19dac3] border border-[#163683]/20 bg-white shadow hover:bg-[#19dac3]/10 transform transition-transform duration-300 hover:scale-105'>
                                <p className='flex items-center gap-2'>Get My Match <span><UserRoundCheck /></span></p>
                            </div>

                        </div>

                    </div>


                    <div className='grid grid-cols-2 gap-6'>
                        {
                            Collexagroup.map((item, id) => {
                                return (
                                    <div key={id} className='rounded-2xl border border-blue-200 bg-white p-7 shadow hover:shadow-md'>
                                        <div className='flex items-center gap-4'>
                                            <div className='h-12 w-12 rounded-xl bg-neutral-50 border flex items-center justify-center text-xl shadow group-hover:shadow-md'>
                                                <span style={{ color: item.color }}>{item.icon}</span>
                                            </div>

                                            <p className='text-lg font-semibold text-neutral-900'>{item.name}</p>
                                        </div>

                                        <p className='text-base text-neutral-700 mt-3 pl-1'>{item.para}</p>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>

            </div>

        </>
    )
}

export default Collexapage;