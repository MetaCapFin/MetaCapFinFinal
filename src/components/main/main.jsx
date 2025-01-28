"use client"
import React from 'react'
import dots from "../../../public/assets/images/dots.png"
import Image from 'next/image';
import GradientText from '../ui/gradient-text';
import Button from '../ui/button';
import Link from 'next/link';

export const Main = () => {
    return (
        <main className='w-full px-4 lg:px-0 relative !bg-contain -mt-[93px] text-white py-[100px]'
            // style={{
            //     backgroundImage: "url(" + dots?.src + ")",
            //     backgroundPosition: 'top center',
            //     backgroundRepeat: 'no-repeat'
            // }}
        >
            <Image src="/assets/images/left-circle.png" alt='' className='left-0 absolute md:top-20' width={836} height={658} />
            <Image src="/assets/images/right_circle.png" alt='' className='right-0 md:top-0 absolute ' width={836} height={658} />
            <div className='mt-10 md:mt-[93px] flex flex-col md:justify-center md:items-center'>
                <h1 className='md:text-center gradientText'>
                    <GradientText>
                        <span>Funding your growth.</span><br />
                        Powering the future
                    </GradientText>
                </h1>
                <p className='max-w-[660px] md:text-center mb-8 mt-4 text-white/70 font-light sm:text-xl mx-auto'>Meta Capital is empowering contractors by providing innovative, flexible capital solutions that allow them to focus on scaling their projects without capital constraints.</p>
                <Link href="/join-our-list"><Button className="!py-[16px] w-[236px]" bg>Connect with us</Button></Link>
                <section className="max-w-[916px] mx-auto mt-12">
                    <figure className='bg-[#282c5300] backdrop-blur rounded-[30px]'>
                    <Image src="/assets/svg/main.svg" alt="" width={916} height={666} />
                    </figure>
                </section>
            </div>
            <Image src="/assets/images/pattern.png" alt="" className="w-full absolute right-0 bottom-20 sm:bottom-0 -z-[1]" width={1500} height={400} />
            <Image src={dots?.src} alt="" className="w-full opacity-50 absolute top-0 right-0 -z-[2]" width={1440} height={636} />
        </main >
    )
}
