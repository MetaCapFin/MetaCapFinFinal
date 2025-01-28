import React from 'react'
import Container from '../ui/container'
import Link from 'next/link'
import Logo from '../header/logo'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='mt-20 relative'>
      <Container>
        <section className='flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center pb-6 border-gray-700 border-b'>
          <Logo/>
          <ul className='flex items-center gap-8 text-white'>
            <li><Link href="">Borrowers</Link></li>
            <li><Link href="">Investors</Link></li>
            <li><Link href="">Partners</Link></li>
          </ul>
        </section>
        <section className='flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center py-5'>
          <p className='text-white/50 font-light'>Copyright © 2024 Meta Capital</p>
          <ul className='flex items-center gap-8 text-white/50 font-sans'>
            <li><Link href="">Privacy Policy</Link></li>
            <li><Link href="">Terms of Service</Link></li>
          </ul>
        </section>
      </Container>
      <Image src="/assets/images/circles_glow_footer.png" alt='' className='bottom-0 w-full z-[-1] absolute right-0 left-0' width={836} height={658} />
    </footer>
  )
}

export default Footer