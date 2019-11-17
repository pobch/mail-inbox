import { Mail } from '../App'
import DATA from '../data.json'

interface RawData {
  subject: string
  body: string
  from: { name: string; email: string }
}

function transformData(data: RawData[]): Mail[] {
  return data.map((data, index) => ({ ...data, checked: false, id: index + 1 }))
}

export const initialState = transformData(DATA)
