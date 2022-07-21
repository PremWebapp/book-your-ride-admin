import axios from 'axios';
import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import { useForm } from 'react-hook-form';
import DemoImage from '../../img/demoImage.png'
import { Token, PathUrl } from '../../config/Config';
import { message, Table, Switch, Button, Modal, Space } from 'antd';
import { Link } from "react-router-dom";


function UserPage() {
    const [visible, setVisible] = useState(false);
    const [checked, setChecked] = useState({
        id:null,
        value:true
    });

    // Token 
    const token = Token().token;
    // const url = PathUrl().urlData.development;
    const url = 'http://52.91.235.134/api'

    // For Category Auto Generate Id 
    const [menu, setMenu] = useState(true);

    const [menuDataList, setMenuDataList] = useState('');

    const [categoryDataList, setCategoryDataList] = useState('');

    useEffect(() => {
        MenuList()
        CategoryList()
    }, [])


const handleChangeStatus = (event,id)=>{
    setVisible(!visible)

    console.log(event,"switch value")
    console.log(id,"switch id")

}

    // For Menu 
    const MenuList = () => {
        axios.get(`${url}/menu`, { headers: { Authorization: 'Bearer ' + token } })
            .then((response) => {

                setMenuDataList(response.data)
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const MenuColumn = [
        {
            title: 'User Id',
            dataIndex: 'generated_id',
            key: 'id',
            sorter: {
                compare: (a, b) => a.generated_id - b.generated_id,
                multiple: 3,
            }
        },

        {
            title: 'User Name',
            dataIndex: 'image',
            key: 'name',
            sorter: {
                compare: (a, b) => a.name - b.name,
                multiple: 3,
            },
            render: (text, record) => (
                <span>{(record.image ? <span> <img alt='Menu_image' src={record.image} style={{ width: "30px", height: "30px", borderRadius: "25px" }} /> </span> : <span> <img alt='demo_image' src={DemoImage} style={{ width: "100px" }} /></span>)}User Name</span>
            )
        },
        {
            title: 'Email',
            dataIndex: 'name',
            key: 'name',
            sorter: {
                compare: (a, b) => a.name - b.name,
                multiple: 3,
            }
        },
        {
            title: 'Number',
            dataIndex: 'name',
            key: 'name',
            sorter: {
                compare: (a, b) => a.name - b.name,
                multiple: 3,
            }
        },
        {
            title: 'Join Date',
            dataIndex: 'name',
            key: 'name',
            sorter: {
                compare: (a, b) => a.name - b.name,
                multiple: 3,
            }
        },
        {
            title: 'Total Booking',
            dataIndex: 'name',
            key: 'name',
            sorter: {
                compare: (a, b) => a.name - b.name,
                multiple: 3,
            }
        },
        {
            title: 'Gender',
            dataIndex: 'name',
            key: 'name',
            sorter: {
                compare: (a, b) => a.name - b.name,
                multiple: 3,
            }
        },
        {
            title: 'Action',
            dataIndex: 'image',
            key: 'name',
            sorter: {
                compare: (a, b) => a.name - b.name,
                multiple: 3,
            },
            render: (text, record) => (
                <span><Link to="/Admin/user-management">
                <i className="fa fa-eye p-2  rounded-circle bg-light " id={record.id} ></i>
                </Link>
                    <span className="p-2  rounded-circle ">
                        <Switch defaultChecked id={record.id} onChange={(event) => handleChangeStatus(event,record.id)} />
                    </span><i className="fa fa-trash p-2  rounded-circle  bg-light text-danger" id={record.id} onClick={MenuDelete}></i></span>
            )
        },
    ]
    const MenuView = (e) => {
        alert(e.target.id)
    }

    const MenuDelete = (e) => {
        axios.post(`${url}/MenuDelete`, { id: e.target.id }, { headers: { Authorization: 'Bearer ' + token } })
            .then((response) => {
                setMenuDataList(response.data)
                message.success('Menu Deleted Successfully..!!');
            })
            .catch((error) => {
                console.error(error);
            });
    }


    // For Category 

    const CategoryList = () => {
        axios.get(`${url}/category`, { headers: { Authorization: 'Bearer ' + token } })
            .then((response) => {

                setCategoryDataList(response.data)
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }


    const [updateGeneratedId, setUpdateGeneratedId] = useState("");
    const CategoryEdit = (e) => {

        $('#categoryModalBtn').trigger('click');
        axios.post(`${url}/Edit`, { id: e.target.id }, { headers: { Authorization: 'Bearer ' + token } })
            .then((response) => {

                setUpdateGeneratedId(response.data.generated_id);
                $("#updatedCategoryName").val(response.data.name);

                // setCategoryDataList(response.data)
            })
            .catch((error) => {
                console.error(error);
            });

    }


    return (
        <>
            <Modal
                // title="Are you sure, you want to
                // block this user?"
                style={{ borderRadius: '25px' , backgroundColor: '#FFFFFF' }}
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={400}
                okText="Yes"
                cancelText="No"
                
            >
             <div className="text-center">
             <h6 className="font-weight-bold px-5 pb-5 pt-2 ">Are you sure, you want to
                    block this user?</h6>
             </div>
            </Modal>
            {
                menu && (<div className="container-fluid ">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12 ">
                            <div className="row py-4 bg-white border rounded my-4">
                                <div className="col-md-4 col-lg-4 col-sm-12 ">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text " id="basic-addon1"><i className="fa fa-search"></i></span>
                                        <input type="text" class=" form-control" placeholder="Search By name" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-4 col-sm-12 ">
                                    <div>
                                        <select className="form-control">
                                            <option>Last 7 Days</option>
                                            <option>Last Month</option>
                                            <option>Last 6 Months</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-4 col-sm-12 ">
                                    <div>
                                        <select className="form-control">
                                            <option>Sort</option>
                                            <option>A - Z</option>
                                            <option>Z - A</option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <Table dataSource={menuDataList} columns={MenuColumn} pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['05', '10', '20', '30'] }} />
                        </div>
                    </div>
                </div>)
            }




        </>
    )
}

export default UserPage
