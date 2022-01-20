import React from 'react'
import './App.css'
import { Award } from './components/award'
import { Button } from './components/button'
import { Container } from './components/container'
import { Greet } from './components/greet'
import { Heading } from './components/heading'
import { Input } from './components/input'
import { Person } from './components/person'
import { PersonList } from './components/personlist'
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
    </div>
  )
}

export default App
