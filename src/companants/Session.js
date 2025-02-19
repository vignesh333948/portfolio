import React from 'react'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar1 from './Navbar1';
const Session = () => {
  return (
    <>
     <div className='d-none d-sm-block'>
     <Header />
     </div>
     <div className='d-block d-sm-none'>
     <Navbar1 />
     </div>
    </>
  )
}

export default Session;