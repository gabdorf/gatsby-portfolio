import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'

import ColorBar from '../components/colorbar'
import ProfileImage from '../img/gabrieladorf.svg'

const ProfileImageWrapper = styled.div`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  background-image: url(${ProfileImage});
  background-size: cover;
  background-position: 20% 22%;
  height: 280px;
  @media (min-width: 768px) {
    background-position: 60% center;
    border: none;
    height: 470px;
  }
  @media (min-width: 1400px) {
    border: none;
  }
`

export default class About extends React.Component {
  render() {
    return (
      <Row alignItems="flex-end">
        <Column xs={12} sm={12} smShift={0} md={6} lg={5} lgShift={1}>
          <ProfileImageWrapper />
        </Column>
        <Column xs={12} sm={12} smShift={0} md={6} lg={5}>
          <h2>About</h2>
          <ColorBar barColor="#FFA6A6" />
          <p>
            <strong>
              Hi. I'm Gabriel, a UI and UX designer
              based in&nbsp;Berlin.
            </strong>
          </p>
          <p>
            After having studied management and engineering, I became increasingly involved with the subject of design in its full spectrum. 
          </p>
          <p>
            Since then I accompanied the development of numerous different digital and physical products from the first sketches up to market readiness and beyond.
          </p>
          <p style={{ marginBottom: 0 }}>
            In my work I try to balance the understanding of the technical aspects of creating products with the aesthetic and usability requirements from a user's point of view. Currently I am
            working with <Link to="/lifetime">LifeTime</Link>.
          </p>
        </Column>
      </Row>
    )
  }
}
