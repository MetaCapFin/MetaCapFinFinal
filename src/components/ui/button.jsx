import Image from 'next/image'
import React from 'react'

const Button = ({children, className, bg}) => {
    return (
        <button className='moving_glow_animation p-[1px]'>
            <div className={`p-1 border border-[#2A283A] bg-[#050419] backdrop-blur-sm rounded-[21px] ${bg && "bg-[#2e2e65]/80 border-[#2e2e65]"}`}>
                <div className={`text-white flex justify-center items-center flex-1 insetshadow border cursor-pointer border-[#313041] py-2 px-4 md:py-[8px] md:px-6 rounded-2xl ${className} gap-2 group ${bg ? "bg-btngradient bgbtn" : "bgtbtn"}`}>
                    <p className='pb-[1px]'>{children}</p>
                    <button className='flex gap-1 h-4 items-center overflow-x-hidden relative w-[17px]'>
                        <Image src="/assets/svg/arrow.svg" alt="arrow" className='absolute -left-5 group-hover:left-0 transition-all duration-300' width={17} height={12} />
                        <Image src="/assets/svg/arrow.svg" alt="arrow" width={17} className='absolute left-0 group-hover:left-5 transition-all duration-300' height={12} />
                    </button>
                </div>
            </div>
        </button>
    )
}

export default Button