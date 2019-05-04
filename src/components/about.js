import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { fontSize } from 'styles/theme'

import WhenInView from 'components/wheninView'

import ProfileImage from 'img/gabrieladorf.svg'

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
  font-size: ${fontSize.f7};
  font-weight: 700;
  ${media.md`
    font-size: ${fontSize.f6};
  `}
`

const Image = styled.div`
  width: 200px;
  height: 200px;
  background: gainsboro;
  border-radius: 8px;
`

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-column-gap: 160px;
`

const LeftColumn = styled.div`
`

const RightColumn = styled.div`
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
              Hi. I'm Gabriel, a UI and UX designer based in&nbsp;Berlin. I help
              to bring ideas to life with design and code.
            </Big>
          </p>
          <p>
            In my work I always strive to optimize the aesthetic value and
            usability of products without losing sight of the technical
            challenges and limitations.
          </p>
          <p>
            Currently I'm designing the future of medical infrastructure at{' '}
            <Link to="/lifetime">LifeTime</Link>.
          </p>
          <p style={{ marginBottom: 0 }}>
            Outside of work I'm passionate about my family, climbing and riding
            all kinds of boards on water and snow.
          </p>
        </RightColumn>
      </TwoColumn>
    </Center>
  )
}

export default About
