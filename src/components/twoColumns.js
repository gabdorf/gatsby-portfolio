import React from 'react'
import styled from 'styled-components'

import media from 'utils/media-queries'

const Div = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  justify-content: space-between;
  width: 100%;
  ${media.md`
    grid-template-columns: auto;
    justify-content: center;
  `}
`

const LeftColumn = styled.div``

const RightColumn = styled.div`
  max-width: ${props => props.wide ? '620px' : '544px'};
  ${media.md`
    max-width: 544px;
  `}
`

const TwoColumns = props => {
  return (
    <Div>
      <LeftColumn>{props.leftColumn}</LeftColumn>
      <RightColumn wide={props.wide}>{props.rightColumn}</RightColumn>
    </Div>
  )
}

export default TwoColumns
