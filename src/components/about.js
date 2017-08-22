import React from 'react'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'

import ColorBar from '../components/colorbar'
import ProfileImage from '../img/gabrieladorf.svg'

const ProfileImageWrapper = styled.div`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  background-image: url(${ProfileImage});
  background-size: cover;
  background-position: 50px 22%;
  height: 280px;
  @media (min-width: 768px) {
    background-position: 60% center;
    border: none;
    height: 470px;
  }
  @media (min-width: 1400px) {
    border:none;
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
              Hi. I'm Gabriel, a designer and festival promoter
              based&nbsp;in&nbsp;Berlin.
            </strong>
          </p>
          <p>
            I studied engineering & economy at the technical university berlin,
            but never lost my passion for design out of view.
          </p>
          <p style={{ marginBottom: 0 }}>
            I contributed designs to several side projects during my time at
            university and decided to pursue this path full time after
            graduation. Currently I am working with{' '}
            <a href="https://lifetime.eu">LifeTime</a>, raising a child and
            learning how to code.
          </p>
        </Column>
      </Row>
    )
  }
}
