import React from 'react'
import './App.css'
import { Private } from './components/auth/private'
import { Profile } from './components/auth/profile'
import { Award } from './components/award'
import { Button } from './components/button'
import { Counter2 } from './components/class/counter'
import { Container } from './components/container'
import { Box } from './components/context/box'
import { ThemeContextProvider } from './components/context/themecontext'
import { User } from './components/context/user'
import { UserContextProvider } from './components/context/usercontext'
import { List } from './components/generics/list'
import { Greet } from './components/greet'
import { Heading } from './components/heading'
import { Input } from './components/input'
import { Person } from './components/person'
import { PersonList } from './components/personlist'
import { DomRef } from './components/ref/domref'
import { MutableRef } from './components/ref/mutableref'
import { Counter } from './components/state/counter'
import { Status } from './components/status'

function App() {
  const PersonName = {
    first: 'Hedy',
    last: 'Lamarr',
  }

  const NameList = [
    {
      first: 'Margaret',
      last: 'Hamilton',
    },
    {
      first: 'Grace',
      last: 'Hopper',
    },
    {
      first: 'Ada',
      last: 'Lovelace',
    },
  ]
  return (
    <div className="App">
      <Greet name="Skylar" /* number={1} */ loggedIn={false} />
      <Person name={PersonName} />
      <PersonList names={NameList} />
      <Status status="success" />
      <Heading>Placeholder text</Heading>
      <Award>
        <Heading>Knuth Prize goes to Hedy Lamarr!!🥳 🎉</Heading>
      </Award>
      <Button
        handleClick={(event, id) => {
          console.log('Button clicked', event, id)
        }}
      />
      <Input value="" handleChange={console.log} />
      {/* handleChange={(event) => console.log(event)} 같은 인자를 전달하고 받을 땐 생략 가능 */}
      <Container />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <DomRef />
      <MutableRef />
      <Counter2 message="The count value is" />
      <Private isLoggedIn={true} Component={Profile} />
      <List item={['cat', 'puppy', 'bird']} onClick={console.log} />
    </div>
  )
}

export default App
