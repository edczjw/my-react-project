import React from "react";
import style from './style.module.scss'
import { Input,Layout } from 'antd'; 
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';

interface AProps {

}
const { Search } = Input;
const { Header } = Layout;
const Aheader: React.FC<AProps> = (props) => {

    const onSearch = () => {
        // console.log('value', value);
    };
    return (
        <Header style={{ padding: 0 }}>
        <div className={style.AheaderBox}>
            <div className={style.Aherder_box}>
                <div><SmileTwoTone /> 发现</div>
                <div><HeartTwoTone twoToneColor="#eb2f96" /> 资源</div>
                <div><CheckCircleTwoTone twoToneColor="#52c41a" /> 世界</div>
            </div> 
            <div className={style.Aheader_right}>
                <div>登录</div>
            </div>
        </div>
        </Header>
    )
}
export default Aheader;