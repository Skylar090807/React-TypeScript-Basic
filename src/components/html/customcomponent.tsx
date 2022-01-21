import React from 'react'
import { Greet } from '../greet'

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return <div>{props.name}</div>
}
