import React from 'react'
import { AiFillSetting } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav class="navbar navbar-expand-lg bg-white border-bottom ">
            <div class="container-fluid py-2">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="row d-flex collapse navbar-collapse" id="navbarSupportedContent">
                    <Link to='/Admin/notification' class="text-black  nav-link border-0 rounded-circle px-2 py-2 bg-light">
                        <IoMdNotifications size={20} style={{ color: 'black' }} />
                    </Link>
                    <Link to='/Admin/setting' class="text-black  nav-link border-0 rounded-circle px-2 py-2 mx-3 bg-light ">
                        <AiFillSetting size={20} style={{ color: 'black' }} />
                    </Link>

                    <div class="d-flex col justify-content-end ">
                        <Link to='/Admin/profile' class="nav-link nav-link border-0 rounded-circle px-2 py-2 bg-light ">
                            <RiAdminFill size={20} style={{ color: 'black' }} />
                        </Link>
                        <button class="text-black  nav-link border-0 rounded-circle px-2 py-2  mx-3 bg-light">
                            <FaArrowAltCircleRight size={20} /></button>

                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Header