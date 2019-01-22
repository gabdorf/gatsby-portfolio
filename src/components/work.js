import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import media from '../utils/media-queries'

import ColorBar from '../components/colorbar'
import Project from '../components/project'

import KellerkindLogo from '../img/kellerkindlogo'
import PalettteAppLogo from '../img/palettteapplogo'
import LifeTimeLogo from '../img/lifetimelogo'
import BamLogo from '../img/bamlogo'

const Div = styled.div`
  display: flex;
  flex-direction: row;
  ${media.md`
    flex-direction: column;
  `};
`

const Title = styled.div`
  width: 30%;
  ${media.md`
    width: 100%;
  `};
`

const Projects = styled.div`
  width: 70%;
  ${media.md`
    width: 100%;
  `};
`

const LifeTimeLink = <Link to="/lifetime">Read More</Link>
const PalettteLink = <Link to="/palettteapp">Read More</Link>
const KellerkindLink = <Link to="/kellerkind">Read More</Link>
const BamLink = <Link to="/bam">Read More</Link>

function Work() {
  return (
    <Div>
      <Title>
        <h2>Work</h2>
        <ColorBar barColor="#A6FFD7" />
      </Title>
      <Projects>
        <Project
          logo={LifeTimeLogo()}
          title="LifeTime"
          abstract="A digital health solution facilitating medical data exchange."
          link={LifeTimeLink}
        />
        <Project
          logo={PalettteAppLogo()}
          title="Palettte App"
          abstract="An app that allows you to build, analyze and edit smooth color palettes."
          link={PalettteLink}
        />
        <Project
          logo={KellerkindLogo()}
          title="Kellerkind"
          abstract="A social event company organizing two open air festivals with 15.000 yearly event visitors north of munich."
          link={KellerkindLink}
        />
        <Project
          logo={BamLogo()}
          title="Bäm"
          abstract="Climbing products and other stuff that gives you the bäm effect."
          link={BamLink}
        />
      </Projects>
    </Div>
  )
}

export default Work
