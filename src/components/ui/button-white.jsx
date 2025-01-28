import Image from 'next/image'
import React from 'react'

const WButton = ({children, className}) => {
    return (
        <button className='moving_glow_animation_white p-[1px]'>
            <div className="bg-[#050419] rounded-full">
                <div className={`text-white flex justify-center items-center flex-1 insetshadow border cursor-pointer border-[#313041] py-[5px] px-4 rounded-full ${className} gap-2 group`}>
                    <p className=' flex items-center gap-2'>{children}</p>
                </div>
            </div>
        </button>
    )
}

export default WButton