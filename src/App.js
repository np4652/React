import {useLayoutEffect, useState} from "react";
import {BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import './App.css';
import Sidebar from "./Components/Sidebar";
import Header from './Components/Header'
import Dashboard from './Components/Dashboard';
import Login from "./Components/Login_Signup/Login";
import Breadcrumb from './Components/Breadcrumb';
import TestAPI from './Components/TestAPI';
import 'jquery';
import 'moment';
import Banner from "./Components/Banner";
import {getCookie} from "./Components/Cookie";

function App() {
  const [crumbs, setCrumbs] = useState(['Home', 'Dashboard']);
  const [user,setUser]=useState();
useLayoutEffect(()=>{
    setUser(getCookie('user'))
},[])
if(!user){
  console.log(user);
  <BrowserRouter>
  <Routes>
  <Route exact path='/login' element={<Login/>} />
  </Routes>
  </BrowserRouter>
  return (
    <Login/>
  )
  
}else{
  console.log(user);
  return (
    <div className="page-wrapper">
    <div className="page-content">
    <div className="main-container">
    <BrowserRouter>
        <Sidebar></Sidebar>
        <div className="page-content">
          <Header></Header>
          <Breadcrumb crumbs={crumbs}></Breadcrumb>
        </div>
        <Routes>
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/' element={<Dashboard setCrumbs={setCrumbs}/>} />
          <Route exact path='/dashboard' element={<Dashboard setCrumbs={setCrumbs}/>} />
          <Route exact path='/banner' element={<Banner setCrumbs={setCrumbs}/>} />
          <Route exact path='/testapi' element={<TestAPI setCrumbs={setCrumbs}/>} />
        </Routes>
        </BrowserRouter>
        </div>
        </div>
        </div>
  )
}
}
  
export default App;

