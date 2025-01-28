import React from 'react'
import Container from '../ui/container'
import WButton from '../ui/button-white'
import GradientText from '../ui/gradient-text'
import Image from 'next/image'
import Button from '../ui/button'

const Partner = () => {
    return (
        <>
            <section id="partners" className='text-white md:py-20 lg:pt-40 relative mt-14 md:mt-0'>
                <Container className="">
                    <div className='flex justify-center'>
                        <WButton className="">
                            <Image src="/assets/svg/partner.svg" alt="" width={20} height={20} />
                            Partners
                        </WButton>
                    </div>
                    <GradientText className="my-6 text-center max-w-[660px] mx-auto" small>
                        Think of us as high octane <span>gasoline for your sales and production</span> engine 🚀
                    </GradientText>
                    <p className='lg:text-xl text-white/70 mt-3 max-w-[660px] mx-auto text-center font-light'>Built for contractors just like you. The working capital solution that you have been waiting.</p>

                    <section className='z-[50] rounded-[16px] border-[2px] md:flex md:justify-end relative mt-20 overflow-hidden border-[#363646] bg-right bg-no-repeat' >
                        <div className='absolute sm:left-10 sm:top-10 md:left-10 p-4 md:top-1/2 md:-translate-y-1/2'>
                            <GradientText small className="text-xl sm:text-4xl md:!text-[36px]">Automated Working Capital</GradientText>
                            <p className='lg:text-xl max-w-[444px] text-white/70 mt-3 mb-5 font-light'>Seamless on demand working capital at the touch of a button.</p>
                            <Button>Learn more</Button>
                        </div>
                        <Image src="/assets/svg/automation.svg" alt="" className='hidden md:block object-contain' width={1037} height={428} />
                        <Image src="/assets/svg/mobile-automation.svg" alt="" className='object-contain md:hidden' width={1037} height={428} />
                    </section>
                </Container>
                <Image src="/assets/svg/right_eclipses.svg" alt='' width={836} height={658} className='absolute top-[-600px] right-0' />
                <Container>
                    <section className='grid md:grid-cols-2 gap-3 md:gap-8'>
                        <div className='px-4 md:px-10 rounded-[16px] flex flex-col justify-between border-[2px] bg3 relative mt-3 md:mt-8 overflow-hidden border-[#363646]' >
                            <div className='min-h-[287px] mt-4 md:mt-10 mb-8'>
                                <GradientText small className="text-xl sm:text-4xl md:!text-[36px]">Financial Institutions</GradientText>
                                <h5 className='font-medium text-xl my-2'>MetaCap’s institutional and accredited investors offering</h5>
                                <p className='lg:text-xl max-w-[444px] text-white/70 mt-3 mb-5 font-light'>Get access to an untaped private credit market. Offering higher yields in shorter term investments that are largely uncorrelated to public markets. That’s why institutional investors are increasingly allocations to this $3 trillion market sector.</p>
                                <Button>Learn more</Button>
                            </div>
                            <div className='relative'>
                                <Image src="/assets/svg/finantional-bg.svg" alt="" className='hidden md:block object-contain' width={1037} height={428} />
                                <div className='absolute bottom-28 z-[10] right-0 slideInDown'>
                                    <figure className='bg-[#06041B]/5 backdrop-blur rounded-[14px]'>
                                        <Image src="/assets/svg/finantional-list-1.svg" alt="" className='hidden md:block object-contain' width={257} height={140} />
                                    </figure>
                                    <figure className='mt-2 bg-[#06041B]/5 backdrop-blur rounded-[14px]'>
                                        <Image src="/assets/svg/finantional-list-2.svg" alt="" className='hidden md:block object-contain' width={257} height={140} />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className='px-4 md:px-10 rounded-[16px] flex flex-col justify-between border-[2px] bg3 relative md:mt-8 overflow-hidden border-[#363646]' >
                            <div className='min-h-[287px] mt-4 md:mt-10'>
                                <GradientText small className="text-xl sm:text-4xl md:!text-[36px]">Attractive Options for Those Seeking Consistent Returns </GradientText>
                                <p className='lg:text-xl max-w-[444px] text-white/70 mt-3 mb-5 font-light'>At MetaCap, we provide our investors with a stable and recurring income steam.</p>
                                <Button>Learn more</Button>
                            </div>
                            <Image src="/assets/svg/partner-3.svg" alt="" className='hidden md:block object-contain' width={1037} height={428} />
                        </div>
                    </section>
                </Container>
            </section>
            <section className='text-white'>
                <div className="grid grid-cols-1 px-4 md:px-6 lg:px-10 items-center gap-10 md:grid-cols-2">
                    <div>
                        <WButton className="">
                            <Image src="/assets/svg/partner.svg" alt="" width={20} height={20} />
                            Partners
                        </WButton>
                        <GradientText className="my-6" small>
                            <span>Seamless Integration</span> for Unmatched Project Efficiency
                        </GradientText>
                        <p className='lg:text-xl text-white/70 font-light'>At MetaCap, we’re dedicated to making the contractor experience as seamless as possible. That’s why we’re partnering with some of the most prominent material suppliers in the industry. These strategic agreements will allow us to offer contractors direct access to high-quality materials through our platform, ensuring that every project runs smoothly from start to finish. With MetaCap, you not only get flexible financing, but you also gain a streamlined supply chain, all in one place. </p>
                    </div>
                    <div className='relative'>
                        <Image src="/assets/svg/solution-2.svg" alt='' width={800} height={500}/>
                        <Image src="/assets/images/bgforsolution-2.png" className='absolute -top-20 -right-10' alt='' width={800} height={900}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Partner