import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='relative flex items-center justify-between h-16 text-white bg-black shadow-sm'>
      <Link to='/' className='pl-8'><strong>Basement Industries</strong></Link>
      <div className='px-4 cursor-pointer md:hidden'>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
      </div>
      <div className='hidden pr-8 md:block'>
        <Link className='p-4' to='/'>Home</Link>
        <Link className='p-4' to='/about'>About</Link>
        <Link className='p-4' to='/products'>Products</Link>
        <Link className='p-4' to='/contact'>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar;

