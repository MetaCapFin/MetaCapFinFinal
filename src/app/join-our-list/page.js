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
        document.body.appendChild(script);

        const handleEventScheduled = (event) => {
            console.log("Event scheduled:", event.detail);
            fetch("https://hooks.zapier.com/hooks/catch/20787888/2fsz8hg/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(event.detail)
            })
            .then(response => response.json())
            .then(data => console.log("Success:", data))
            .catch(error => console.error("Error:", error));
        };

        window.addEventListener("calendly.event_scheduled", handleEventScheduled);

        return () => {
            document.body.removeChild(script);
            window.removeEventListener("calendly.event_scheduled", handleEventScheduled);
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
                data-url="https://calendly.com/carlos-alvarez-tym/30-minute-meeting-clone"
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
