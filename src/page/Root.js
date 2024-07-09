import React from 'react'
import Navbar from '../component/Navbar'
import { Outlet } from "react-router-dom";

function Root({authenticate, setAuthenticate}) {
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Outlet/>
    </div>
  );
}

export default Root;