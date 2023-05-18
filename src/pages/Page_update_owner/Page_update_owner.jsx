import React from "react";
import Update_Owner from "../../components/Update_owner/Update_Owner";
import Slide_bar from "../../components/Slider_bar";
import Footer_update_owner from "../../components/Footer_update_owner/Footer_update_owner";
import './Page_update_owner.css';
import {
    Button,
    Form,
} from 'antd';
import { useState } from "react";



function Page_update_owner() {
    const [targetKeys, setTargetKeys] = useState();

    const onFinish = (e) => {
        console.log(e);
        console.log(targetKeys);
    };

    return (
        <Slide_bar>
            <Form className="From_update_owner"
                onFinish={onFinish}
                layout="vertical"
            >
                <div className="Page_update_owner">
                    <Update_Owner></Update_Owner>
                    <Footer_update_owner
                        targetKeys={targetKeys}
                        setTargetKeys={setTargetKeys}
                    >

                    </Footer_update_owner>
                    <Form.Item >
                        <Button htmlType="submit" style={{ width: '15%', height: '48px', margin: '15px 30px', }}>Save</Button>
                        {/* <Button style={{ width: '15%', height: '48px', border: "2px solid #8767E1", paddingLeft: "8px" }}>Cancel</Button> */}
                    </Form.Item>
                </div>
            </Form>

        </Slide_bar>
    );
}
export default Page_update_owner;
