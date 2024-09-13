// import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from './ui/NavBar';
import Footer from './ui/Footer'

export default function Layout() {
  return (
      <Container>
        <NavBar/>
        <Outlet />
        <Footer/>
      </Container>
  );
}
