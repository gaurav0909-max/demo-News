import Link from 'next/link'
import React from 'react'
import { BsFacebook, BsGithub, BsTwitter, BsYoutube } from 'react-icons/bs'

function Footer() {
  return (

    <div className='container mx-auto' style={{background:'#dfdfdf',borderRadius:'8px'}}>
    <div className='blog-logo py-6'>
      <p className='text-amber-600 text-center sm:text-2xl text-xl' >  ▼△▼△ 𝙼𝚎𝚍𝚒𝚊 𝚖𝚊𝚐𝚗𝚎𝚝 ▼△▼△</p>
    </div>
    <div className='menu-footer menu-container'>
      <ul className='uppercase flex flex-col sm:flex-row gap-4 items-center justify-center  p-2 text-amber-800' >
        <li>About us</li>
        <li>Contact</li>
        <li>Home page</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
    <div className='footer social-links flex flex-row justify-center gap-8 p-4'>
      <Link href='https://www.facebook.com/' >
        <BsFacebook className=' hover:text-amber-600'/>
      </Link>
      <Link href='https://twitter.com/'>
        <BsTwitter className=' hover:text-amber-600'/>
      </Link>
      <Link href='https://github.com/'>
        <BsGithub className=' hover:text-amber-600'/>
      </Link>
      <Link href='https://www.youtube.com/'>
        <BsYoutube className=' hover:text-amber-600'/>
      </Link>
    </div>
    <div className='footer-copyright text-center p-4'>
      <p>
        @2023 Media Megnet - All Rights Reserved.
      </p>
    </div>
    </div>
    
  )
}

export default Footer
