import {useState} from "react";
import { Route, Routes } from "react-router-dom";
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
function App() {
  const [crumbs, setCrumbs] = useState(['Home', 'Dashboard']);
 
  return (
    <>
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
    </>
  )
}


export default App;

