import React, { useState } from 'react'
import { Menu, Switch } from 'antd';
import { Link } from "react-router-dom";
import menuList from '@/routes'

const { SubMenu } = Menu;
interface AProps {
}

// 侧边栏
const Sidemenu: React.FC<AProps> = (props) => { 
    const [acurrent, setAcurrent] = useState('1')
    // 侧边栏主题
    const [atheme, setAtheme] = useState('dark' as any)

    // 点击
    const handleMenuItemClick = (item:any) => {
        const { path, params } = item

        if (!path) return

    }

    // 获取路由菜单
    const RenderMenu =(menuList:any[]) =>{ 
        return menuList.map((menuItem,index)=>{
            if(menuItem.childrens && menuItem.childrens.length>0){
                return (
                    <SubMenu
                        key={menuItem.id}
                        title={menuItem.title}
                        // icon ={menuItem.icon}
                        >
                        {RenderMenu(menuItem.children)}
                    </SubMenu>
                )
            }else{
                return (
                    <Menu.Item key={menuItem.id} 
                    // icon={menuItem.icon}
                    onClick={() => handleMenuItemClick(menuItem)}
                    > 
                        {menuItem.title}
                    </Menu.Item>  
                )
            }
        })
    }
    return (
        <Menu
            theme={atheme} 
            style={{ width: 200, height: '100%', overflow: 'scroll', paddingTop: 10 }}
            defaultOpenKeys={['Ahome']}
            selectedKeys={[acurrent]}
            mode="inline"
        > 
            {RenderMenu(menuList)}
        </Menu>
    )
}

export default Sidemenu