import React from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import SushiyaLogoDark from '../img/sushiya_logo_dark.png'
import styles from './Sidebar.module.css'
import {  AiOutlineAreaChart ,AiFillSetting} from "react-icons/ai";
import { BsSpeedometer } from "react-icons/bs";
import { FaMotorcycle,FaGlobeAmericas,FaUsers,FaUnlock,FaCreditCard,FaBell,FaSubway,FaFileCode,FaStarHalfAlt ,FaUtensils,FaPercent,FaMoneyBillAlt,FaShoppingCart,FaArrowsAlt} from "react-icons/fa";
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
          position:"fixed"
        }}
      >
        <div className="logo text-center mb-5">
          <Link to="#" className="navbar-brand text-center">
            <img
              src={SushiyaLogoDark}
              alt=""
              width="100"
              height="84"
              className="d-inline-block align-text-top"
            />
          </Link>
        </div>

        <Menu mode="inline">
          <Menu.Item className={styles.paddingLeft} key="1" icon={<BsSpeedometer size={20}/>}>
            <Link  to="/Admin"> Dashboard </Link>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft}  key="2" icon={<FaGlobeAmericas  size={20}/>}>
            <Link to="/Admin/countryCity"> Country & City Management </Link>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="3" icon={<FaUsers size={20} />}>
            <Link to="/Admin/User"> User Management </Link>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="4" icon={<AiOutlineAreaChart size={20} />}>
            <NavLink to="/Admin/Restaurant">Restaurant Management</NavLink>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="5" icon={<FaMotorcycle size={20}/>}>
            <NavLink to="/Admin/Driver">Delivery Boy Management</NavLink>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="6" icon={<FaArrowsAlt size={20}/>}>
            <NavLink to="/Admin/Category">Category Boy Management</NavLink>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="7" icon={<FaShoppingCart size={20}/>}>
            <NavLink to="/Admin/Order">Orders Management</NavLink>
          </Menu.Item>
          <Menu.Item  className={styles.paddingLeft} key="8" icon={<FaMoneyBillAlt size={20}/>}>
            <NavLink to="/Admin/Payment"> Payment Management </NavLink>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="9" icon={<FaMoneyBillAlt size={20}/>}>
            <NavLink to="/charts.html">Commission Management</NavLink>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="10" icon={<FaPercent size={20}/>}>
            <NavLink to="/Admin/Promo">Promo Code Management</NavLink>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="11" icon={<FaUtensils size={20}/>}>
            <NavLink to="/Admin/Dish">Dish Management</NavLink>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="12" icon={<FaStarHalfAlt size={20}/>}>
            <NavLink to="/charts.html">Rating & Review Management</NavLink>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="13" icon={<FaFileCode size={20}/>}>
            <NavLink to="/charts.html">Report Management</NavLink>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="14" icon={<FaSubway size={20}/>}>
            <NavLink to="/charts.html">Fares Management</NavLink>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="15" icon={<FaCreditCard size={20}/>}>
            <NavLink to="/charts.html">Support Management</NavLink>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="16" icon={<FaBell size={20}/>}>
            <NavLink to="/charts.html">Notifications Management</NavLink>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="17" icon={<FaCreditCard size={20}/>}>
            <NavLink to="/charts.html">Subscription Management</NavLink>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="18" icon={<FaUnlock size={20}/>}>
            <NavLink to="/charts.html">Sub Admin</NavLink>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="19" icon={<AiFillSetting size={20}/>}>
            <NavLink to="/charts.html">Setting</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}

export default SideBar;
