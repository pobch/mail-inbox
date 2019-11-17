import React, { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import { initialState } from './utils/initialState'
import { Header } from './Header'
import { MailItem } from './MailItem'

/**
 * ------------------- TYPES ------------------------
 */
export interface Mail {
  id: number
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

  const handleDelete = (id: number): React.EventHandler<React.MouseEvent> => {
    return () => {
      setMails(prevMails => prevMails.filter(mail => mail.id !== id))
    }
  }

  const handleChecked = (id: number): React.EventHandler<React.MouseEvent> => {
    return () => {
      setMails(prevMails =>
        prevMails.map(mail => {
          if (mail.id === id) {
            return { ...mail, checked: !mail.checked }
          }
          return mail
        })
      )
    }
  }

  return (
    <Layout>
      <Header />
      <Wrapper>
        {mails.map(mail => (
          <MailItem
            key={mail.id}
            subject={mail.subject}
            body={mail.body}
            sender={mail.from.name}
            checked={mail.checked}
            handleDelete={handleDelete(mail.id)}
            onClick={handleChecked(mail.id)}
          />
        ))}
      </Wrapper>
    </Layout>
  )
}

export { App }
