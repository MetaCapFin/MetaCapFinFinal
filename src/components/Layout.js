import React from 'react';
import Header from './header';
import Footer from './footer'; // Assuming you have a Footer component

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
