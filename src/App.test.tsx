import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'
import { App } from './App'

jest.mock('./data.json', () => {
  return [
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
})

it('correctly renders all children', () => {
  const { getByText, getAllByTestId } = render(<App />)

  expect(getAllByTestId('mail-item')).toHaveLength(2)
  expect(getAllByTestId('icon-mail')).toHaveLength(2)
  expect(getAllByTestId('icon-trash')).toHaveLength(2)

  expect(getByText(/sender name #1/i)).toBeInTheDocument()
  expect(getByText(/short subject/i)).toBeInTheDocument()
  expect(getByText(/short body/i)).toBeInTheDocument()

  expect(getByText(/sender name #2/i)).toBeInTheDocument()
  expect(getByText(/long subject/i)).toBeInTheDocument()
  expect(getByText(/long body/i)).toBeInTheDocument()
})

it('first renders all mail icons in closed-envelope state', () => {
  const { getAllByTestId } = render(<App />)

  getAllByTestId('icon-mail').forEach(element => {
    expect(element).toHaveAttribute('data-icon', 'envelope')
  })
})

it('first renders all mail items without background color', () => {
  const { getAllByTestId } = render(<App />)

  getAllByTestId('mail-item').forEach(element => {
    expect(element).not.toHaveStyle('background-color: #ddd;')
  })
})

it('changes the mail icon and background color after clicking the mail item', () => {
  const { getAllByTestId, getByText } = render(<App />)

  // click the 2nd mail item
  fireEvent.click(getByText(/long subject/i))

  // background color after clicking
  getAllByTestId('mail-item').forEach((element, index) => {
    if (index === 1) {
      expect(element).toHaveStyle('background-color: #ddd;')
    } else {
      expect(element).not.toHaveStyle('background-color: #ddd;')
    }
  })
  // mail icon after clicking
  getAllByTestId('icon-mail').forEach((element, index) => {
    if (index === 1) {
      expect(element).toHaveAttribute('data-icon', 'envelope-open')
    } else {
      expect(element).toHaveAttribute('data-icon', 'envelope')
    }
  })
})

it('removes the mail item after clicking the trash icon', async () => {
  const { getAllByTestId, getByText, queryByText } = render(<App />)

  // click the 1st mail item
  fireEvent.click(getAllByTestId('icon-trash')[0])

  // after clicking the trash icon of 1st mail item
  await wait(() => expect(getAllByTestId('mail-item')).toHaveLength(1))
  expect(queryByText(/short subject/i)).toBeNull()
  expect(getByText(/long subject/i)).toBeInTheDocument()
})
