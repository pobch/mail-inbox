import React from 'react'
import styled from 'styled-components'

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
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  ${props => props.checked && `background-color: #ddd;`}
`

// Grid Items
const Checked = styled.div`
  border: 1px solid blue;
  grid-column: 1 / 2;
  grid-row: 1 / span 3;
`
const Sender = styled.div`
  grid-column: 2 / 3;
`
const BtnWrapper = styled.div`
  border: 1px solid blue;
  grid-column: 3 / 4;
`
const Heading = styled.h2`
  grid-column: 2 / 3;
`
const Content = styled.p`
  grid-column: 2 / 3;
`

/**
 * ----------------------- COMPONENT -------------------------------
 */
const MailItem: React.FC<MailProps> = props => {
  return (
    <MailItemWrapper checked={props.checked}>
      <Checked onClick={props.onClick}>{`${props.checked}`}</Checked>
      <Sender>{props.sender}</Sender>
      <BtnWrapper>
        <button onClick={props.handleDelete}>DEL</button>
      </BtnWrapper>
      <Heading>{props.subject}</Heading>
      <Content>{props.body}</Content>
    </MailItemWrapper>
  )
}

export { MailItem }
