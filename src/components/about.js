import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { color, fontSize } from 'styles/theme'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'

const Big = styled.span`
  font-size: ${fontSize.f6};
  color: ${color.grey900};
  font-weight: 700;
  letter-spacing: -0.4px;
  line-height: 1.35;
  ${media.lg`
    font-size: ${fontSize.f5};
    letter-spacing: -0.3px;
  `}
  ${media.sm`
    font-size: ${fontSize.f5};
  `}
`

function About() {
  return (
    <TwoColumns
      leftColumn={<SectionHeading>About</SectionHeading>}
      rightColumn={
        <Fragment>
          <Big>
            Hi. I'm Gabriel, a UI and UX designer living in&nbsp;Berlin. I bring
            ideas to life with design and&nbsp;code.
          </Big>
          <p>
            In my work I strive to optimize the aesthetic value and usability of
            products without losing sight of the technical challenges and
            limitations.
          </p>
          <p>
            Currently I'm designing the future of medical infrastructure at{' '}
            <Link to="/lifetime">LifeTime</Link> and hosting electronic music
            festivals with <Link to="/kellerkind">Kellerkind</Link>.
          </p>
          <p style={{ marginBottom: 0 }}>
            Outside of work I'm passionate about my family, climbing and riding
            all kinds of boards on roads, water and snow.
          </p>
        </Fragment>
      }
    />
  )
}

export default About
