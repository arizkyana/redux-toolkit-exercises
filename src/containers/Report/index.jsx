import React from 'react';

import './Report.styles.css';
import { Navbar } from 'react-bootstrap';

function Report() {
  return (
    <main className="shell">
      <Navbar
        fixed="top"
        variant="light"
        bg="light"
        style={{
          marginLeft: '5rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        }}
      >
        <Navbar.Brand href="#home">Brand</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      {/* <aside className="sidemenu" /> */}
      <section className="content">
        <aside className="inner-sidemenu">tes ddd</aside>
      </section>
    </main>
  );
}

export default Report;
