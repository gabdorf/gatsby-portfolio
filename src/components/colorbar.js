import React from 'react'
import styled from 'styled-components'

const ColorBarDiv = styled.div`
  height: 12px;
  width: 64px;
  background: ${props => props.barColor};
  margin-top: -28px;
  margin-bottom: 48px;
`

function ColorBar(props) {
  return <ColorBarDiv barColor={props.barColor} />
}

export default ColorBar
