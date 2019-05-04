import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

const Section = styled.section`
  margin: 0 24px;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  border-top: 2px solid gainsboro;
  max-width: 916px;
  /* border-top: 2px solid black; */
  padding: 128px 0;
`

function SectionComponent(props) {
  return (
    <Section id={props.id}>
      <Container>{props.children}</Container>
    </Section>
  )
}

export default SectionComponent
