import React, { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import { Header } from './Header'
import { initialState } from './utils/initialState'

/**
 * ------------------- TYPES ------------------------
 */
export interface Mail {
  subject: string
  body: string
  from: { name: string; email: string }
  checked: boolean
}

/**
 * -------------------- STYLES -----------------------
 */
const Layout: React.FC = styled.div`
  width: 100%;
`
const Wrapper: React.FC = styled.div`
  border: 1px solid red;
`

/**
 * ------------------- COMPONENT ---------------------
 */
const App: React.FC = () => {
  const [mails, setMails] = useState<Mail[]>(initialState)
  // console.log(mails)

  return (
    <Layout>
      <Header />
      <Wrapper>{mails.map(mail => {})}</Wrapper>
    </Layout>
  )
}

export { App }
