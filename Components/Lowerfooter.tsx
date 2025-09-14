import Link from 'next/link';
import React from 'react'

const Lowerfooter = () => {
  return (
    <>
        
        <div className='bg-[#fff]'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between items-center py-[18px]'>
                    <div>
                        <p>© 2025 <span className='font-semibold text-blue-700'> Collexa Edu. </span> All rights reserved.</p>
                    </div>
                    <div className='flex gap-4'>
                        <p><Link href="#" className='text-blue-600 hover:text-pink-600'>Terms & Conditions</Link></p>
                        <p><Link href="#" className='text-blue-600 hover:text-pink-600'>Privacy Policy</Link></p>
                        <p><Link href="#" className='text-blue-600 hover:text-pink-600'>Disclaimer</Link></p>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Lowerfooter;