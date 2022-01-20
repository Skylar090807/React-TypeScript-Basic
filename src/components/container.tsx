/*
export interface CSSProperties extends CSS.Properties<string | number> {
       
  The index signature was removed to enable closed typing for style
  using CSSType. You're able to use type assertion or module augmentation
  to add properties or an index signature of your own.

  For examples and more information, visit:
  https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
}         
*/

type ContainerProps = {
  styles: React.CSSProperties
}

export const Container = () => {
  return <div style={{ border: '1px solid grey', padding: '1rem' }}>Text content goes here</div>
}
