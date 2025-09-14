import Image from 'next/image';
import React from 'react'
import logo from '@/public/Images/logo.webp'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (

        <footer className='bg-gradient-to-br from-blue-50 via-white to-pink-50 border-b border-gray-200'>
            <div className='max-w-7xl mx-auto px-4 py-16 grid grid-cols-4 gap-12'>

                <div>
                    <Image src={logo} alt="logo" width={150} height={150} />
                    <p className='text-base text-neutral-700 mb-4'>India most trusted platform to compare & choose the best online programs</p>
                    <p className='font-semibold text-pink-600'>Empowering your education journey 🚀</p>
                    <div className='flex gap-3 mt-3'>
                        <span><Facebook className='text-[#163683] w-5 h-5' /></span>
                        <span><Instagram className='text-[#163683] w-5 h-5' /></span>
                        <span><Linkedin className='text-[#163683] w-5 h-5' /></span>
                        <span><Twitter className='text-[#163683] w-5 h-5' /></span>
                    </div>

                </div>

                <div>
                    <p className='text-lg font-bold mb-4 text-blue-700'>Popular Courses</p>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='flex flex-col gap-[3px]'>
                            <p> <Link className='hover:text-pink-600 text-blue-600 font-medium underline' href="#">Online MBA</Link></p>
                            <p> <Link className='hover:text-pink-600 text-blue-600 font-medium underline' href="#">Online MBA</Link></p>
                            <p> <Link className='hover:text-pink-600 text-blue-600 font-medium underline' href="#">Online MBA</Link></p>
                            <p> <Link className='hover:text-pink-600 text-blue-600 font-medium underline' href="#">Online MBA</Link></p>
                            <p> <Link className='hover:text-pink-600 text-blue-600 font-medium underline' href="#">Online MBA</Link></p>
                            <p> <Link className='hover:text-pink-600 text-blue-600 font-medium underline' href="#">Online MBA</Link></p>
                            <p> <Link className='hover:text-pink-600 text-blue-600 font-medium underline' href="#">Online MBA</Link></p>
                            <p> <Link className='hover:text-pink-600 text-blue-600 font-medium underline' href="#">Online MBA</Link></p>
                        </div>

                        <div className='flex flex-col gap-[3px]'>
                            <p> <Link className='hover:text-pink-600 text-blue-600 font-medium underline' href="#">Online MBA</Link></p>
                            <p> <Link className='hover:text-pink-600 text-blue-600 font-medium underline' href="#">Online MBA</Link></p>
                            <p> <Link className='hover:text-pink-600 text-blue-600 font-medium underline' href="#">Online MBA</Link></p>
                            <p> <Link className='hover:text-pink-600 text-blue-600 font-medium underline' href="#">Online MBA</Link></p>
                            <p> <Link className='hover:text-pink-600 text-blue-600 font-medium underline' href="#">Online MBA</Link></p>
                            <p> <Link className='hover:text-pink-600 text-blue-600 font-medium underline' href="#">Online MBA</Link></p>
                            <p> <Link className='hover:text-pink-600 text-blue-600 font-medium underline' href="#">Online MBA</Link></p>
                            <p> <Link className='hover:text-pink-600 text-blue-600 font-medium underline' href="#">Online MBA</Link></p>
                        </div>
                    </div>
                </div>

                <div>
                    <p className='text-lg font-bold mb-4 text-blue-700'>Company</p>

                    <div className='flex flex-col gap-[3px]'>
                        <p> <Link className='hover:text-pink-600 text-blue-600 font-medium underline' href="#">About Us</Link></p>
                        <p> <Link className='hover:text-pink-600 text-blue-600 font-medium underline' href="#">Careers</Link></p>
                        <p> <Link className='hover:text-pink-600 text-blue-600 font-medium underline' href="#">Blog</Link></p>
                        <p> <Link className='hover:text-pink-600 text-blue-600 font-medium underline' href="#">Contact</Link></p>

                    </div>
                </div>

                <div>
                    <p className='text-lg font-bold mb-4 text-blue-700'>Company</p>

                    <div className='flex flex-col gap-[3px] '>

                        <div className='flex items-center gap-3 text-base text-neutral-800'> <p className='font-medium'>Email:</p> <Link href="mailto:U3s8A@example.com">info@collexa.app</Link></div>

                        <div className='flex items-center gap-3 text-base text-neutral-800'> <p className='font-medium'>Toll Free:</p> <Link href="tel:1800-000-000">1800-000-000</Link></div>

                        <div className='flex items-center gap-3 text-base text-neutral-800'> <p className='font-medium'>Hours:</p> <p>Mon–Sat: 9am – 7pm</p></div>


                        <div className='flex flex-col items-start gap-3 text-base text-neutral-800'> <p className='font-medium'>Address:</p>  <p>2nd Floor, Edu Tower, Sector 62, Noida, UP, India</p></div>

                    </div>
                </div>


            </div>
        </footer>

    )
}

export default Footer;