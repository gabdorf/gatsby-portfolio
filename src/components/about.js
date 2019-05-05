import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { color, fontSize } from 'styles/theme'

import WhenInView from 'components/wheninView'

const Center = styled.div`
  display: flex;
  justify-content: center;
`

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto auto;
  grid-row-gap: 128px;
  grid-column-gap: 128px;
  max-width: 1024px;
  ${media.lg`
    grid-row-gap: 96px;
    grid-column-gap: 96px;
  `}
  ${media.md`
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;
    max-width: 640px;
    grid-row-gap: 64px;
  `}
`

const Empty = styled.div`
  ${media.md`
    display: none;
  `}
`

const Reveal = styled.div`
  opacity: ${props => (props.visible ? '1' : '0')};
  transform: translateY(${props => (props.visible ? '0px' : '30px')});
  transition: all 1s;
`

const Big = styled.span`
  font-size: ${fontSize.f6};
  color: ${color.grey900};
  font-weight: 700;
  ${media.sm`
    font-size: ${fontSize.f5};
  `}
`

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  justify-content: space-between;
  width: 100%;
  ${media.md`
    grid-template-columns: auto;
    justify-content: center;
  `}
`

const LeftColumn = styled.div``

const RightColumn = styled.div`
  max-width: 544px;
`

function About() {
  return (
    <Center>
      <TwoColumn>
        <LeftColumn>
          <h2>About</h2>
        </LeftColumn>
        <RightColumn>
          <p>
            <Big>
              Hi. I'm Gabriel, a UI and UX designer based in&nbsp;Berlin. I
              bring ideas to life with design and&nbsp;code.
            </Big>
          </p>
          <p>
            In my work I strive to optimize the aesthetic value and usability of
            products without losing sight of the technical challenges and
            limitations.
          </p>
          <p>
            Currently I'm designing the future of medical infrastructure at{' '}
            <Link to="/lifetime">LifeTime</Link>.
          </p>
          <p style={{ marginBottom: 0 }}>
            Outside of work I'm passionate about my family, climbing and riding
            boards on water and snow.
          </p>
        </RightColumn>
      </TwoColumn>
    </Center>
  )
}

export default About
