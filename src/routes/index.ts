import Ahome from '@/view/Home';
import Mypage from '@/view/Mypage';
import Login from '@/view/Login';

import {
    YahooOutlined, AlibabaOutlined, YuqueOutlined, LaptopOutlined, UngroupOutlined, UsergroupAddOutlined, PropertySafetyOutlined, IdcardOutlined, ReadOutlined, FunctionOutlined, ToolOutlined, MailOutlined, AppstoreOutlined, SettingOutlined
} from '@ant-design/icons';

// 路由配置
const routes = [
    {
        id:'Ahome',
        path: '/',
        title: '主页',
        component: Ahome,
        icon: IdcardOutlined,
        childrens:{}
    },{
        id:'Mypage',
        path: '/Mypage',
        title: '我的',
        component: ()=>{import('@/view/Mypage')},
        icon: IdcardOutlined,
        childrens:{}
    },{
        id:'Login',
        path: '/Login',
        title: '登录',
        component: ()=>{import('@/view/Login')},
        icon: FunctionOutlined,
        childrens:{}
    }
]


export default routes;