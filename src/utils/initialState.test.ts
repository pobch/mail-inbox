import { transformData } from './initialState'

const mockData = [
  {
    from: {
      name: 'Sender Name #1',
      email: 'sender1@test.com'
    },
    subject: 'Short Subject',
    body: 'Short body.'
  },
  {
    from: {
      name: 'Sender Name #2',
      email: 'sender2@test.com'
    },
    subject:
      'Long Subject. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac faucibus libero.',
    body:
      'Long body. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac faucibus libero. Integer non nibh urna. Vestibulum malesuada bibendum tortor sollicitudin imperdiet. Cras sollicitudin varius tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam maximus, lorem eget vehicula rutrum, magna mi imperdiet ante, nec rhoncus risus lacus et enim. Praesent justo quam, iaculis a rhoncus nec, imperdiet a dui. Vestibulum dapibus pharetra sapien id semper. Donec dignissim suscipit tortor, a ultricies risus fringilla at. Etiam sodales aliquet ex, eu aliquet urna consectetur et. Vivamus sagittis pretium odio, non fringilla purus tincidunt vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam molestie lorem eget sem aliquet aliquam a ut metus.'
  }
]

it('correctly add properties with default values into raw data from backend API', () => {
  const result = transformData(mockData)
  result.forEach((value, index) => {
    // new properties
    expect(value.checked).toBe(false)
    expect(value.id.length).toBeGreaterThan(0)
    expect(value.receivedAt.length).toBeGreaterThan(0)

    // existing properties should stay untouched
    expect(value).toMatchObject(mockData[index])
  })
})
