import { onlineuniversity } from '@/DataFile/Data';
import Image from 'next/image';
import React from 'react'

const Topunibox = () => {
    return (
        <>

            {
                onlineuniversity.map((uni) => {
                    return (

                        <div key={uni.id}>
                            
                            <Image src="/Images/Topuni.webp" alt="Topuni" width={800} height={800} />


                        </div>

                    )
                })
            }




        </>
    )
}

export default Topunibox;