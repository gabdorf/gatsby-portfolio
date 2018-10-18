import React from 'react'
import styled from 'styled-components'
import media from '../utils/media-queries'

import ColorBar from '../components/colorbar'
import Project from '../components/project'
import ScenographicsLogo from '../img/scenographicslogo'

const Div = styled.div`
  display: flex;
  flex-direction: row;
  ${media.md`
    flex-direction: column;
  `} justify-content: space-between;
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

const ScenographicsLink = (
  <a href="http://medium.com/scenographics">Read More an Medium ↗</a>
)

function Writing() {
  return (
    <Div>
      <Title>
        <h2>Writing</h2>
        <ColorBar barColor="#A6E7FF" />
      </Title>
      <Projects>
        <Project
          logo={ScenographicsLogo()}
          title="Scenographics"
          abstract="Interview series with creative people within the festival scene. (German only)"
          link={ScenographicsLink}
        />
      </Projects>
    </Div>
  )
}

export default Writing
