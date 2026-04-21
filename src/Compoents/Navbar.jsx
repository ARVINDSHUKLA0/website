"use client";

import Link from 'next/link'
import '../CompoentsStyle/Navbar.css'
import React, { useState } from 'react'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    return (
        <>
            <div className='navbar-main px-md-2 px-0 mt-4'>
                <div className='container-fluid custom-container'>
                    <div className='d-flex justify-content-between'>
                        <div className='custom-border'>
                            <div className=' d-flex justify-content-between align-items-center w-100'>
                                <div>
                                    <img src="/assets/img/logoWhite.png" width={100} alt="" />
                                </div>
                                <div className={`ms-5 side-menu ${open ? "active" : ""}`}>
                                    <div className='d-xl-none d-block text-end mb-2'>
                                        <i onClick={() => setOpen(!open)} className="fa-solid fa-xmark text-white fs-18"></i>
                                    </div>
                                    <ul className='m-0 p-0 custom-flex-dilapy gap-5'>
                                        <li className='list-style-none my-2'>
                                            <Link className='text-decoraion-none fs-16 text-capitalize white-custom-color' href="#">home</Link>
                                        </li>
                                        <li className='list-style-none my-2'>
                                            <Link className='text-decoraion-none text-capitalize fs-16 white-custom-color' href="#">about us</Link>
                                        </li>
                                        {/* <li className='list-style-none my-2'>
                                            <Link className='text-decoraion-none text-capitalize fs-16 white-custom-color' href="#">service</Link>

                                        </li> */}
                                        <li className={`list-style-none my-2 dropdown ${dropdownOpen ? "active" : ""}`}>
                                            <Link
                                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                                className='text-decoraion-none text-capitalize fs-16 white-custom-color'
                                                href="#"
                                            >
                                                service
                                                <i className={`fa-solid fa-angle-down dropdown-icon ms-2 ${dropdownOpen ? "rotate" : ""}`}></i>
                                            </Link>

                                            <ul className='dropdown-menu-custom m-0 p-0'>
                                                <li>
                                                    <Link href="#" className='dropdown-item'>Branding</Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className='dropdown-item'>Product Design & Development</Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className='dropdown-item'>Packaging Design</Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className='dropdown-item'>Strategy</Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className='dropdown-item'>Marketing & Content</Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className='dropdown-item'>Pet Casting</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='list-style-none my-2'>
                                            <Link className='text-decoraion-none text-capitalize fs-16 white-custom-color' href="#">blog</Link>
                                        </li>
                                   
                                        <li className='list-style-none my-2'>
                                            <Link className='text-decoraion-none text-capitalize fs-16 white-custom-color' href="#">conact</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='diplsy-none-icon'>
                                    <Link onClick={() => setOpen(!open)} href="#"><i className="fa-solid fa-bars text-white fs-18"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className='custom-disply-block'>
                            <div className='d-flex justify-content-between '>
                                <div className='me-5 m-0'>
                                    <hr className='white-custom-color m-0 pb-2' />
                                    <p className='m-0 white-custom-color fs-20 custom-line-height'>An award</p>
                                    <p className='m-0 white-custom-color fs-20 custom-line-height'>wining digital agency</p>
                                    <p className='m-0 white-custom-color fs-20 custom-line-height'>since-2017</p>
                                </div>
                                <div>
                                    <hr className='white-custom-color m-0 pb-2' />
                                    <p className='m-0 white-custom-color fs-20 custom-line-height'>Adon</p>
                                    <p className='m-0 white-custom-color fs-20 custom-line-height'>1772 Street Charleston,</p>
                                    <p className='m-0 white-custom-color fs-20 custom-line-height'>New York</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar