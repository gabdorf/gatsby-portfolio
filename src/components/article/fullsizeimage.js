import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-height: 750px;
`

function FullSizeImage(props) {
  return <Image src={props.src} alt={props.alt} />
}

export default FullSizeImage
