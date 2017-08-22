import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'

const Container = styled.div`
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
`
const Content = styled.div`padding: 56px 0 26px 0;`

const ContentWrapper = props => ({
  render() {
    return (
      <Container>
        <Row>
          <Column lg={6} lgShift={3}>
            <Content>
              {props.children}
            </Content>
          </Column>
        </Row>
      </Container>
    )
  },
})

export default ContentWrapper
