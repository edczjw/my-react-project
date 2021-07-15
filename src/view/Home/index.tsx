import React from 'react'
import { Layout } from 'antd'
import style from './style.module.scss'
import Aheader from '@/components/header'
import Contranier from '@/components/contranier'

const { Header, Footer, Sider, Content } = Layout;
// 主页
function Ahome (){ 
    return (
        <div className={style.Ahome_wrapper}>
            
            <Aheader></Aheader>
            <Contranier></Contranier>
        </div>
    )
}
export default Ahome