import React, { useEffect } from 'react';
import './login.css'
import { useDispatch, useSelector } from 'react-redux';
import { loginFun } from '../../../redux/reducer/login.reducer';
import { useNavigate } from "react-router-dom";
import { Form, Input, Checkbox, Row, Col, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "./Login.module.css";
import SushiyaLogo from '../img/sushiya_loginlogo.png'
import SushiyaLogoDark from '../img/sushiya_logo_dark.png'

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

        // Send a POST request
        // axios.post(`${url}/Adminlogin`, login)
        //     .then((response) => {

        //         if (response.data.data.code === "401") {
        //             swal("Bad Call!", "Credentials does not match!")
        //         }

        //         if (response.data.data.code === "404") {
        //             swal("Bad Call!", "Login Failed Please Check Mobile Number..!!")
        //         }
        //         if (response.data.data.token) {
        //             localStorage.setItem('token', response.data.data.token);
        //             localStorage.setItem('user', JSON.stringify(response.data.data.user));
        //             localStorage.setItem('user_type', response.data.data.user.type);
        //             localStorage.setItem('user_id', response.data.data.user.id);
        //             localStorage.setItem('status', response.data.data.user.status);
        //             localStorage.setItem('first_login_flag', response.data.data.user.first_login_flag);
        //             const userData = localStorage.getItem('user_type');


        //             if (userData === "admin") {
        //                 history.push('/Admin');
        //             }

        //         }

        //     })
        //     .catch((error) => {
        //         console.error(error);
        //
        //     });

    };
    return (
        <>
            <div className={styles.LoginContainer}>
                <Row justify="space-around" align="middle">
                    <Col lg={12}>
                        <img
                            className={styles.Loginimage}
                            // src="https://images.pexels.com/photos/2871757/pexels-photo-2871757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            src="https://media-cdn.tripadvisor.com/media/photo-o/15/25/09/f9/tuna.jpg"
                            alt="image"
                        />

                        <div className={styles.logoBackground}>
                            <img width={150} src={SushiyaLogo} alt="" />
                        </div>
                    </Col>
                    
                    <Col lg={12}>
                        <div className={styles.MainLoginForm}>
                            <div className="text-center ">
                                {/* <h1>Sushiya</h1> */}
                            <img width={150} src={SushiyaLogoDark} alt="" />

                                <hr />
                            </div>
                            <Form
                                name="basic"
                                labelCol={{ span: 6 }}
                                wrapperCol={{ span: 15 }}
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                            // autoComplete="off"
                            >
                                <Form.Item label="Username" name="mobile"
                                    rules={[
                                        { required: true, message: "Please input your username!" },
                                    ]}>
                                    <Input
                                        prefix={<UserOutlined className="site-form-item-icon" />}
                                        placeholder="username"
                                        type='text'
                                    />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[
                                        { required: true, message: "Please input your password!" },
                                    ]}
                                >
                                    <Input.Password
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        placeholder="Password"
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    wrapperCol={{ offset: 6, span: 16 }}
                                >
                                    <Checkbox
                                    
                                        rules={[
                                            { required: true, message: "Please input your password!" },
                                        ]}
                                    >
                                        Remember me
                                    </Checkbox>
                                </Form.Item>

                                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                    <button className="button_default" htmlType="submit">
                                        Sign In
                                    </button>
                                </Form.Item>
                                {/* <span>Not a member?<Link to="/restaurantDetails" >register now!</Link></span>  */}
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
            {/* <div className='body1'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-2"></div>
                        <div className="col-lg-6 col-md-8 login-box">
                            <div className="col-lg-12 login-key">
                                <i className="fa fa-key" aria-hidden="true"></i>
                            </div>
                            <div className="col-lg-12 login-title">
                                ADMIN PANEL
                            </div>

                            <div className="col-lg-12 login-form">
                                <div className="col-lg-12 login-form">
                                    <form onSubmit={onSubmit}>
                                        <div className="form-group">
                                            <label className="form-control-label">MOBILE NUMBER</label>
                                            <input type="text" required className="form-control" name="mobile" id='adminMobile' onChange={loginChange} />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-control-label">PASSWORD</label>
                                            <input type="password" required className="form-control" name="password" id='adminPassword' onChange={loginChange} />
                                        </div>

                                        <div className="col-lg-12 loginbttm">
                                            <div className="col-lg-6 login-btm login-text">
                                            </div>
                                            <div className="col-lg-6 login-btm login-button">
                                                <button type="submit" className="btn btn-outline-primary">LOGIN</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2"></div>
                        </div>
                    </div>

                </div>

            </div> */}

        </>
    )
}

export default Login
