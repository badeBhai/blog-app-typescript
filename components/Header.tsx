import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='flex justify-between p-5 max-w-7xl mx-auto'>
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 h-20 object-contain cursor-pointer ml-[-20px]"
            src="https://cdn4.iconfinder.com/data/icons/social-98/22/32_-_blog_logo_medium_icon-512.png"
            alt="Medium Logo Picture"
          />
        </Link>

        <div className="hidden md:inline-flex items-center space-x-5 ">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="text-white bg-green-600 px-4 py-1 rounded-full ">
            Follow
          </h3>
        </div>
      </div>

      <div className='flex items-center space-x-5 text-green-600'>
        <h3>Sign In</h3>
        <h3 className='border px-4 py-1 rounded-full border-green-600'>Get Started</h3>
        <h3></h3>
      </div>
    </header>
  );
}

export default Header