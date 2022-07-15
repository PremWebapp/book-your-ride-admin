import React, { useEffect } from 'react';
import './login.css'
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Checkbox, Row,Button, Col, message } from "antd";
import styles from "./Login.module.css";
import SushiyaLogoDark from '../img/sushiya_logo_dark.png'
import { FcUnlock } from "react-icons/fc";
import { MdAttachEmail } from "react-icons/md";
import ImgCard from './helper/imgCard';

function ResetPasswod() {

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const onFinish = formsValue => {

    };
    return (
        <>
            <div className={styles.LoginContainer}>
                <Row justify="space-around" align="middle">
                  <ImgCard/>
                  
                    <Col lg={12}>
                       <div>
                          <div className={styles.logoBackground}>
                            <img width={150} src={SushiyaLogoDark} alt="" />
                                <hr />
                            </div>
                       <div className={styles.MainLoginForm}>
                            
                            <div className='d-flex mb-4 '>
                                <div className={`py-5 ${styles.loginLableBg}`}></div>
                                <h5 className='px-5 my-auto'>Reset Password</h5>
                            </div>

                            <Form
                                name="basic"
                                labelCol={{ span: 4 }}
                                wrapperCol={{ span: 18 }}
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                            // autoComplete="off"
                            >
                               

                                <Form.Item
                                className='mt-3 '
                                    label={<FcUnlock style={{paddingTop: 10, paddingBottom: 10}} size={60}/>}
                                    name="password"
                                    rules={[
                                        { required: true, message: "Please input your password!" },
                                    ]}
                                >
                                    <Input.Password
                                        // prefix={<LockOutlined className="site-form-item-icon" />}
                                        placeholder="Password"
                                    />
                                </Form.Item>

                                <Form.Item
                                className='mt-5 '
                                    label={<FcUnlock style={{paddingTop: 10, paddingBottom: 10}} size={60}/>}
                                    name="password"
                                    rules={[
                                        { required: true, message: "Please input your password!" },
                                    ]}
                                >
                                    <Input.Password
                                        // prefix={<LockOutlined className="site-form-item-icon" />}
                                        placeholder="Password"
                                    />
                                </Form.Item>


                                
                                <Form.Item className='d-flex justify-content-center mt-5' >
                                    <button className="button_default w-100 mt-5" htmlType="submit">
                                        Change
                                    </button>
                                </Form.Item>
                         
                            </Form>
                        </div>
                       </div>
                    </Col>
                </Row>
            </div>

        </>
    )
}

export default ResetPasswod
