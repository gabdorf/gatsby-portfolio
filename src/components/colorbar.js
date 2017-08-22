import React from 'react'
import styled from 'styled-components'

const ColorBarDiv = styled.div`
  height: 12px;
  width: 64px;
  background: ${props => props.color};
  margin-top: -28px;
  margin-bottom: 48px;
`

const ColorBar = props => {
  return <ColorBarDiv color={props.color} />
}

export default ColorBar
