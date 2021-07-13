import React, { useState } from 'react';
import { BrowserRouter as Router , Route, Switch } from "react-router-dom"; 
import routes from '@/routes'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">  
    {/* 路由配置页面 */}
      <Router>  
          <Switch>
            {
              routes.map(route => 
              <Route exact key={route.path} path={route.path}>
                <route.component />
              </Route>)
            }
          </Switch> 
      </Router>
    </div>
  )
}

export default App
