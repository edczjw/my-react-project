import React from "react";
import style from './style.module.scss' 

interface AProps {

}
const Mypage:React.FC<AProps>=(props)=>{

    return(
        <div className={style.AheaderBox}>
          我的
        </div>
    )
}
export default Mypage;