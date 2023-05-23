import React, { useState, useContext, useEffect } from 'react';
import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
import { PropTypes } from 'prop-types';
import { ThemeContext } from '../../context/github/theme/ThemeContextPro';
import { GithubContext } from '../../context/github/GithubContextPro';
import { a } from "../helper/fun"
const Navbar = ({ title }) => {
    const { isOpen, setIsopen, humber, setHumber, notAc, dispatch, state } = useContext(GithubContext)

    const { theme, nightModeHandler } = useContext(ThemeContext)

   

    useEffect(() => {
        window.onresize = () => {

            if (window.innerWidth < 1024) {
                setHumber(true)
            } if (window.innerWidth >= 1024) {
                setHumber(false)
            }

        }


        // farda use ref bezan length child nav ro begir


    }, [])
    
    // console.log(document.activeElement.clientWidth);
    // console.log(document.activeElement.offsetWidth);
    // ${window.innerWidth>1024 && "!flex"}



// position: fixed;
// background: rgba(0,0,0,.4);
// z-index: 200000;
// backdrop-filter: blur(4.5px) opacity(100%);





    return (
        <nav className=' navbar transition-all  bg-neutral text-neutral-content mb-16  '>


            <div className=" mx-12 w-full justify-between   flex  max-lg:mx-0  max-sm:!px-2  js-s">

                <div onClick={() => { setIsopen(!isOpen) }} className={`closemm mr-2 btn-sm  z-[1001] !text-base ${isOpen ? "open" : ""}`} id="nav-icon4">
                    <span className={`${theme ? " bg-[#3abff8]" : "bg-slate-100"}`}></span>
                    <span className={` ${theme ? " bg-[#3abff8]" : "bg-slate-100"}`}></span>
                    <span className={` ${theme ? " bg-[#3abff8]" : "bg-slate-100"}`}></span>
                </div>
                {/* <button onClick={() => { setIsopen(!isOpen) }} className=' closemm mr-2 btn-sm bg-white z-[1001] '>x</button>  */}
                <div className="flex-none px-2 mx-2">
                    <FaGithub className='inline pr-2 text-3xl' />
                    <Link className='text-lg font-bold align-middle' to="/">{title}</Link>

                </div>
                <div className={`felx-1 px-2 flex flex-row dark-response `}  >
                    <div className='flex items-center gap-3 ss '>
                        <Link to="/" className='btn btn-ghost  btn-sm rounded-btn text-[0.90rem]  '>Home</Link>
                        <Link to="/about" className='btn btn-ghost  btn-sm rounded-btn text-[0.90rem]  '>About</Link>
                        {/* onClick={nightModeHandler} */}
                    </div>

                    <div className='ml-2'>
                        <label className="swap swap-rotate btn btn-sm w-12 h-12 rounded-full">
                            <input onClick={nightModeHandler} type="checkbox" />
                            <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                            <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                        </label>

                    </div>

                </div>
            </div>

        </nav>
    );

};
Navbar.defaultProps = {
    title: "Github Finder"
}

Navbar.propTypes = {
    title: PropTypes.string
}
export default Navbar;