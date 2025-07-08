import { Redirect, Slot } from "expo-router";
import React from "react";

const Layout = () => {
  const isAuthenicated =true // Replace with actual authentication logic
  if(!isAuthenicated) return <Redirect href="/" />;
  return (
  <Slot/>
);
};

export default Layout;
