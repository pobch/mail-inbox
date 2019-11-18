import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons'

/**
 * ------------------------ TYPES ------------------------------
 */
interface MailProps {
  subject: string
  body: string
  sender: string
  checked: boolean
  handleDelete: React.EventHandler<React.MouseEvent>
  onClick: React.EventHandler<React.MouseEvent>
}

/**
 * ------------------------- STYLES -------------------------------
 */

// Grid Container
const MailItemWrapper = styled.article<{ checked: boolean }>`
  border-top: 1px solid #ddd;
  padding: 10px 20px;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-gap: 10px;
  ${props => props.checked && `background-color: #ddd;`}
`

// Grid Items
const Checked = styled.div`
  border: 1px solid blue;
  grid-column: 1 / 2;
  grid-row: 1 / span 3;
  align-self: center;
  justify-self: center;
  cursor: pointer;
`
const Sender = styled.div`
  grid-column: 2 / 3;
`
const BtnWrapper = styled.div`
  border: 1px solid blue;
  grid-column: 3 / 4;
  align-self: center;
`
const Heading = styled.h2`
  grid-column: 2 / 3;
`
const Content = styled.p`
  grid-column: 2 / 3;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

// Children of Grid Items
const BtnDelete = styled.button`
  cursor: pointer;
`

/**
 * ----------------------- COMPONENT -------------------------------
 */
const MailItem: React.FC<MailProps> = props => {
  return (
    <MailItemWrapper checked={props.checked}>
      <Checked onClick={props.onClick}>
        <FontAwesomeIcon icon={props.checked ? faEnvelopeOpen : faEnvelope} />
      </Checked>
      <Sender>{props.sender}</Sender>
      <BtnWrapper>
        <BtnDelete onClick={props.handleDelete}>DEL</BtnDelete>
      </BtnWrapper>
      <Heading>{props.subject}</Heading>
      <Content>{props.body}</Content>
    </MailItemWrapper>
  )
}

export { MailItem }
