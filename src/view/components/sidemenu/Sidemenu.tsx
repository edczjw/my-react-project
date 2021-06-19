import React, { useState } from 'react'
import { Menu, Switch } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
interface AProps {} 

// 侧边栏
const Sidemenu:React.FC<AProps>=(props)=>{
    const [acurrent,setAcurrent]=useState('1')
    // 侧边栏主题
    const [atheme,setAtheme] = useState('dark' as any)

    // 点击
    const handleClick=()=>{

    }
    return(
        <div>
            <Menu
                theme={atheme}
                onClick={handleClick}
                style={{ width: 256,height: '100vh' }}
                defaultOpenKeys={['sub1']}
                selectedKeys={[acurrent]}
                mode="inline"
                >
                <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    )
}

export default Sidemenu