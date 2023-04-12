import React from "react";
import './Slider_bar.css';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, DatePicker } from 'antd';
import { useState } from 'react';
// import img của slider bar
import sb_img from '../Slider_bar/asset/img/sb_img.png';
import Header_content from "../Header/Header_content";
// import Button from "../Button";
import Logout from "../Logout/Logout";



const { Header, Sider, Content } = Layout;
//props. chi
const Slide_bar = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Sider theme='light' className='Slide_bar' trigger={null} collapsible collapsed={collapsed}>
                <p className='Slider_text'>Menu</p>

                <Menu className='sb_item'
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <img src={sb_img}></img>,
                            label: 'My profile',
                        },
                        {
                            key: '2',
                            icon: <img src={sb_img}></img>,
                            label: '.......',
                        },
                        {
                            key: '3',
                            icon: <img src={sb_img}></img>,
                            label: '.......',
                        },
                        {
                            key: '4',
                            icon: <img src={sb_img}></img>,
                            label: '.......',
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header

                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}

                    <Header_content></Header_content>
                    <Logout></Logout>

                </Header>

                <div style={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: '24px',
                    lineHeight: '32px'
                }}>
                    <h1>My Profile</h1>
                </div>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    {
                        children
                    }
                </Content>
            </Layout>
        </Layout>

    );

};
export default Slide_bar;