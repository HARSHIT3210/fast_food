import { Redirect, Slot } from "expo-router";
import React from "react";

const Layout = () => {
  const isAuthenicated =false // Replace with actual authentication logic
  if(!isAuthenicated) return <Redirect href="/sign-in" />;
  return (
  <Slot/>
);
};

export default Layout;
