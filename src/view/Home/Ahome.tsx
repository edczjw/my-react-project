import React from 'react'
import { Layout } from 'antd'
import style from './style.module.scss'
import Sidemenu from '@/view/components/sidemenu'

const { Header, Footer, Sider, Content } = Layout;
// 主页
function Ahome (){
    return (
        <div className={style.Ahome_wrapper}>
            <Sidemenu></Sidemenu>
        </div>
    )
}
export default Ahome