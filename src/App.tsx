import React from 'react'
import './App.css'
import { Greet } from './components/greet'
import { Person } from './components/person'
import { PersonList } from './components/personlist'

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
      <Greet name="Skylar" number={1} loggedIn={false} />
      <Person name={PersonName} />
      <PersonList names={NameList} />
    </div>
  )
}

export default App
