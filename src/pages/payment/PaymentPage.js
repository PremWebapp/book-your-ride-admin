import React from 'react'
import { Tabs, Table, Tag, Space, Button } from 'antd'
import { Link } from 'react-router-dom';
import DemoImage from '../../img/demoImage.png'
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

function PaymentPage() {


    const MenuColumn = [
        {
            title: 'Payment Id',
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
            title: 'Service Provider',
            dataIndex: 'name',
            key: 'name',
            sorter: {
                compare: (a, b) => a.name - b.name,
                multiple: 3,
            }
        },
        {
            title: 'Address',
            dataIndex: 'name',
            key: 'name',
            sorter: {
                compare: (a, b) => a.name - b.name,
                multiple: 3,
            }
        },
        {
            title: 'Commission Amount',
            dataIndex: 'name',
            key: 'name',
            sorter: {
                compare: (a, b) => a.name - b.name,
                multiple: 3,
            }
        },
        {
            title: 'Payment Done',
            dataIndex: 'name',
            key: 'name',
            sorter: {
                compare: (a, b) => a.name - b.name,
                multiple: 3,
            },
            render: (text, record) => (
                <span><span className=""><TiTick size={30} defaultChecked style={{ color: 'green' }} id={record.id} /></span><span className="mx-2   "><ImCross size={15} defaultChecked style={{ color: 'red' }} id={record.id} /></span></span>
            )
        },

        {
            title: 'Payment Status',
            dataIndex: 'name',
            key: 'name',
            sorter: {
                compare: (a, b) => a.name - b.name,
                multiple: 3,
            },
            render: (text, record) => (
                <span><span className=""><TiTick size={30} defaultChecked style={{ color: 'green' }} id={record.id} /></span><span className="mx-2   "><ImCross size={15} defaultChecked style={{ color: 'red' }} id={record.id} /></span></span>
            )
        },

    ]
    return (
        <>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                <div className="card-container">
                    <div className="container-fluid ">
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
                                <Table dataSource={[]} columns={MenuColumn} pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['05', '10', '20', '30'] }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PaymentPage