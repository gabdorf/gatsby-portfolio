import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

const Container = styled.div`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  ${media.lg`
    max-width: 600px;
  `}
`
const Content = styled.div`
  p + h3 {
    margin-top: 42px;
  }
  padding: 56px 24px 26px 24px;
  ${media.lg`
    padding: 24px 24px 26px 24px;
  `}
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
