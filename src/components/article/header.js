import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from '../../utils/media-queries'

import ColorBar from '../../components/colorbar'

const ArticleHeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px;
`

const LogoLink = styled(Link)`
  text-decoration: none !important;
  color: #333;
  :visited,
  link,
  active {
    color: #333;
    text-decoration: none !important;
  }
  :hover {
    text-decoration: none !important;
    color: red !important;
  }
`

const Logo = styled.div`
  font-family: 'bebasneue', Helvetica, sans-serif;
  font-size: 36px;
  line-height: 32px;
`
const SocialIconWrapper = styled.div`
  display: flex;
`

const SocialIcon = styled.svg`
  margin-left: 8px;
  fill: #333;
  :hover {
    fill: red;
  }
`

const SocialLink = styled.a``

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
      <ArticleHeaderSection>
        <LogoLink to="/">
          <Logo>Gabriel Adorf</Logo>
        </LogoLink>
        <SocialIconWrapper>
          <SocialLink href="https://twitter.com/gabdorf">
            <SocialIcon
              width="34"
              height="32"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.478 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.13-.477-4.402-1.292 1.524.18 3.045-.244 4.252-1.19-1.256-.022-2.317-.853-2.684-1.994.45.086.895.06 1.298-.05-1.38-.277-2.335-1.52-2.304-2.852.388.215.83.344 1.3.36-1.278-.856-1.64-2.545-.888-3.836 1.416 1.738 3.533 2.88 5.92 3-.42-1.795.944-3.526 2.8-3.526.824 0 1.57.35 2.095.907.654-.128 1.27-.368 1.824-.697-.214.67-.67 1.233-1.262 1.59.58-.07 1.135-.225 1.65-.454-.385.578-.87 1.084-1.434 1.49z"
                fillRule="nonzero"
              />
            </SocialIcon>
          </SocialLink>
          <SocialLink href="https://dribbble.com/gabdorf">
            <SocialIcon
              width="32"
              height="32"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.528 9.985c-1.42.417-3.11.632-5.067.646.406-1.653 1.52-3.03 3.004-3.783.777 1.016 1.464 2.063 2.064 3.138zm.965 1.93c-.124-.28-.254-.56-.39-.835-1.623.51-3.562.77-5.805.772L6.29 12c0 1.404.504 2.692 1.34 3.695 1.266-1.9 2.89-3.164 4.863-3.78zm-3.97 4.64c1.57 1.226 3.67 1.59 5.624.837-.252-1.488-.65-2.94-1.19-4.352-1.82.542-3.285 1.714-4.434 3.516zm7.075-9.13c-.977-.753-2.197-1.208-3.525-1.208-.49 0-.964.068-1.418.184.764 1.03 1.44 2.087 2.035 3.173 1.236-.524 2.204-1.24 2.908-2.147zM24.073 12c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5 0c0-3.866-3.135-7-7-7s-7 3.134-7 7 3.135 7 7 7 7-3.134 7-7zm-5.824-1.35c.156.325.304.652.446.98 1.26-.216 2.64-.203 4.143.043-.074-1.292-.567-2.474-1.355-3.403-.807 1.005-1.89 1.798-3.236 2.38zm.913 2.133c.49 1.31.865 2.65 1.12 4.023 1.31-.88 2.24-2.284 2.496-3.91-1.318-.227-2.523-.267-3.617-.113z"
                fillRule="nonzero"
              />
            </SocialIcon>
          </SocialLink>
          <SocialLink href="mailto:gabriel.adorf@gmail.com">
            <SocialIcon
              width="32"
              height="32"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.566 7.37L12 12.594 5.433 7.37h13.133zm.01 9.22H5.425V8.748L12 13.978l6.575-5.23v7.842z"
                fillRule="nonzero"
              />
            </SocialIcon>
          </SocialLink>
        </SocialIconWrapper>
      </ArticleHeaderSection>
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
      <Center>
        <ColorBar barColor="#A6FFD7" />
      </Center>
    </div>
  )
}

export default ArticleHeader
