import React from 'react'
import Topunibox from './Topunibox';

const Topuniversity = () => {
    return (
        <>

            <div className=''>
                <div className='max-w-7xl mx-auto'>

                    <div className='flex justify-center flex-col items-center'>

                        <div className='rounded-full border border-neutral-200/70 backdrop-blur bg-white/70 px-3 py-1 text-xs text-neutral-700 mb-4 shadow-sm inline-flex'>
                            <p className='flex items-center gap-2'> 🏆 25 Best Online Universities
                                <span className='w-[5px] h-[5px] bg-neutral-300 block rounded full'></span>
                                Accredited & Trusted</p>
                        </div>

                        <h3 className='text-[60px] text-[#163683] font-bold text-center w-[90%] leading-[70px] '>Top Online Universities in India</h3>

                        <p className='mt-3 text-lg text-neutral-600 max-w-2xl text-center leading-[32px]'>Explore a handpicked list of India’s most trusted online universities. All are UGC/AICTE/NAAC accredited, offering a wide range of programs for your career growth.</p>
                    </div>


                    <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 w-full'>
                        <Topunibox />


                    </div>

                    <div className='flex justify-center items-center'>

                        <div className='flex justify-center items-center gap-2 mt-12 underline rounded-full bg-gradient-to-r from-[#36bda4] to-[#f4de6d] text-white text-base font-semibold px-7 py-3 shadow-lg hover:scale-105 transition-all duration-150 w-fit'>
                            <span>✨</span>
                            <p className='text-blue-700'>Get Personalized University Suggestion</p>
                        </div>

                    </div>






                </div>
            </div>

        </>
    )
}

export default Topuniversity;