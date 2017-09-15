import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'

const Container = styled.div`
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
`
const Content = styled.div`padding: 56px 16px 26px 16px;`

const ContentWrapper = props => ({
  render() {
    return (
      <Container>
        <Content>
          {props.children}
        </Content>
      </Container>
    )
  },
})

export default ContentWrapper
