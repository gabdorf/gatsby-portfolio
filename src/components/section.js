import React from 'react'
import styled from 'styled-components'
import media from '../utils/media-queries'

const Section = styled.section`
  padding-top: 96px;
  padding-bottom: 96px;
  ${media.md`
    padding-top: 40px;
    padding-bottom: 40px;
  `} &:nth-of-type(2n) {
    background: #f9f9f9;
  }
`

const Container = styled.div`
  max-width: 1360px;
  padding-left: 24px;
  padding-right: 24px;
  margin-left: auto;
  margin-right: auto;
  ${media.xl`
    padding-left: 64px;
    padding-right: 64px;
  `}
  ${media.md`
    padding-left: 24px;
    padding-right: 24px;
  `}
`

function SectionComponent(props) {
  return (
    <Section id={props.id}>
      <Container>{props.children}</Container>
    </Section>
  )
}

export default SectionComponent
