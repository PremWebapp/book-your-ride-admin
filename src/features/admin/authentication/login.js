import React, { useEffect } from 'react';
import './login.css'
import { useDispatch, useSelector } from 'react-redux';
import { loginFun } from '../../../redux/reducer/login.reducer';
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Checkbox, Row,Button, Col, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "./Login.module.css";
import SushiyaLogo from '../img/sushiya_loginlogo.png'
import SushiyaLogoDark from '../img/sushiya_logo_dark.png'
import adminLogin from '../img/adminLogin.jpg' 
import { FcUnlock } from "react-icons/fc";
import { MdAttachEmail } from "react-icons/md";
import ImgCard from './helper/imgCard';


function Login() {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const { isLoading, isFailled, error, user } = useSelector(state => state.user)

    // if token exist
    useEffect(() => {
        if (user.type === "admin") {
            navigate("/Admin");
        }
    }, [])
    useEffect(() => {
        if (isFailled == true) {
            const key = 'updatable';
            message.loading({
                content: 'Loading...',
                key,
            });
            setTimeout(() => {
                message.warning({
                    content: error,
                    key,
                    duration: 2,
                });
            }, 1000);
        }
        if (user.type === "admin") {
            navigate("/Admin");
        }
    }, [user, isFailled])
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const onFinish = formsValue => {
        dispatch(loginFun(formsValue))

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
                                <h5 className='px-5 my-auto'>Sign In</h5>

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
                                <Form.Item label={<MdAttachEmail color='rgb(225 134 20)'  style={{paddingTop: 10, paddingBottom: 10}} size={60}/>}
                                name="mobile"
                                    rules={[
                                        { required: true, message: "Please input your username!" },
                                    ]}>
                                    <Input
                                        // prefix={<UserOutlined className="site-form-item-icon" />}
                                        placeholder="Email-ID"
                                        type='text'
                                    />
                                </Form.Item>

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
                                    name="remember"
                                    valuePropName="checked"
                                    wrapperCol={{ offset: 1, span: 16 }}
                                >
                                    <Checkbox
                                    className='mt-4'
                                        rules={[
                                            { required: true, message: "Please input your password!" },
                                        ]}
                                    >
                                        Remember me
                                    </Checkbox>
                                </Form.Item>

                                <Form.Item className='d-flex justify-content-center' >
                                    <button className="button_default w-100 " htmlType="submit">
                                        Sign In
                                    </button>
                                </Form.Item>
                             <div className="d-flex justify-content-center ">
                             <Link to='/forgot-password' className='m-auto text-danger font-weight-bold '>Forgate Password?</Link> 
                             </div>
                            </Form>
                        </div>
                       </div>
                    </Col>
                </Row>
            </div>

        </>
    )
}

export default Login
