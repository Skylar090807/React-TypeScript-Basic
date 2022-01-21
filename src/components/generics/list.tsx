type ListProps = {
  item: string[] | number[]
  onClick: (value: string) => void
}

export const List = ({ item, onClick }: ListProps) => {
  return (
    <div>
      <h2>List of items</h2>
      {item.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item}
          </div>
        )
      })}
    </div>
  )
}
