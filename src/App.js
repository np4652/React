import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css';
import Sidebar from "./Components/Sidebar";
import Dashboard from './Components/Dashboard';
import Login from "./Components/Login_Signup/Login";
import Breadcrumb from './Components/Breadcrumb';
import TestAPI from './Components/TestAPI';
import Banner from "./Components/Banner";
import { getCookie } from "./Components/Cookie";
import TopBar from "./Components/TopBar";
function App() {
  const [crumbs, setCrumbs] = useState(['Home', 'Dashboard']);
  const [isPined, setIsPined] = useState(false);
  const navigate = useNavigate();
  const [page, setPage] = useState(true)
  let x = getCookie(".milkyfie_user")
  useEffect(() => {
    if (!getCookie('.milkyfie_user')) {
      setPage(false)
      return navigate("login")
    } else {
      return setPage(true)
    }
  }, [page, x, isPined])

  const toogleSideBar = () => setIsPined(!isPined);
  return (
    <>
      {
        page ?
          (
            <div className={`page-wrapper ${isPined ? "pinned" : ""}`} >
              <div className="page-content">
                <div className="main-container">
                  <Sidebar></Sidebar>
                  <div className="page-content">
                    {/* <Header></Header> */}
                    <TopBar toogleSideBar={toogleSideBar}></TopBar>
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

