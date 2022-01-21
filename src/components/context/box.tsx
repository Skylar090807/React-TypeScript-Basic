import { useContext } from 'react'
import { ThemeContext } from './themecontext'

export const Box = () => {
  const theme = useContext(ThemeContext)
  return <div style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}>Temee Context</div>
}
