import React from 'react'
import styled from 'styled-components'
import { MEDIA } from './utils/mediaQueries'

/**
 * -------------------- STYLES -----------------------
 */
const HeaderBar = styled.header`
  position: sticky;
  top: 0;
  padding: 5px 0;
  background-color: white;
  /* box-shadow: h-offset v-offset blur spread color; */
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  ${MEDIA.DESKTOP`
    box-shadow: none;
    padding: 10px 0;
    background-color: #333;
    color: white;
  `}
`
const Heading = styled.h1`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
  ${MEDIA.DESKTOP`
    font-weight: bold;
    font-size: 1.5rem;
  `}
`

/**
 * ------------------- COMPONENT ---------------------
 */
const Header: React.FC = () => {
  return (
    <HeaderBar>
      <Heading>Inbox</Heading>
    </HeaderBar>
  )
}

export { Header }
