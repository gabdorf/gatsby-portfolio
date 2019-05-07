import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { color } from 'styles/theme'

import Header from 'components/header'
import Icon from 'components/icons'

const TitleBar = styled.div``

const BackArrow = styled(Link)`
  position: absolute;
  left: 10px;
  transform: rotate(90deg);
  max-width: 64px;
  max-height: 64px;
  color: ${color.grey900};
  ${media.sm`
    display: none;
  `};
  &:visited {
    color: ${color.grey900};
  }
  &:hover {
    color: ${color.grey900};
  }
  &:active {
    color: ${color.grey900};
  }
`

const Title = styled.div`
  width: 100%;
  text-align: center;
`

function ArticleHeader(props) {
  return (
    <Fragment>
      <Header article />
      <TitleBar>
        <BackArrow to="/#projects">
          <Icon glyph="arrow" size={64} />
        </BackArrow>
        <Title>
          <h1>{props.title}</h1>
        </Title>
      </TitleBar>
    </Fragment>
  )
}

export default ArticleHeader
