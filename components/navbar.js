import React, { useState } from 'react';
import { Menu, Drawer, Button, Typography } from 'antd';
import { MenuOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;
const { Title } = Typography;
const navbar = () => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    
    return ( 
        <nav className="navbar">
            <Title className="navbar-title" level={3}>NobleUI</Title>
            <Button
                    className="menu"
                    type="primary"
                    icon={<MenuOutlined />}
                    // onClick={() => setVisible(true)}
                    onClick={showDrawer}
            />
            <Drawer
                placement="left"
                // onClick={() => setVisible(false)}
                // onClose={() => setVisible (false)}
                onClose={onClose}
                visible={visible}
            >            
                <Menu
                style={{ width: 250 }}
                defaultSelectedKeys={['dashboard']}
                defaultOpenKeys={['sub_Email']}
                mode="inline"
                >
                <Menu.ItemGroup key="g1" title="MAIN">
                    <Menu.Item key="dashboard"><a href="/dashboard">Dashboard</a></Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="g2" title="WEB APPS">
                    <SubMenu key="sub_Email" title="Email">
                        <Menu.Item key="inbox">Inbox</Menu.Item>
                        <Menu.Item key="read">Read</Menu.Item>
                        <Menu.Item key="compose">Compose</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="chat">Chat</Menu.Item>
                    <Menu.Item key="calendar">Calendar</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="g3" title="COMPONENTS">
                    <SubMenu key="sub_UI_KIT" title="UI KIT">
                        <Menu.Item key="accordian">Accordion</Menu.Item>
                        <Menu.Item key="alerts">Alerts</Menu.Item>
                        <Menu.Item key="badges">Badges</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub_Advanced_UI" title="Advanced UI">
                        <Menu.Item key="cropper">Cropper</Menu.Item>
                        <Menu.Item key="owl_carousel">Owl carousel</Menu.Item>
                        <Menu.Item key="sweet_alert">Sweet Alert</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub_forms" title="Forms">
                        <Menu.Item key="basic_elements">Basic Elements</Menu.Item>
                        <Menu.Item key="advanced_elements"><a href='/forms/advanced'>Advanced Elements</a></Menu.Item>
                        <Menu.Item key="editors">Editors</Menu.Item>
                        <Menu.Item key="wizard">Wizard</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub_charts" title="Charts">
                        <Menu.Item key="apex">Apex</Menu.Item>
                        <Menu.Item key="chart_Js">ChartJs</Menu.Item>
                        <Menu.Item key="flot">Flot</Menu.Item>
                        <Menu.Item key="morris">Morris</Menu.Item>
                        <Menu.Item key="peity">Peity</Menu.Item>
                        <Menu.Item key="sparkline">Sparkline</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub_table" title="Table">
                        <Menu.Item key="basic_tables">Basic Tables</Menu.Item>
                        <Menu.Item key="data_table"><a href="/table/datatable">Data Table</a></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub_icons" title="Icons">
                        <Menu.Item key="feather_icons">Feather Icons</Menu.Item>
                        <Menu.Item key="flag_icons">Flag Icons</Menu.Item>
                        <Menu.Item key="mdi_icons">Mdi Icons</Menu.Item>
                    </SubMenu>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="g4" title="PAGES">
                    <SubMenu key="sub_special_pages" title="Special pages">
                        <Menu.Item key="blank_page">Blank page</Menu.Item>
                        <Menu.Item key="faq">Faq</Menu.Item>
                        <Menu.Item key="invoice">Invoice</Menu.Item>
                        <Menu.Item key="profile">Profile</Menu.Item>
                        <Menu.Item key="pricing">Pricing</Menu.Item>
                        <Menu.Item key="timeline">Timeline</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub_authentication" title="Authentication">
                        <Menu.Item key="login">Login</Menu.Item>
                        <Menu.Item key="register">Register</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub_error" title="Error">
                        <Menu.Item key="404">404</Menu.Item>
                        <Menu.Item key="500">500</Menu.Item>
                    </SubMenu>
                    </Menu.ItemGroup>
                <Menu.ItemGroup key="g5" title="DOCS">
                    <Menu.Item key="documentation">Documentation</Menu.Item>
                </Menu.ItemGroup>
                </Menu>
            </Drawer>
            <div>
                
                
            </div>
        </nav>
    );
}
 
export default navbar;
