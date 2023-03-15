import React from 'react'
import './index.css'

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="left">
        <h2 className="logo">WASP</h2>
        <h4 className="dashboard">| Dashboard</h4>
      </div>
      <div className="right" src="" alt="right">
        <img
          className="notification"
          src="https://csshint.com/wp-content/uploads/2019/07/CSS-Notification-Bell-Icon.jpg"
        />
        <h4 className="date">Mar 14,2023</h4>
        <h4 className="time">11:41:02</h4>
        <h4 className="login">Login</h4>
        <img
          className="login-image"
          src="https://cdn4.iconfinder.com/data/icons/hodgepodge-free/32/login_account_enter_door-512.png"
          alt="login"
        />
      </div>
    </div>
  )
}

export default Navbar
