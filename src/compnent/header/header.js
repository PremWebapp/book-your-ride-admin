// import React from 'react'
// import { AiFillSetting } from "react-icons/ai";
// import { IoMdNotifications } from "react-icons/io";
// import { FaArrowAltCircleRight } from "react-icons/fa";
// import { RiAdminFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import notificatinGif from '../../img/notification.gif'
import settingGif from '../../img/setting.gif'
import logoutGif from '../../img/logout.png'
import userGif from '../../img/user2.gif'
import style from './header.module.css'

function Header() {
    return (
        <nav class="navbar navbar-expand-lg bg-white border-bottom ">
            <div class="container-fluid ">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="row d-flex collapse navbar-collapse" id="navbarSupportedContent">
                    <Link to='/Admin/notification' class="text-black  nav-link border-0 rounded-circle p-2 bg-light">
                        
                        <img className={style.headerIcon} src={notificatinGif} />
                        {/* <IoMdNotifications size={20} style={{ color: 'black' }} /> */}
                    </Link>
                    <Link to='/Admin/setting' class="text-black  nav-link border-0 rounded-circle p-2 ml-3 bg-light ">
                    <img className={style.headerIcon} src={settingGif} />

                        {/* <AiFillSetting size={20} style={{ color: 'black' }} /> */}
                    </Link>

                    <div class="d-flex col justify-content-end ">
                        <Link to='/Admin/profile' class="nav-link nav-link border-0 rounded-circle p-2 bg-light ">
                            {/* <RiAdminFill size={20} style={{ color: 'black' }} /> */}
                    <img className={style.headerIcon} src={userGif} />

                        </Link>
                        <button class="text-black  nav-link border-0 rounded-circle px-2 py-2  mx-3 bg-light">
                    <img className={style.headerIcon} src={logoutGif} />

                            {/* <FaArrowAltCircleRight size={20} /> */}
                            </button>

                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Header