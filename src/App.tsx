import React, { useState } from 'react'
import styled from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './App.css'
import { initialState } from './utils/initialState'
import { Header } from './Header'
import { MailItem } from './MailItem'

/**
 * ------------------- TYPES ------------------------
 */
export interface Mail {
  id: string
  subject: string
  body: string
  from: { name: string; email: string }
  checked: boolean
  receivedAt: string // dummy timestamp
}

/**
 * -------------------- STYLES -----------------------
 */
const Layout = styled.div`
  width: 100%;
`
const MailWrapper = styled.div`
  /* animation while removing a mail item */
  & .mail-exit {
    opacity: 1;
  }
  & .mail-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }
`

/**
 * ------------------- COMPONENT ---------------------
 */
const App: React.FC = () => {
  const [mails, setMails] = useState<Mail[]>(initialState)

  const handleDelete = (id: string): React.EventHandler<React.MouseEvent> => {
    return () => {
      setMails(prevMails => prevMails.filter(mail => mail.id !== id))
    }
  }

  const handleChecked = (id: string): React.EventHandler<React.MouseEvent> => {
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
      <MailWrapper>
        <TransitionGroup>
          {mails.map(mail => (
            <CSSTransition key={mail.id} timeout={300} classNames="mail">
              <MailItem
                subject={mail.subject}
                body={mail.body}
                sender={mail.from.name}
                checked={mail.checked}
                receivedAt={mail.receivedAt}
                handleDelete={handleDelete(mail.id)}
                onClick={handleChecked(mail.id)}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </MailWrapper>
    </Layout>
  )
}

export { App }
