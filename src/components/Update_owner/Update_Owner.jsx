import { Col, Divider, Row } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import React from 'react';
import { Button, Checkbox, Form, Input, Space, Select } from 'antd';
import { DatePicker, TimePicker } from 'antd';
import './Update_Owner.css';
import { Switch, Transfer } from 'antd';
import { useState } from 'react';


const style = {
    background: '#0092ff',
    padding: '8px 0',
};
const { Option } = Select;

const Update_Owner = () => (
    <>
        <Row gutter={[30, 20]}>
            <Col className="gutter-row Owner_col" span={8}>
                <Form.Item
                    className='Owner_require'
                    label="Name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                    name="Name"
                >
                    <Input size="large" placeholder="Enter user name" />
                </Form.Item>
            </Col>
            <Col className="gutter-row" span={8}>
                <Form.Item className='Owner_require'
                    label="Email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                    name="Email"
                >
                    <Input size="large" placeholder="Enter user email" />
                </Form.Item>

            </Col>
            <Col className="gutter-row" span={8}>
                <Form.Item className='Owner_require'
                    label="Username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                    name="Username"
                >

                    <Input size="large" placeholder="Enter user username" />
                </Form.Item>

            </Col>

            <Col className="gutter-row Owner_lable" span={8}>
                <Form.Item className='Owner_require'
                    label="Password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    name="password"
                >

                    <Input.Password size="large" placeholder="Enter user password" />
                </Form.Item>


            </Col>
            <Col className="gutter-row" span={8}>
                <Form.Item className='Owner_require'
                    label="Phone Number"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                    name="Phone Number"
                >

                    <Input size="large" placeholder="Enter user phone number" />
                </Form.Item>
            </Col>
            <Col className="gutter-row" span={8}>

                <Form.Item className='Owner_require'
                    label="Gender"
                    rules={[{ required: true, message: 'Please input your gender!' }]}
                    name="Gender"
                >

                    <Select size="large" className='Owner_select'
                        placeholder="Select user gender"
                        allowClear
                    >
                        <Option value="Male">Male</Option>
                        <Option value="Female">Female</Option>
                        <Option value="Other">Other</Option>
                    </Select>
                </Form.Item>
            </Col>

            <Col className="gutter-row" span={8}>
                <Form.Item className='Owner_require'
                    label="DOB"
                    rules={[{ required: true, message: 'Please input your DOB!' }]}
                    name="DOB"
                >

                    <DatePicker className='Owner_DOB'></DatePicker>
                </Form.Item>
            </Col>
            <Col className="gutter-row" span={8}>
                <Form.Item className='Owner_require'
                    label="Role"
                    rules={[{ required: true, message: 'Please select your role!' }]}
                    name="Role"
                >

                    <Select size="large" className='Owner_select'
                        placeholder="Select a role"
                        allowClear
                    >
                        <Option value="Male">User</Option>
                        <Option value="Female">.....</Option>
                        <Option value="Other">.....</Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col className="gutter-row" span={8}>
                <Form.Item className='Owner_require'
                    label="Status"
                    rules={[{ required: true, message: 'Please select your Status!' }]}
                    name="Status"
                >

                    <Select size="large" className='Owner_select'
                        placeholder="Select a Status"
                        allowClear
                    >
                        <Option value="Male">Active</Option>
                        <Option value="Female">.....</Option>
                        <Option value="Other">.....</Option>
                    </Select>
                </Form.Item>
            </Col>
        </Row>



    </>
);
export default Update_Owner;

