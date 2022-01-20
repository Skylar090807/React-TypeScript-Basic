// 여기저기 많이 쓰일 때는 component file을 따로 뺴서 import하여 쓰는 것이 좋다.
export type Name = {
  first: string
  last: string
}
export type PersonProps = {
  name: Name
}
