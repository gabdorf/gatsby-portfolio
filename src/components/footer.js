import React from 'react'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'

const FooterSection = styled.div`
  color: #666;
  background: #222;
  height: 200px;
  padding-top: 40px;
  text-align: center;
  font-size: 0.8rem;
`

export default class Footer extends React.Component {
  render() {
    return (
      <FooterSection>
        <Row justifyContent={'center'}>© 2017 Gabriel Adorf</Row>
      </FooterSection>
    )
  }
}
