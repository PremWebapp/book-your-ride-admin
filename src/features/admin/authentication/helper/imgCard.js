import React, { useEffect } from 'react';
import '../login.css'
import { Col } from "antd";
import styles from "../Login.module.css";
import adminLogin from '../../img/adminLogin.jpg'

function ImgCard() {
    return (
        <Col lg={12}>
            <img
                className={styles.Loginimage}
                // src="https://images.pexels.com/photos/2871757/pexels-photo-2871757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                // src="https://media-cdn.tripadvisor.com/media/photo-o/15/25/09/f9/tuna.jpg"
                src={adminLogin}
                alt="image"
            />

            {/* <div className={styles.logoBackground}>
        <img width={150} src={SushiyaLogo} alt="" />
    </div> */}
        </Col>

    )
}

export default ImgCard