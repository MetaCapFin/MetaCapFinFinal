"use client"
import Footer from '@/components/footer/footer'
import WButton from '@/components/ui/button-white'
import GradientText from '@/components/ui/gradient-text'
import Image from 'next/image'
import React, { useEffect } from 'react'

const Page = () => {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        script.onload = () => {
            console.log("Calendly widget script loaded");
            if (typeof Calendly !== 'undefined') {
                Calendly.initInlineWidget({
                    url: "https://calendly.com/carlos-alvarez-tym/30-minute-meeting-clone?background_color=05041a&text_color=ffffff&primary_color=21fdf6",
                    parentElement: document.querySelector(".calendly-inline-widget"),
                    prefill: {},
                    utm: {}
                });
            } else {
                console.error("Calendly is not defined");
            }
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section className='relative overflow-y-hidden'>
            <div className='max-w-[660px] mx-auto mt-[70px] mb-0'>
                <div className='flex justify-center'>
                    <WButton>
                        <Image src="/assets/svg/partner.svg" alt="" width={20} height={20} />
                        Connect with us
                    </WButton>
                </div>
                <GradientText className="text-center mt-7 !text-white" small>
                    Let's dig into how Meta Capital can help <span>your business</span>
                </GradientText>
            </div>
            <div
                className="calendly-inline-widget"
                style={{ minWidth: "320px", height: "900px" }}
            ></div>
            <Image src="/assets/images/dots.png" alt="" className="w-full absolute opacity-20 top-0 left-1/2 -translate-x-1/2 -z-[1]" width={1500} height={400} />
            <Image src="/assets/images/left-circle.png" alt='' className='left-0 absolute md:top-0 -z-[1]' width={836} height={658} />
            <Image src="/assets/images/right_circle.png" alt='' className='right-0 md:top-0 absolute -z-[1]' width={836} height={658} />
            <Footer/>
        </section>
    )
}

export default Page
