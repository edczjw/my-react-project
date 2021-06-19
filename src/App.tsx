import React, { useState } from 'react' 
import './App.css'
import 'antd/dist/antd.css';
import Login from './view/login'
import Ahome from './view/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">  
      <Ahome></Ahome>
    </div>
  )
}

export default App
