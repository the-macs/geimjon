import React, { useState } from 'react'
import Login from './components/Login';

function App() {
  const adminUser = {
    username: "admin",
    password: "password"
  }

  const [user, setUser] = useState({ username: '' })
  const [error, setError] = useState()

  const Auth = details => {
    if (details.username === adminUser.username && details.password === adminUser.password) {
      setUser({
        username: details.username
      })
    } else {
      setError('Invalid username or password')
    }
  }

  const Logout = () => {
    console.log('logout')
    setUser({
      username: ''
    })
  }

  return (
    <div className="App">
      {
        (user.username !== "") ? (
          <div className="welcome">
            <h2>Welcome! <span>{user.username}</span></h2>
            <button onClick={Logout}>Logout</button>
          </div>
        ) : (
          <Login Auth={Auth} error={error} />
        )
      }
    </div>
  );
}

export default App;
