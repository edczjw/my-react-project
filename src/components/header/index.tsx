import React from "react";
import style from './style.module.scss'
import { Input } from 'antd';
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';

interface AProps {

}
const { Search } = Input;
const Aheader: React.FC<AProps> = (props) => {

    const onSearch = () => {
        // console.log('value', value);
    };
    return (
        <div className={style.AheaderBox}>
            <div className={style.Aheader_logo}>ALLEN 导航</div>
            <div className={style.Aherder_box}>
                <div><SmileTwoTone /> 发2现</div>
                <div><HeartTwoTone twoToneColor="#eb2f96" /> 资源</div>
                <div><CheckCircleTwoTone twoToneColor="#52c41a" /> 世界</div>
            </div>
            {/* <div className={style.Aheader_searchInput}> 
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch}
                    /> 
            </div> */}
            <div className={style.Aheader_right}>
                <div>登录</div>
            </div>
        </div>
    )
}
export default Aheader;