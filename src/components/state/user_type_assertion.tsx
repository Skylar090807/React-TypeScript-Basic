import { useState } from 'react'

type AuthUserTypeAssertion = {
  name: string
  email: string
}

export const User2 = () => {
  const [user, setUser] = useState<AuthUserTypeAssertion>({} as AuthUserTypeAssertion) /* useState Type Assertion*/
  const handleLogin = () => {
    setUser({
      name: 'Skylar',
      email: 'Skylar@example.com',
    })
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>

      <div>User name is {user.name} </div>
      <div>User email is {user.email}</div>
    </div>
  )
}
