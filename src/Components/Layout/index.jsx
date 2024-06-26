import React from 'react';
import './style.css';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <header id="header" className="header">
        <div className='title flex-row start-start'>
          TaskWe     
        </div>
      </header>
      <main className="main">
      <div className='children'>{children}</div>
      </main>
      <footer className="footer">
       Developed by Adesh S. Mahadik
      </footer>
    </div>
  );
};

export default Layout;
