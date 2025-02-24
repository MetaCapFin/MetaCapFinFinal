"use client"
import React, { useState } from 'react'
import Container from '../ui/container'
import WButton from '../ui/button-white'
import Image from 'next/image'
import GradientText from '../ui/gradient-text'

const Solution = () => {
    const [hover, setHover] = useState(false)
  return (
    <section id="solution" className='text-white md:py-20 lg:pb-40'>
        <Container className="grid grid-cols-1 items-center gap-6 lg:gap-[136px] md:grid-cols-2">
            <div>
                <WButton className="">
                    <Image src="/assets/svg/solution-icon.svg" alt="" width={20} height={20}/>
                    Solution
                </WButton>
                <GradientText className="my-6" small>
                    Working capital solution built to propel your <span>growth</span>
                </GradientText>
                <p className='lg:text-xl text-white/70 font-light'>MetaCap understands your business challenges. Currently working with more than a dozen integrations, our platform along with our intimate understanding of the industry, will propel your business to new heights.</p>
                <p className='lg:text-xl text-white/70 mt-3 font-light'>“Think of us as high octane gasoline for your sales and production engine 🚀”.</p>
            </div>
            <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
                {/* <SolutionImage/> */}
                <figure>
                    <Image src="assets/svg/solution.svg" alt="" width={660} height={500}/>
                </figure>
            </div>
        </Container>
    </section>
  )
}

export default Solution
