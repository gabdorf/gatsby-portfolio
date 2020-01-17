import React from 'react'
import styled from 'styled-components'

const TwoImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
`

const Image = styled.img`
  max-height: ${props => props.maxHeight};
  align-self: center;
  max-width: 100%;
`

function TwoImage(props) {
  return (
    <TwoImageWrapper>
      <Image src={props.src1} alt={props.alt1} maxHeight={props.maxHeight} />
      <Image src={props.src2} alt={props.alt2} maxHeight={props.maxHeight} />
    </TwoImageWrapper>
  )
}

export default TwoImage
