import React from 'react'
import WButton from '../ui/button-white'
import Image from 'next/image'
import GradientText from '../ui/gradient-text'
import Container from '../ui/container'

const AllInOneService = () => {
    return (
        <section id="service" className='text-white relative mt-14 md:mt-0'>
            <div className='flex justify-center'>
                <WButton>
                    <Image src="/assets/svg/breafcase.svg" alt="" width={20} height={20} />
                    All-in-One Service
                </WButton>
            </div>
            <GradientText className="text-center mt-7" small>
                Essential Tools and<br /> <span>Support for Growth</span>
            </GradientText>

            <div className='mt-20'>
                <Container className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3 z-10 relative">
                    <div className='insetshadow2 rounded-[20px] p-6 border-[2px] border-[#2D2C3F]'>
                        <figure className='lg:h-[216px] hover-image'>
                            <Image src="/assets/svg/illustration.svg" alt='' width={400} height={208} />
                            <Image src="/assets/svg/illustrationhover.svg" alt='' width={400} height={208} />
                        </figure>
                        <h4 className='text-2xl font-semibold mt-7 max-w-[300px]'>On-demand reporting (Coming soon)</h4>
                        <p className='mt-3 text-white/60'>No more waiting for your Banks to provide multiple reports. Get immediate access to your balance, vendors and reporting. Coming soon.</p>
                    </div>
                    <div className='insetshadow2 rounded-[20px] overflow-hidden py-6 border-[2px] border-[#2D2C3F] group'>
                        <figure className='flex gap-2 lg:h-[216px] -ml-6'>
                            <Image src="/assets/svg/1.svg" alt='' width={170} height={170} className='w-[30%] group-hover:-translate-x-2 transition-all duration-700' />
                            <Image src="/assets/svg/2.svg" alt='' width={170} height={170} className='w-[42%] group-hover:scale-110 transition-all duration-700' />
                            <Image src="/assets/svg/3.svg" alt='' width={170} height={170} className='w-[30%] group-hover:ml-2 transition-all duration-700' />
                        </figure>
                        <div className='px-6'>
                            <h4 className='text-2xl font-semibold mt-7 max-w-[300px]'>Seamless Integrations</h4>
                            <p className='mt-3 text-white/60'>MetCap is in the process of creating seamless integrations. With industry partners that will provide you an unparalleled experience of your day to day operations and production.</p>
                        </div>
                    </div>
                    <div className='insetshadow2 relative rounded-[20px] p-6 pt-14 group border-[2px] border-[#2D2C3F]'>
                        <section className='max-w-[320px] mx-auto h-[216px] relative'>
                            <div className='flex justify-center'>
                                <div className='bg-[#4d4e5f]/20 rounded-[16px] absolute top-0 w-[70%] group-hover:top-5 transition-all duration-1000'>
                                    <Image src="/assets/svg/vard.svg" alt='' width={400} height={208} className='' />
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <div className='bg-[#4d4e5f] rounded-[16px] absolute top-3 w-[80%] group-hover:top-5 transition-all duration-1000'>
                                    <Image src="/assets/svg/vard.svg" alt='' width={400} height={208} className='' />
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <div className='bg-[#4d4e5f] rounded-[16px] absolute top-6 w-[90%]'>
                                    <Image src="/assets/svg/vard.svg" alt='' width={400} height={208} className='' />
                                </div>
                            </div>
                            <div>
                                <div className='bg-[#1e23386b] backdrop-blur rounded-[20px] group-hover:top-5 transition-all duration-1000 absolute top-[38px]'>
                                    <Image src="/assets/svg/vard.svg" alt='' width={400} height={208} className='' />
                                </div>
                            </div>
                        </section>
                        <Image src="/assets/svg/circles.svg" alt='' width={300} height={100} className='absolute opacity-40 -z-[1] top-5 left-0 w-full'/>
                        <h4 className='text-2xl font-semibold mt-0 max-w-[300px]'>Personalized Support</h4>
                        <p className='mt-3 text-white/60'>We provide personalized support to tackle the most important working capital challenges. Without too much oversight or obscure approval requirements.</p>
                    </div>
                </Container>
            </div>
            <Image src="/assets/images/right_circle2.png" alt='' width={836} height={658} className='absolute -top-[580px]' style={{ transform: "scaleX(-1)" }} />
        </section>
    )
}

export default AllInOneService
