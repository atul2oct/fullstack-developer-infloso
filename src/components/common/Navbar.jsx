import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, matchPath, useLocation } from 'react-router-dom';
import logo from '../../assets/MelodyVerse logo.webp'
import {NavbarLinks} from '../../data/navbar-links';
import { AiOutlineMenu } from "react-icons/ai"
import ProfileDropDown from '../auth/ProfileDropDown';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const Navbar = () => {
    const {token} = useSelector( (state)=> state.auth);
    const {user} = useSelector( (state)=> state.profile);

    const location = useLocation();

    const [loading, setLoading] = useState(false);

    const [open,setOpen] = useState(false);

    const ref = useRef();

    useOnClickOutside(ref,()=>setOpen(false));

    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname)
    }
  return (
    <div className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${location.pathname !== "/" ? "bg-richblack-800" : ""} transition-all duration-200 text-richblack-25`}>
        <div className='flex w-11/12 justify-between items-center max-w-maxContent'>
            {/* logo */}
            <Link to='/'>
                <img src={logo} alt='logo' loading="lazy" className='aspect-square w-12 rounded-sm object-cover' />
            </Link>

            {/* nav link */}
            <nav className="hidden md:block">
                <ul className='flex gap-x-6 text-richblack-25'>
                    {
                        NavbarLinks.map((link,index) => (
                            <li key={index}>
                                <Link to={link?.path}>
                                    <p className={`${matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-25"}`}>
                                        {link.title}
                                    </p>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>

            {/* Login/ Signup/ Dashboard */}
            <div className='flex gap-x-4 items-center'>

                {
                    token === null && (
                        <Link to='/login'>
                            <button className='border border-richblack-700
                            bg-richblack-800 px-3 py-2 text-richblack-100
                            rounded-md'>
                                Log In
                            </button>
                        </Link>
                    )
                }

                {
                    token === null && (
                        <Link to='/signup'>
                        <button className='border border-richblack-700
                            bg-richblack-800 px-3 py-2 text-richblack-100
                            rounded-md'>
                                Sign Up
                            </button>
                        </Link>
                    )
                }

                {
                    token !== null && <ProfileDropDown/>
                }

            </div>

            {/* pending */}
            <button className="mr-4 md:hidden relative" onClick={()=>setOpen(prev => !prev)}>
                <AiOutlineMenu fontSize={24} fill="#AFB2BF" />

                {
                    open && (
                    <div className='absolute divide-y-[1px] divide-richblack-700 overflow-hidden rounded-sm border-y-[1px] border-richblack-700 bg-richblack-800 top-[118%] right-0 z-[1000]'
                        onClick={(e) => e.stopPropagation()} ref={ref}
                    >
                        <ul className='flex flex-col'>
                            {
                                NavbarLinks.map((link,index) => (
                                    <li key={index}>
                                        <Link to={link?.path} onClick={()=>setOpen(false)}>
                                            <p className={`${matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-25"} w-full py-3 px-8 text-sm hover:bg-richblack-700 hover:text-richblack-25`}>
                                                {link.title}
                                            </p>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    )
                }
            </button>
        </div>
    </div>
  )
}

export default Navbar