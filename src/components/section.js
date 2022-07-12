import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { color } from 'styles/theme'

const Section = styled.section`
  margin: 0 96px;
  ${media.lg`
    margin: 0 40px;
  `}
  ${media.sm`
    margin: 0 24px;
  `}
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  border-top: 1px solid ${color.grey400};
  max-width: 916px;
  padding: 128px 0;
  ${media.lg`
    padding: 112px 0;
  `}
  ${media.sm`
    padding: 64px 0;
  `}
  width: 100%;
`

const SectionComponent = (props) => {
  return (
    <Section id={props.id}>
      <Container>{props.children}</Container>
    </Section>
  )
}

export default SectionComponent
