export default interface Entity {
  id?: string | number
  localId?: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}
