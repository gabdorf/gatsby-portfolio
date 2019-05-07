import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  max-height: 500px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
`

function LargeImage(props) {
  return <Image src={props.src} alt={props.alt} />
}

export default LargeImage
