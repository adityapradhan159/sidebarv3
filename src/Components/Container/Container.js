import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import "./container.css"

const Container = () => {
  return (
    <div className='Container'>
        <Navbar/>
        <Sidebar/>
    </div>
  )
}

export default Container