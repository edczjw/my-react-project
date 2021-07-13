import React from 'react';
import Side from '@/components/sidemenu'
import style from './style.module.scss'
import { Layout } from 'antd';
interface AProps{

}

const Contranier:React.FC<AProps> = (props) => { 
  const { Content } = Layout;
  return (
    <div className={style.Acontranier}>
        {/* 菜单 */}
        <Side></Side>
        <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
        </Content>
        
    </div>
  );
}

export default Contranier;
