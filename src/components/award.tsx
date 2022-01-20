type AwardProps = {
  children: React.ReactNode
  // ReactNode는 react package에서 제공
  // type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
}

export const Award = (props: AwardProps) => {
  return <h2>{props.children}</h2>
}
