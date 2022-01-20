import { useState } from 'react' // import useState Hook

export const LoggedIN = () => {
  //useState() = useState<undefined>()
  //useState(false) = useState<boolean>()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }
  const handleLogout = () => {
    setIsLoggedIn(false)
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
    </div>
  )
}
