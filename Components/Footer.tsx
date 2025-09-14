import Image from 'next/image';
import React from 'react'
import logo from '@/public/Images/logo.webp'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (

        <footer className='bg-gradient-to-br from-blue-50 via-white to-pink-50 border-t border-neutral-200'>
            <div className='max-w-7xl mx-auto px-4 py-16 grid grid-cols-4 gap-12'>

                <div>
                    <Image src={logo} alt="logo" width={150} height={150} />
                    <p className='text-base text-neutral-700 mb-4'>India most trusted platform to compare & choose the best online programs</p>
                    <p className='font-semibold text-pink-600'>Empowering your education journey 🚀</p>
                    <div className='flex gap-3 mt-3'>
                      <span><Facebook className='text-[#163683] w-5 h-5'/></span>
                      <span><Instagram className='text-[#163683] w-5 h-5'/></span>
                      <span><Linkedin className='text-[#163683] w-5 h-5'/></span>
                      <span><Twitter className='text-[#163683] w-5 h-5'/></span>
                    </div>
                    
                </div>

                <div>
                    <p>Popular Courses</p>
                    <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <p>Online MBA</p>
                        <p>Online MBA</p>
                        <p>Online MBA</p>
                        <p>Online MBA</p>
                        <p>Online MBA</p>
                        <p>Online MBA</p>
                        <p>Online MBA</p>
                        <p>Online MBA</p>
                    </div>

                    <div>
                        <p>Online MBA</p>
                        <p>Online MBA</p>
                        <p>Online MBA</p>
                        <p>Online MBA</p>
                        <p>Online MBA</p>
                        <p>Online MBA</p>
                        <p>Online MBA</p>
                        <p>Online MBA</p>
                    </div>
                    </div>
                </div>

                <div>dfdfd</div>

                <div>dfdfd</div>


            </div>
        </footer>
 
  )
}

export default Footer;