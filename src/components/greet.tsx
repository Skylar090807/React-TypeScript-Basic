import * as React from 'react'
type GreetProps = {
  name: string
  number: number
  loggedIn: boolean
}

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h1>{props.loggedIn ? `welcome ${props.name}! 🥰` : `Welcome Guest! 🤩`}</h1>
      <h2>Greeting!</h2>
      <h3>Welcome! I'm {props.name}. This Web Page for React-Typescript Study.</h3>
      <h4>I've been studying React for {props.number} month.</h4>
      <p> I want to be like these developers. 👇🏻</p>
    </div>
  )
}

export const Greet2 = () => {
  console.log('HI Skylar!')
}
Greet2()
