import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { color, fontSize, shadow } from 'styles/theme'

import Header from 'components/header'

const BackArrow = styled.svg`
  margin: 16px 0 0 24px;
  position: absolute;
  fill: #333;
  :hover {
    fill: red;
  }
  ${media.sm`
    display: none;
  `};
`

const Title = styled.div`
  width: 100%;
  text-align: center;
`

const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

function ArticleHeader(props) {
  return (
    <div>
      <Header article />
      <Link to="/#projects">
        <BackArrow
          width="28"
          height="42"
          viewBox="0 0 28 42"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.84 17.69L21.295.232l6.01 6.01-14.45 14.452 14.45 14.45-6.01 6.012L.834 20.695 3.84 17.69z"
            fillRule="nonzero"
          />
        </BackArrow>
      </Link>
      <Title>
        <h1>{props.title}</h1>
      </Title>
    </div>
  )
}

export default ArticleHeader
