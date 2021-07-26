import React, { useState } from 'react';
import { Layout } from 'antd';
import Side from '@/components/sidemenu'
import Aheader from '@/components/header'
import Contranier from '@/components/contranier'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

const {Footer}= Layout
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Side></Side>
          <Layout className="site-layout">
            <Aheader></Aheader>
            <Contranier></Contranier>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </Router>
    </div>
  )
}

export default App
