import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import ColorBar from 'components/colorbar'
import Project from 'components/project'

import ScenographicsLogo from 'img/scenographicslogo'

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

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  grid-column-gap: 200px;
`

const LeftColumn = styled.div``

const RightColumn = styled.div``

const ScenographicsLink = (
  <a href="http://medium.com/scenographics">Read More an Medium ↗</a>
)

function Writing() {
  return (
    <TwoColumn>
      <LeftColumn>
        <h2>Writing</h2>
      </LeftColumn>
      <RightColumn>
        <Project
          logo={ScenographicsLogo()}
          title="Scenographics"
          abstract="Interview series with creative people within the festival scene. (German only)"
          link={ScenographicsLink}
        />
      </RightColumn>
    </TwoColumn>
  )
}

export default Writing
