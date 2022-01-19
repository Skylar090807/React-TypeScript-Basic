import * as React from 'react'
type GreetProps = {
  name: string
}

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>Greeting!</h2>
      <h3>Welcome! I'm {props.name}. This Web Page for React-Typescript Study.</h3>
    </div>
  )
}

export const Greet2 = () => {
  console.log('HI Skylar!')
}
Greet2()
