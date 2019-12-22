
export type Istate =  {
  id: number,
  value: string
}

export interface Iaction {
  type: string,
  id: number,
  value: string
}

export const ADDTODO = 'ADD_TODO'