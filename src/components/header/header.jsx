import React from 'react'
import Logo from './logo'
import Container from '../ui/container'
import Link from 'next/link'
import Button from '../ui/button'

const Header = () => {
  return (
    <header className='py-4 z-50 relative'>
        <Container className="flex justify-between items-center">
            <Logo/>
            <nav className='rounded-[18px] hidden md:flex border p-1 items-center border-[#313041] text-white insetshadow'>
                <Link href="#solution"><div className='!py-[8px] px-[20px] border rounded-2xl border-transparent hover:border-[#313041] hover_insetshadow'>Borrowers</div></Link>
                <Link href="#service"><div className='!py-[8px] px-[20px] border rounded-2xl border-transparent hover:border-[#313041] hover_insetshadow'>Investors</div></Link>
                <Link href="#partners"><div className='!py-[8px] px-[20px] border rounded-2xl border-transparent hover:border-[#313041] hover_insetshadow'>Partners</div></Link>
            </nav>
            <Link href="/contact-us"><Button className="!bg-[#050419]">Join our list</Button></Link>
        </Container>
    </header>
  )
}

export default Header