import React from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
// import SushiyaLogoDark from '../../img/sushiya_logo_dark.png'
import styles from './Sidebar.module.css'
import { AiOutlineAreaChart, AiFillSetting, AiFillCar } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
import { FaUsers,FaBell, FaFileCode, FaStarHalfAlt,FaMoneyBillAlt, FaShoppingCart } from "react-icons/fa";
// 

import { Link } from "react-router-dom";
const { Sider } = Layout;

function SideBar() {
  return (
    <>
      <Sider
        width={290}
        theme="light"
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed"
        }}
      >
        <div className="logo mt-3 mb-4 " style={{    borderBottom: '2px solid #000'}}>
          <NavLink className="sidebar-brand d-flex align-items-left justify-content-left" to="/Admin">

            <div className="sidebar-brand-text mx-5  "><h6 className="font-weight-bold">Admin's Name </h6>
            </div>
          </NavLink>
        </div>

        <Menu mode="inline">
          <Menu.Item className={styles.paddingLeft} key="1" icon={<FiMonitor size={20} />}>
            <Link to="/Admin"> Dashboard </Link>
          </Menu.Item>

          <Menu.Item className={styles.paddingLeft} key="2" icon={<FaUsers size={20} />}>
            <Link to="/Admin/User"> User Management </Link>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="3" icon={<AiOutlineAreaChart size={20} />}>
            <NavLink to="/Admin/service">Service Provider</NavLink>
          </Menu.Item>
          {/* <Menu.Item className={styles.paddingLeft} key="4" icon={<FaMotorcycle size={20}/>}>
            <NavLink to="/Admin/Driver"></NavLink>
          </Menu.Item> */}
          <Menu.Item className={styles.paddingLeft} key="4" icon={<AiFillCar size={20} />}>
            <NavLink to="/Admin/vahicle">Vehicle Management</NavLink>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="5" icon={<FaShoppingCart size={20} />}>
            <NavLink to="/Admin/booking">Booking Management</NavLink>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="6" icon={<FaMoneyBillAlt size={20} />}>
            <NavLink to="/Admin/Payment"> Payment Management </NavLink>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="7" icon={<FaStarHalfAlt size={20} />}>
            <NavLink to="/Admin/rating">Rating & Review Management</NavLink>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="8" icon={<FaFileCode size={20} />}>
            <NavLink to="/Admin/report">Report Management</NavLink>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="9" icon={<FaBell size={20} />}>
            <NavLink to="/Admin/notification">Notifications Management</NavLink>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="10" icon={<AiFillSetting size={20} />}>
            <NavLink to="/Admin/setting">Setting</NavLink>
          </Menu.Item>
          {/* <Menu.Item className={styles.paddingLeft}  key="2" icon={<FaGlobeAmericas  size={20}/>}>
            <Link to="/Admin/countryCity"> Country & City Management </Link>
          </Menu.Item> */}
          {/* <Menu.Item className={styles.paddingLeft} key="9" icon={<FaMoneyBillAlt size={20}/>}>
            <NavLink to="/charts.html">Commission Management</NavLink>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="10" icon={<FaPercent size={20}/>}>
            <NavLink to="/Admin/Promo">Promo Code Management</NavLink>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="11" icon={<FaUtensils size={20}/>}>
            <NavLink to="/Admin/Dish">Dish Management</NavLink>
          </Menu.Item>
     
       
          <Menu.Item className={styles.paddingLeft} key="14" icon={<FaSubway size={20}/>}>
            <NavLink to="/charts.html">Fares Management</NavLink>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="15" icon={<FaCreditCard size={20}/>}>
            <NavLink to="/charts.html">Support Management</NavLink>
          </Menu.Item>

          <Menu.Item className={styles.paddingLeft} key="17" icon={<FaCreditCard size={20}/>}>
            <NavLink to="/charts.html">Subscription Management</NavLink>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="18" icon={<FaUnlock size={20}/>}>
            <NavLink to="/charts.html">Sub Admin</NavLink>
          </Menu.Item> */}

        </Menu>
      </Sider>
    </>
  );
}

export default SideBar;
