import Head from 'next/head';
import React from 'react';
import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/NavigationBar';

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title> {title ? title + ' - Site Name' : 'Site Name'}</title>
        <meta rel="icon" content="E-commerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-[1500px] mx-auto bg-white">
        <header>
          <NavigationBar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
