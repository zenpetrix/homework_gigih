import React from 'react'
import { useTokenContext } from '../context/Token'
import { clearStorage } from '../../utility/storage'

import './css/Navbar.css'
import { login, logout } from '../../utility/auth'

function Navbar() {
  const { token } = useTokenContext()

  window.addEventListener("beforeunload", () => clearStorage())

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h3>Browntify</h3>
      </div>
      <div className="navbar-nav">
        {token ? (
          <button onClick={logout} className="logout-button">Logout</button>
        ) : (
          <button onClick={login} className="login-button">Login to Spotify</button>
        )}
      </div>
    </div>
  )
}

export default Navbar