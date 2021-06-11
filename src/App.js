import React from 'react';
import HeadNav from './components/Navbar/HeaderNav/HeaderNav';
import SideNav from './components/Navbar/SideNav/SideNav';
import './App.css'
import Dashboard from './components/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
    <div style={{display:'flex'}}>
    <SideNav />
    <div style={{width:'100%'}}>
    <HeadNav />
    <Dashboard />
    </div>
  </div>

    </div>
  );
}

export default App;
