import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({styles}) => {
  return (
    <div className={`${styles} p-4 flex justify-center`}>
        <div className='max-w-7xl flex justify-between w-full'>
            <Link to={'/'}>Home</Link>
            <Link to={'/rockets'}>Rockets</Link>
            <Link to={'/'}>Spacex</Link>
            <div>about</div>
            <div>contact</div>
        </div>
    </div>
  )
}

export default Navbar;