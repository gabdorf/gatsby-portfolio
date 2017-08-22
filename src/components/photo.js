import React from 'react'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'

import ColorBar from '../components/colorbar'

export default class Photo extends React.Component {
  render() {
    return (
      <Row>
        <Column xs={12} sm={3} smShift={1}>
          <h2>Photo</h2>
          <ColorBar color="#B7BFFF" />
        </Column>
        <Column xs={12} sm={1} md={1} mdShift="0" />
      </Row>
    )
  }
}
