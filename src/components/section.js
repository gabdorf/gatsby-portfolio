import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  @media (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`

const StyledSection = styled(Section)`
  &:nth-of-type(2n) {
    background: #F9F9F9;
  }
`

const Container = styled.div`
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
`

export default class About extends React.Component {
  render() {
    return (
      <StyledSection>
        <Container>
          {this.props.children}
        </Container>
      </StyledSection>
    )
  }
}
