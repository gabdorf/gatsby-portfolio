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
          <ColorBar color="#FFA6A6" />
          <p>
            <strong>
              Hi. I'm Gabriel, a user interface and user experience designer based
              in&nbsp;Berlin.
            </strong>
          </p>
          <p>
            I studied business & engineering at the Technical University and
            soon after graduation rediscovered my passion for design.
          </p>
          <p style={{ marginBottom: 0 }}>
            Since then I have always tried to balance the understanding of the
            technical aspects of creating products with the aesthetic and
            usability requirements from a user's point of view. Currently I am
            working with <Link to="/lifetime">LifeTime</Link>, raising a child
            and learning how to&nbsp;code.
          </p>
        </Column>
      </Row>
    )
  }
}
