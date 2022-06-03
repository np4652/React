import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
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
import { getCookie } from "./Components/Cookie";
function App() {
  const [crumbs, setCrumbs] = useState(['Home', 'Dashboard']);
  const navigate = useNavigate();
  const [page, setPage] = useState(true)
  let x = getCookie("user")
  useEffect(() => {
    if (!getCookie('user')) {
      setPage(false)
      return navigate("login")
    } else {
      return setPage(true)
    }
  }, [page, x])
  return (
    <>
      {
        page ?
          (
            <div className="page-wrapper">
              <div className="page-content">
                <div className="main-container">
                  <Sidebar></Sidebar>
                  <div className="page-content">
                    <Header></Header>
                    <Breadcrumb crumbs={crumbs}></Breadcrumb>
                  </div>
                  <Routes>
                    <Route exact path='/' element={<Dashboard setCrumbs={setCrumbs} />} />
                    <Route exact path='/dashboard' element={<Dashboard setCrumbs={setCrumbs} />} />
                    <Route exact path='/banner' element={<Banner setCrumbs={setCrumbs} />} />
                    <Route exact path='/testapi' element={<TestAPI setCrumbs={setCrumbs} />} />
                  </Routes>
                </div>
              </div>
            </div>
          )
          :
          (
            <Routes>
              <Route exact path='/login' element={<Login />} />
            </Routes>
          )
      }
    </>
  )
}
export default App;

