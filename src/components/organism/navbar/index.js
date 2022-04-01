import React from 'react'

const NavbarComp = () => {
  return (
    <div className='flex justify-between px-10 py-2 bg-gray-100'>
      <div>
      <p className='text-lg text-red-500 font-bold'>ADMIN LTE</p>
      </div>
      <div className='flex gap-4'>
      <div className='text-gray-600'>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 cursor-pointer w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
</svg>
      </div>
      <div className='text-gray-600'>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 cursor-pointer w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
      </div>
      </div>
    </div>
  )
}

export default NavbarComp