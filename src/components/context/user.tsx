import { useContext } from 'react'
import { UserContext } from './usercontext'

export const User = () => {
  const userContext = useContext(UserContext)

  // userContext.tsx에서 userContext type을 UserContextType으로 type Assertion 해줬다.
  // 때문에 사용할 때 if(userContext)로 null check하지 않아도 된다.
  const handleLogin = () => {
    userContext?.setUser({
      name: 'Skylar',
      email: 'skylar@example.com',
    })
  }
  const handleLogout = () => {
    userContext.setUser(null)
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext?.user?.name} </div>
      <div>User email is {userContext?.user?.email}</div>
    </div>
  )
}
