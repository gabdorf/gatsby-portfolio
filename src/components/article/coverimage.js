import React from 'react'
import styled from 'styled-components'

const Image = styled.div`
  background: #cdcdcd;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: ${props => props.focusX} ${props => props.focusY};
  width: 100%;
  height: 82vh;
`

function LargeImage(props) {
  return <Image src={props.src} focusX={props.focusX} focusY={props.focusY} />
}

export default LargeImage
