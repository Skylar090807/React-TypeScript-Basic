import { useState } from 'react'

type AuthUser = {
  name: string
  email: string
}

export const User = () => {
  /*(alias) useState<null>(initialState: (() => null) | null): 
    [null, React.Dispatch<React.SetStateAction<null>>] (+1 overload)
  */
  const [user, setUser] = useState<AuthUser | null>(null)
  const handleLogin = () => {
    setUser({
      name: 'Skylar',
      email: 'Skylar@example.com',
    })
  }
  const handleLogout = () => {
    setUser(null)
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>

      {/* const user: AuthUser | null */}
      <div>User name is {user?.name} </div>
      <div>User email is {user?.email}</div>
    </div>
  )
}
