import React from 'react'
import {Link} from 'react-router-dom'
import weld from "../weld.png"

const Weld = () => {
  return (
    <>
      <div className="bg-black gap-4 grid lg:grid-cols-4 sm:grid-cols-1 justify-items-center">
        <div className="align-middle">
          <h2 className="flex items-center justify-center">In House Solutions</h2>
          <p className="flex items-center justify-center">A team of 2 talented engineeres working to build products from the future.</p>
          <div className="flex items-center justify-center">
            <btn className="btn">Watch the Video</btn>
            <btn className="btn">Learn More</btn>
          </div>
        </div>
        <img src={weld} className="object-contain lg:col-span-3 sm:col-span-1 transform -translate-y-12"></img>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="bg-black">
        <path fill="#000A22" fill-opacity="1"
          d="M0,128L60,144C120,160,240,192,360,176C480,160,600,96,720,69.3C840,43,960,53,1080,96C1200,139,1320,213,1380,250.7L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
        </path>
      </svg>

    </>

  )
}

export default Weld;

