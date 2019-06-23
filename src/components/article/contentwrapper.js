import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

const Container = styled.div`
  max-width: 728px;
  margin-left: auto;
  margin-right: auto;
`
const Content = styled.div`
  padding: 56px 24px 26px 24px;
  ${media.xs`
  padding: 56px 16px 26px 16px;
  `}
`

function ContentWrapper(props) {
  return (
    <Container>
      <Content>{props.children}</Content>
    </Container>
  )
}

export default ContentWrapper
