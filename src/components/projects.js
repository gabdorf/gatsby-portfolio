import React from 'react'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'

import ColorBar from '../components/colorbar'

import Project from '../components/project'

import KellerkindLogo from '../img/kellerkindlogo'
import LifeTimeLogo from '../img/lifetimelogo'
import BamLogo from '../img/bamlogo'

const Projects = () => ({
  render() {
    return (
      <Row>
        <Column xs={12} sm={12} md={12} lg={3} lgShift={1}>
          <h2>Projects</h2>
          <ColorBar color="#A6FFD7" />
        </Column>
        <Column sm={12} md={9} lg={7}>
          <Project
            logo={LifeTimeLogo()}
            url="/lifetime"
            title="LifeTime"
            abstract="A digital health solution facilitating medical data exchange."
          />
          <Project
            logo={KellerkindLogo()}
            url="/kellerkind"
            title="Kellerkind"
            abstract="A social event company organizing two open air festivals with 15.000 yearly event visitors north of munich."
          />
          <Project
            logo={BamLogo()}
            url="/bam"
            title="Bäm"
            abstract="Climbing products and other stuff that gives you the bäm effect."
          />
        </Column>
      </Row>
    )
  },
})

export default Projects
