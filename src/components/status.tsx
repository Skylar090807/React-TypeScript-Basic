type StatusProps = {
  status: 'loading' | 'success' | 'error'
}
export const Status = (props: StatusProps) => {
  let message
  if (props.status === 'loading') {
    message = 'Now Loading...📀'
  } else if (props.status === 'success') {
    message = 'Data fetched successfully! 👈 🤖 👍'
  } else if (props.status === 'error') {
    message = 'Error fetching data...🙈'
  }
  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  )
}
