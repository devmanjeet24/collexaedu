import { BrowseCourse } from '@/DataFile/Data';
import Link from 'next/link';
import React from 'react'

const SecBrowseCourse = () => {
    return (
        <>

            <div>
                <h2 className='text-4xl lg:text-5xl font-extrabold tracking-tight drop-shadow-lg text-[#163683]'>Browse Courses</h2>

                <div className='mt-8 grid grid-cols-1 lg:grid-cols-3 gap-7'>
                    {
                        BrowseCourse.map((course, ind) => {
                            return (
                                <div className='relative p-6 rounded-2xl bg-white/90 backdrop-blur shadow-xl transition-all duration-200 hover:scale-[1.025] hover:shadow-2xl' key={ind}>

                                    <h4 className='flex items-center gap-2 text-lg font-bold text-neutral-900 mb-1 '><span className='w-[8px] h-[8px] bg-[#d3e3fd] block rounded-full '></span>{course.name}</h4>


                                    {course.motion && (
                                        <p className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs w-fit whitespace-nowrap absolute top-5 right-5 bg-[#2d4a8f] text-white animate-bounce-slow">
                                            {course.badge}
                                        </p>
                                    )}
                                    <div className='flex items-center gap-2'>
                                        <span className='text-xs text-neutral-500 font-medium mb-4'>{course.Post}</span>
                                        <span className='mx-1 mb-4'>•</span>
                                        <span className='text-xs text-neutral-500 font-medium mb-4'>{course.month}</span>
                                    </div>

                                    <div className='flex items-center gap-3 mt-2'>
                                        <button className='inline-flex items-center justify-center h-8 rounded-md gap-1.5 px-3 text-white font-semibold shadow-md transition-all bg-[#2d4a8f] hover:bg-[#23bca5]/90'>{course.fbutton}</button>

                                        <button className='inline-flex items-center justify-center border bg-background shadow-xs  dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 border-[#23bca5]/30 text-primary font-semibold hover:bg-[#23bca5]/10 transition-all'>{course.Details}</button>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>


                <div className='flex justify-center items-center'>
                    <Link href="#" className='inline-flex rounded-2xl border border-[#2d4a8f]/30 bg-[#2d4a8f]/10 px-10 py-2 tex-[16px] font-semibold text-[#2d4a8f] hover:bg-[#2d4a8f]/20'>ViewAll</Link>
                </div>

            </div>

        </>
    )
}

export default SecBrowseCourse;