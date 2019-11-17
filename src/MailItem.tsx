import React from 'react'
import styled from 'styled-components'

interface MailProps {
  subject: string
  body: string
  sender: string
  checked: boolean
  handleDelete: React.EventHandler<React.MouseEvent>
  onClick: React.EventHandler<React.MouseEvent>
}

const MailItem: React.FC<MailProps> = props => {
  return (
    <div style={{ border: '1px solid blue' }} onClick={props.onClick}>
      <span>Checked: {`${props.checked}`}</span>
      ----- {props.sender}
      <br />
      {props.subject}
      <br />
      {props.body}
      <br />
      <div onClick={props.handleDelete}>DELETE</div>
    </div>
  )
}

export { MailItem }
