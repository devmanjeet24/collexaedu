import { Asidedata } from '@/DataFile/Data';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react';
import React from 'react'

const AsideBrowse = () => {
    return (
        <>


            <aside className='h-max rounded-2xl border border-neutral-200 bg-white/90 p-6 shadow-xl'>

                <p className='flex items-center gap-2 text-lg font-extrabold text-neutral-900 tracking-tight '><span className='w-[8px] h-[8px] bg-[#4c64a0] block rounded-full'></span>Explore Courses</p>

                <div className='mt-6 flex flex-wrap gap-2'>

                    {
                        Asidedata.map((cousere, ind) => {
                            return (

                                <div key={ind} className='rounded-full px-4 py-2 text-sm font-semibold border transition-all duration-150 shadow-sm bg-neutral-50 text-neutral-800 border-neutral-200 hover:bg-primary/10 hover:border-primary/30'> 

                                    <p>{cousere.text}</p>

                                </div>

                            )
                        })
                    }

                </div>


                <div className='mt-7'>
                    <label htmlFor="" className='class="text-xs font-semibold text-neutral-600"'>Search</label>

                    <input type="text" placeholder='🔍 Find a course'  className='h-9 w-full min-w-0 border bg-transparent px-3 py-1 text-base shadow-xs rounded-2xl'/>

                </div>


                <div className='mt-7'>

                     <label htmlFor="" className='class="text-xs font-semibold text-neutral-600"'>Duration</label>

                    <DropdownMenu >
                        <DropdownMenuTrigger className='flex items-center justify-between gap-2 w-full'>Open <span><ChevronDown /></span></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>

            </aside>

        </>
    )
}

export default AsideBrowse;