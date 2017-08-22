import React from 'react'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'

export default class Notes extends React.Component {
  render() {
    return (
      <Row>
        <Column xs={12} sm={3} smShift={1}>
          <h2>Notes</h2>
        </Column>
        <Column xs={12} sm={1} md={1} mdShift="0" />
      </Row>
    )
  }
}
