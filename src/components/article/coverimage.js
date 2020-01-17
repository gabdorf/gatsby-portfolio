import React from 'react'
import styled from 'styled-components'

import media from 'utils/media-queries'

const Image = styled.div`
  background: #cdcdcd;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: ${props => props.focusX} ${props => props.focusY};
  width: 100%;
  height: calc(100vh - 170px);
  ${media.lg`
    height: calc(100vh - 148px);
  `}
  ${media.sm`
    height: calc(100vh - 184px);
  `}
`

function LargeImage(props) {
  return <Image src={props.src} focusX={props.focusX} focusY={props.focusY} />
}

export default LargeImage
