import React from 'react'
import person from "../assets/person.png"
import bwhite from "../assets/b-white.png"
import { useNavigate } from "react-router-dom"
function Header() {
    const navigate = useNavigate()
  return (
    <div className='header-container'>

        <div className='logoandsearch'>
            <div className='logo-c' onClick={()=>{navigate("/home")}}>
                <img src={bwhite} alt="" id='logo'/>
            </div>
            <div className='search-c'>
                <div className='search'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"viewBox="0 0 256 256" className='searchicon'>
                        <g fill="#606770" fillRule="nonzero">
                            <g transform="scale(8.53333,8.53333)">
                                <path d="M13,3c-5.511,0-10,4.489-10,10c0,5.511,4.489,10,10,10c2.39651,0,4.59738-0.85101,6.32227-2.26367l5.9707,5.9707c0.25082,0.26124,0.62327,0.36648,0.97371,0.27512c0.35044-0.09136,0.62411-0.36503,0.71547-0.71547c0.09136-0.35044-0.01388-0.72289-0.27512-0.97371l-5.9707-5.9707c1.41266-1.72488,2.26367-3.92576,2.26367-6.32227c0-5.511-4.489-10-10-10zM13,5c4.43012,0,8,3.56988,8,8c0,4.43012-3.56988,8-8,8c-4.43012,0-8-3.56988-8-8c0-4.43012,3.56988-8,8-8z" />
                            </g>
                        </g>
                    </svg>
                <input type="text" name="" id="searchbox" placeholder='Search Blogbook' />
                </div>
            </div>
        </div>

        <div className='home'>
            <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="#0866ff"
                className="homeicon"
                style={{ '--color': 'var(--primary-button-background)' }} onClick={()=>{navigate("/home")}}>
                <path d="M9.464 1.286C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977zM10.5 13A1.5 1.5 0 0 0 9 14.5V21h6v-6.5a1.5 1.5 0 0 0-1.5-1.5h-3z" />
            </svg>
        </div>

        <div className='account-c' onClick={()=>{navigate("/profile")}}>
            <img src={person} alt="pfp" className='account'/>
        </div>

    </div>
  )
}

export default Header