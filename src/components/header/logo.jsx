import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.svg" alt='Meata capital' width={166} height={24}/>
    </Link>
  )
}

export default Logo