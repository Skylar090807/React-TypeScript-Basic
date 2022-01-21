import { Login } from './login'
import { ProfileProps } from './profile'

type PrivateProps = {
  isLoggedIn: boolean
  Component: React.ComponentType<ProfileProps>
}

export const Private = ({ isLoggedIn, Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="Skylar" />
  } else {
    return <Login />
  }
}
