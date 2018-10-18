import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from '../utils/media-queries'

import ColorBar from '../components/colorbar'
import ProfileImage from '../img/gabrieladorf.svg'

const Div = styled.div`
  display: flex;
  flex-direction: row;
  ${media.md`
    flex-direction: column;
  `};
`

const ProfileImageWrapper = styled.div`
  width: 50%;
  align-self: flex-end;
  background-image: url(${ProfileImage});
  background-size: cover;
  background-position: 60% center;
  height: 470px;
  margin-right: 24px;
  ${media.md`
    border-bottom: 1px solid #e0e0e0;
    background-position: 20% 22%;
    height: 330px;
    width: 100%;
    margin: 0;
    margin-bottom: 24px;
  `};
`

const AboutWrapper = styled.div`
  width: 50%;
  ${media.md`
    width: 100%;
    max-width: 100%;
  `};
`

function About() {
  return (
    <Div>
      <ProfileImageWrapper />
      <AboutWrapper>
        <h2>About</h2>
        <ColorBar barColor="#FFA6A6" />
        <p>
          <strong>
            Hi. I'm Gabriel, a UI and UX designer based in&nbsp;Berlin.
          </strong>
        </p>
        <p>
          After having studied management and engineering, I became increasingly
          involved with the subject of design in its full spectrum.
        </p>
        <p>
          Since then I accompanied the development of numerous different digital
          and physical products from the first sketches up to market readiness
          and beyond.
        </p>
        <p style={{ marginBottom: 0 }}>
          In my work I try to balance the understanding of the technical aspects
          of creating products with the aesthetic and usability requirements
          from a user's point of view. Currently I am working with{' '}
          <Link to="/lifetime">LifeTime</Link>.
        </p>
      </AboutWrapper>
    </Div>
  )
}

export default About
