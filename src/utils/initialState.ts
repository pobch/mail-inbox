import uuidv4 from 'uuid/v4'
import { Mail } from '../App'
import DATA from '../data.json'

interface RawData {
  subject: string
  body: string
  from: { name: string; email: string }
}

export function transformData(data: RawData[]): Mail[] {
  return data.map(data => ({ ...data, checked: false, id: uuidv4(), receivedAt: '09:53' }))
}

export const initialState = transformData(DATA)
