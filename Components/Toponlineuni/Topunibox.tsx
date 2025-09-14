import { onlineuniversity } from '@/DataFile/Data';
import Image from 'next/image';
import React from 'react'

const Topunibox = () => {
    return (
        <>

            {
                onlineuniversity.map((uni) => {
                    return (

                        <div key={uni.id} className='group relative rounded-2xl border border-neutral-200 bg-white/90 backdrop-blur-lg p-6 text-left shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1 flex justify-center items-center flex-col'>

                          <div className='h-16 w-16 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center overflow-hidden shadow-sm group-hover:scale-105 transition-transform'>
                            <Image src={uni.boximg} alt="Topuni" width={30} height={30} />
                          </div>

                            <div className={`text-white px-3 py-1 absolute text-[12px] rounded-[100px] -top-4 right-6 ${uni.badgeStyle}`}>{uni.Badge}</div>

                            <h4 className='text-lg font-bold text-neutral-900 leading-tight my-[20px]'>{uni.name}</h4>

                            <div className='flex justify-center items-center gap-2'>
                                {
                                    uni.courses.map((cour, ind) => {
                                        return(
                                            <p key={ind} className='rounded-full border border-neutral-200 bg-gradient-to-r from-neutral-50 to-white px-3 py-1 text-xs text-neutral-700 font-medium shadow-sm'>{cour}</p>
                                        )
                                    })
                                }
                            </div>


                        </div>

                    )
                })
            }




        </>
    )
}

export default Topunibox;