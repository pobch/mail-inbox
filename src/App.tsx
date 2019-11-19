import React, { useState } from 'react'
import styled from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './App.css'
import { initialState } from './utils/initialState'
import { Header } from './Header'
import { MailItem } from './MailItem'
import { MEDIA } from './utils/mediaQueries'

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
  ${MEDIA.DESKTOP`
    max-width: 768px;
    margin: 0 auto;
  `}
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
    return e => {
      e.stopPropagation()
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
                handleChecked={handleChecked(mail.id)}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </MailWrapper>
    </Layout>
  )
}

export { App }
