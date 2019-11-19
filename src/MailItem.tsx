import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpen, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { MEDIA } from './utils/mediaQueries'

/**
 * ------------------------ TYPES ------------------------------
 */
interface MailProps {
  subject: string
  body: string
  sender: string
  checked: boolean
  receivedAt: string
  // Event handler props
  handleDelete: React.EventHandler<React.MouseEvent>
  handleChecked: React.EventHandler<React.MouseEvent>
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
  grid-gap: 3px 10px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  ${props => props.checked && `background-color: #ddd;`}
`

// Grid Items
const Checked = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / span 3;
  align-self: center;
  justify-self: center;
  color: salmon;
  font-size: 27px;
  ${MEDIA.DESKTOP`font-size: 30px;`}
`
const Sender = styled.div`
  grid-column: 2 / 3;
`
const BtnWrapper = styled.div`
  grid-column: 3 / 4;
  align-self: center;
`
const Heading = styled.h2`
  grid-column: 2 / 3;
  font-size: 1rem;
  font-weight: normal;
  ${MEDIA.DESKTOP`
    font-weight: bold;
  `}
`
const TimeStamp = styled.div`
  color: #8a8a8a;
  font-size: 0.7rem;
`
const Content = styled.p`
  grid-column: 2 / 3;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #8a8a8a;
`

// Children of Grid Items
const BtnDelete = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: #8a8a8a;
  -webkit-tap-highlight-color: transparent;

  &:hover,
  &:active {
    color: salmon;
  }
`

/**
 * ----------------------- COMPONENT -------------------------------
 */
const MailItem: React.FC<MailProps> = props => {
  return (
    <MailItemWrapper checked={props.checked} onClick={props.handleChecked}>
      <Checked>
        <FontAwesomeIcon icon={props.checked ? faEnvelopeOpen : faEnvelope} />
      </Checked>
      <Sender>{props.sender}</Sender>
      <BtnWrapper>
        <BtnDelete onClick={props.handleDelete} icon={faTrashAlt} />
      </BtnWrapper>
      <Heading>{props.subject}</Heading>
      <TimeStamp>{props.receivedAt}</TimeStamp>
      <Content>{props.body}</Content>
    </MailItemWrapper>
  )
}

export { MailItem }
