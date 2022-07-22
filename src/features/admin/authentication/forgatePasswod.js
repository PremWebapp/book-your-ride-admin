import './login.css'
import { Form, Input, Row, Col } from "antd";
import styles from "./Login.module.css";
import SushiyaLogoDark from '../img/sushiya_logo_dark.png'
import { MdAttachEmail } from "react-icons/md";
import ImgCard from './helper/imgCard';

function ForgatePasswod() {
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const onFinish = formsValue => {

    };
    return (
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
                                <h5 className='px-5 my-auto text-danger'>Forgate Password</h5>
                            </div>

                            <div className='px-4'>
                                <p className='px-5 pb-5 text-danger'>Enter your Email-ID here:</p>
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
                                <Form.Item label={<MdAttachEmail color='red' style={{ paddingTop: 10, paddingBottom: 10 }} size={60} />}
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


                                <Form.Item className='d-flex justify-content-center mt-5' >
                                    <button className="button_default w-100 mt-5" htmlType="submit">
                                        Send Link
                                    </button>
                                </Form.Item>

                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ForgatePasswod