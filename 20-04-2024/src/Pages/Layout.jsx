import Header from "./Header";
import { Outlet } from "react-router-dom";
import React from 'react'
import { AuthProvider } from "./Auth";

const Layout = () => {
  return (
    <div>
      <AuthProvider>
        <Header/>
        <Outlet/>
      </AuthProvider>
    </div>
  )
}

export default Layout