import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  display: block;
  margin: 16px auto;
  max-height: 750px;
  max-width: 100%;
`

function FullSizeImage(props) {
  return <Image src={props.src} alt={props.alt} />
}

export default FullSizeImage
