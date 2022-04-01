import React from 'react'
import NavbarComp from '../organism/navbar'
import {SideBar} from '../atoms'
const Layout = ({children}) => {
  return (
  <>
  <NavbarComp/>
  <div className='flex h-screen'>
      <SideBar/>
      <div className='w-full px-2'>
        {children}
      </div>
    </div>
  </>
  )
}

export default Layout