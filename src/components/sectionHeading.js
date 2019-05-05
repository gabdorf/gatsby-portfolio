import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'
import { color, fontSize } from 'styles/theme'

const H2 = styled.h2`
  border-top: 2px solid ${color.grey900};
  display: inline-block;
  font-size: ${fontSize.f5};
  color: ${color.grey900};
  letter-spacing: 5px;
  text-transform: uppercase;
  font-weight: 700;
  margin: 6px 0 0 0;
  padding: 16px 0 0 0;
  line-height: 1.1;
  ${media.md`
      border: none;
      margin-bottom: 72px;
      text-transform: none;
      letter-spacing: 0px;
      font-size: ${fontSize.f6};
    `}
  ${media.sm`
      margin-bottom: 60px;
      border-bottom: 2px solid ${color.grey900};
      padding-bottom: 8px;
    `}
`

const SectionHeading = props => {
  return <H2>{props.children}</H2>
}

export default SectionHeading
