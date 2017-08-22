import React from 'react'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'

import ColorBar from '../components/colorbar'
import Project from '../components/project'
import ScenographicsLogo from '../img/scenographicslogo'

export default class Writing extends React.Component {
  render() {
    return (
      <Row>
        <Column xs={12} sm={12} md={12} lg={3} lgShift={1}>
          <h2>Writing</h2>
          <ColorBar color="#A6E7FF" />
        </Column>
        <Column sm={12} md={9} lg={7}>
          <Project
            logo={ScenographicsLogo()}
            url="http://medium.com/scenographics"
            externalUrl
            title="Scenographics"
            abstract="Interview series with creative people within the festival scene. (German only)"
            readMoreText=" on Medium ↗"
          />
        </Column>
      </Row>
    )
  }
}
