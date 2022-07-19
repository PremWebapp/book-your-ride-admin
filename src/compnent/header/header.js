import React from 'react'
import { AiFillSetting } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

function Header() {
    return (
        <nav class="navbar navbar-expand-lg bg-white ">
            <div class="container-fluid py-2">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="row d-flex collapse navbar-collapse" id="navbarSupportedContent">
                            <button class="text-black  nav-link border-0 rounded-circle px-2 py-2 "> <IoMdNotifications size={20} /></button>
                            <button class="text-black  nav-link border-0 rounded-circle px-2 py-2 mx-3 "> <AiFillSetting size={20} /></button>

                    <div class="d-flex col justify-content-end ">
                    <button class="text-black  nav-link border-0 rounded-circle px-2 py-2 "> <RiAdminFill size={20} /></button>

                        <button class="text-black  nav-link border-0 rounded-circle px-2 py-2  mx-3 "> <FaArrowAltCircleRight size={20} /></button>

                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Header