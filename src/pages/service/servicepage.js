import axios from 'axios';
import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import DemoImage from '../../img/demoImage.png'
import { message, Table, Switch } from 'antd';
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { Token } from '../../config/Config';
import { Link } from 'react-router-dom';

function ServicePage() {

    // Token 
    const token = Token().token;
    // const url = PathUrl().urlData.development;
    const url = 'http://52.91.235.134/api'

    // For Menu Auto Generate Id 

    // For Category Auto Generate Id 

    const [menu, setMenu] = useState(true);

    const [menuDataList, setMenuDataList] = useState('');

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
            title: 'Status',
            dataIndex: 'name',
            key: 'name',
            sorter: {
                compare: (a, b) => a.name - b.name,
                multiple: 3,
            },
            render: (text, record) => (
                <span><span className=""><TiTick size={30} defaultChecked style={{ color: 'green' }} id={record.id} onClick={MenuEdit} /></span><span className="mx-2   "><ImCross size={15} defaultChecked style={{ color: 'red' }} id={record.id} onClick={MenuEdit} /></span></span>
            )
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
                <span><Link to='/Admin/service-view'>
                    <i className="fa fa-eye p-2  rounded-circle " style={{ color: 'white', backgroundColor: 'black' }} id={record.id} ></i>
                    </Link> <span className="p-2  rounded-circle "><Switch defaultChecked style={{ color: 'white', backgroundColor: 'black' }} id={record.id}  /></span><i className="fa fa-trash p-2  rounded-circle " style={{ color: 'white', backgroundColor: 'black' }} id={record.id} onClick={MenuDelete}></i></span>
            )
        },
    ]

    const MenuEdit = (e) => {
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

    return (
        <>
            <div id="content-wrapper" className="d-flex flex-column">

                {/* <!-- Main Content --> */}
                <div id="content">
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
                </div>
            </div>
        </>
    )
}

export default ServicePage
