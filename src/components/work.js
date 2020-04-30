import React, { Fragment } from 'react'
import Link from 'gatsby-link'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import Project from 'components/project'

import KellerkindLogo from 'img/kellerkindlogo'
import PalettteAppLogo from 'img/palettteapplogo'
import LifeTimeLogo from 'img/lifetimelogo'
import BamLogo from 'img/bamlogo'

const LifeTimeLink = <Link to="/lifetime">Read More</Link>
const PalettteLink = <Link to="/palettteapp">Read More</Link>
const KellerkindLink = <Link to="/kellerkind">Read More</Link>
const BamLink = <Link to="/bam">Read More</Link>

const Work = () => {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Work</SectionHeading>}
      rightColumn={
        <Fragment>
          <Project
            logo={LifeTimeLogo()}
            title="LifeTime"
            abstract="Secure data exchange infrastructure for healthcare."
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
            abstract="A social event company organizing two festivals for electronic music and art with ~20.000 yearly visitors north of munich."
            link={KellerkindLink}
          />
          <Project
            logo={BamLogo()}
            title="Bäm"
            abstract="Climbing products and other stuff that give you the extra bäm effect."
            link={BamLink}
          />
        </Fragment>
      }
    />
  )
}

export default Work
