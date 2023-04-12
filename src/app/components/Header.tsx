import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='px-5 py-5 bg-green-500'>
        <nav className='flex gap-x-5'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/about/team">Team</Link>
            <Link href="/code/repos">Code</Link>
        </nav>
    </header>
  )
}

export default Header