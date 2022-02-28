import React from 'react'

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between">
        <div className="flex flex-row mx-1">
            <div className='mx-1'>exercism</div>
            <div className='mx-1'>Dashboard</div>
            <div className='mx-1'>Tracks</div>
            <div className='mx-1'>Mentoring</div>
            <div className='mx-1'>Contribute</div>
        </div>
        <div className="flex flex-row mx-1">
            <div className='mx-1'>Smile</div>
            <div className='mx-1'>Hex</div>
            <div className='mx-1'>Bell</div>
            <div className='mx-1'>Badge</div>
            <div className='mx-1'>Profile</div>
            <div className='mx-1'>Settings</div>
        </div>
    </div>
  )
}
