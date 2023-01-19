import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div className='w-full'>
        <div className='w-full'>
            <Navbar styles={'bg-gray-900 text-white uppercase'} />
            
            <div className='w-full flex justify-center'>
                <div className='max-w-7xl w-full'>
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Layout