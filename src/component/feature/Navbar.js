import React from 'react'
import { clearStorage } from '../../utility/storage'

import './css/Navbar.css'
import { login, logout } from '../../utility/auth'
import { useSelector } from 'react-redux'

function Navbar() {
  const token = useSelector((state) => state.token.value)

  window.addEventListener("beforeunload", () => clearStorage())

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h3>Tify</h3>
      </div>
      <div className="navbar-nav">
        {token ? (
          <button onClick={logout} className="logout-button">Logout</button>
        ) : (
          <button onClick={login} className="login-button">Login First</button>
        )}
      </div>
    </div>
  )
}

export default Navbar