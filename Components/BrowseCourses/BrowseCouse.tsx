import React from 'react'
import AsideBrowse from './AsideBrowse';
import SecBrowseCourse from './SecBrowseCourse';

const BrowseCouse = () => {
    return (
        <>

            <div className='px-4 py-20'>
                <div className='max-w-7xl mx-auto'>

                    <div className='grid grid-cols-1 md:grid-cols-[270px_1fr] gap-10'>

                        <AsideBrowse />

                        <SecBrowseCourse />

                        

                    </div>

                </div>
            </div>

        </>
    )
}

export default BrowseCouse;