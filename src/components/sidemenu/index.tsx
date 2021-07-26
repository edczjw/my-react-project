import React, { useState } from 'react'
import { Menu,Layout } from 'antd';
import { useHistory } from "react-router-dom";
import menuList from '@/routes'
import style from './style.module.scss'

const { SubMenu } = Menu;
const { Sider } = Layout;
interface AProps {
}

// 侧边栏
const Sidemenu: React.FC<AProps> = (props) => { 
    const History = useHistory(); 
    // 侧边栏主题
    const [atheme, setAtheme] = useState('dark' as any)
    const [collapsed, setCollapsed] = useState<boolean>(false)
    // 点击
    const handleMenuItemClick = (item:any) => {
        const { path, params } = item 
        if (!path) return
        History.push(path)
    }

    // 折叠
    const onCollapse = (coll: boolean) => { 
        setCollapsed(!coll)
    };

    // 获取路由菜单
    const RenderMenu =(menuList:any[]) =>{ 
        return menuList.map((menuItem,index)=>{
            if(menuItem.routes && menuItem.routes.length>0){
                return (
                    <SubMenu
                        icon={<menuItem.icon/>}
                        key={menuItem.id}
                        title={menuItem.title} 
                        >
                        {RenderMenu(menuItem.routes)}
                    </SubMenu>
                )
            }else{
                return (
                    <Menu.Item 
                    icon={<menuItem.icon/>}
                    key={menuItem.id}  
                    onClick={() => handleMenuItemClick(menuItem)}
                    >  
                        {menuItem.title} 
                    </Menu.Item>  
                )
            }
        })
    }
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={()=>onCollapse(collapsed)}>
            <div className={style.Aheader_logo}>{!collapsed? '空间导航':''}</div>
        <Menu
            theme={atheme}   
            mode="inline"
        > 
            {RenderMenu(menuList)}
        </Menu>
        </Sider>
    )
}

export default Sidemenu