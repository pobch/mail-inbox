import React, { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import { Header } from './Header'
import DATA from './data.json'

interface Mail {
  subject: string
  body: string
  from: { name: string; email: string }
}

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
  const [mails, setMails] = useState<Mail[]>(DATA)

  return (
    <Layout>
      <Header />
      <Wrapper>{mails.map(mail => {})}</Wrapper>
    </Layout>
  )
}

export { App }
