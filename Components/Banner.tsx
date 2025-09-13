
import React from 'react'



const Banner = () => {
    return (
        <>
            <div className='max-w-7xl mx-auto '>
                <div className='flex justify-center flex-col items-center h-screen'>


                    <div className='rounded-full border border-neutral-200/70 backdrop-blur bg-white/70 px-3 py-1 text-xs text-neutral-700 mb-4 shadow-sm inline-flex'>
                        <p className='flex items-center gap-2'>Trusted by 1 Lakh+ students
                            <span className='w-[5px] h-[5px] bg-neutral-300 block rounded full'></span>
                            500+ expert mentors</p>
                    </div>

                    <h2 className='text-[60px] font-bold text-center w-[90%] leading-[70px]'>Chuno Apna Sahi: Compare Online Universities & Programs</h2>

                    <p className='mt-10 text-[18px] font-normal w-[60%] text-center'>Explore 100+ online universities with unbiased guidance. Get a personalized suggestion in 2 minutes.</p>


                    <div className='mt-8 w-full max-w-xl bg-white/80 rounded-md p-1 shadow-sm flex gap-[8px]'>
                        <input type='text' className='w-full flex-1 rounded-md border  bg-white px-4 py-3 text-sm outline-none focus:border-black' placeholder='Search programs e.g. Online MBA' />
                        <button className='rounded-md bg-black text-white px-5 text-sm hover:bg-neutral-800'>Search</button>
                    </div>

                    <p className='mt-3 text-xs text-neutral-500'>Popular: Online MBA, Online MCA, Data Science</p>

                    <div className="mt-8 flex items-center gap-4 text-xs text-neutral-700" >
                        <div className="flex items-center gap-2">
                            <span className="inline-flex h-6 items-center rounded-full bg-green-50 px-2 text-green-700 border border-green-200">4.8/5 Google</span>
                        </div>
                        <div className="hidden sm:block h-4 w-px bg-neutral-200">
                        </div>
                        <a className="text-neutral-800 hover:text-black underline underline-offset-4" href="#suggest">Suggest in 2 mins</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Banner;