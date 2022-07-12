import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import Project1Logo from 'img/articles/project1/img1.jpg'

const Image = styled.div`
  background: #eee;
  background-size: cover;
  background-position: center center;
  flex: 0 0 120px;
  height: 120px;
  margin-right: 40px;
  border-radius: 8px;
`

const ProjectLogo = props => {
  return <Image />
}

export default ProjectLogo
