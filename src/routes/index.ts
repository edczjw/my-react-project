import Mypage from '@/view/Mypage';
import Login from '@/view/Login';

import {
    YahooOutlined, AlibabaOutlined, YuqueOutlined, LaptopOutlined, UngroupOutlined, UsergroupAddOutlined,
    PropertySafetyOutlined, IdcardOutlined, ReadOutlined, FunctionOutlined,
    ToolOutlined, MailOutlined, AppstoreOutlined, SettingOutlined
} from '@ant-design/icons';

// 路由配置
const routes = [
    {
        id: 'Mypage',
        path: '/Mypage',
        title: '我的',
        component: Mypage,
        icon: IdcardOutlined,
        routes: [
            {
                id: 'Mypage1',
                icon: IdcardOutlined,
                path: "/child/:id/grand-child",
                title: '笔记',
                component: Login
            }
        ]
    }, {
        id: 'Login',
        path: '/Login',
        title: '登录',
        component: Login,
        icon: FunctionOutlined,
        childrens: {}
    }
]


export default routes;