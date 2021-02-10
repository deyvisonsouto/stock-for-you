import React from 'react';
import './Layout.css';


function Layout(props) {
  return (
    <div className="layout">
      <header className="header">
        Stocks for you
                </header>
      <main className="content">
        {props.children}
      </main>
    </div>

  )
}

export default Layout;