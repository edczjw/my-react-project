import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from '@/routes'
import style from './style.module.scss'
import { Layout } from 'antd';
interface AProps {

}

const Contranier: React.FC<AProps> = (props) => {
  const { Content } = Layout;
  return (
    <div className={style.Acontranier}>
      <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        <Switch>
          {
            routes.map(route =>
              <Route exact key={route.path} path={route.path}>
                <route.component />
              </Route>)
          }
        </Switch>
      </Content>

    </div>
  );
}

export default Contranier;
