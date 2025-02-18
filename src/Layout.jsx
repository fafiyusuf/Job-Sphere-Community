import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./Components/Header";
function Layout() {
  return (
    <>
    <Header></Header>
    <main>
    <Outlet />
  </main>
  </>
  );
}

export default Layout;