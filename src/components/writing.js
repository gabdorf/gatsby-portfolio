import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import TwoColumns from 'components/twoColumns'
import Project from 'components/project'

import ScenographicsLogo from 'img/scenographicslogo'

const ScenographicsLink = (
  <a href="http://medium.com/scenographics">Read More an Medium ↗</a>
)

function Writing() {
  return (
    <TwoColumns
      wide
      leftColumn={<h2>Writing</h2>}
      rightColumn={
        <Project
          logo={ScenographicsLogo()}
          title="Scenographics"
          abstract="Interview series with creative people within the festival scene. (German only)"
          link={ScenographicsLink}
        />
      }
    />
  )
}

export default Writing
