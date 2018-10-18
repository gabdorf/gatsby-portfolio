import React from 'react'
import media from '../utils/media-queries'
import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Spirograph from '../components/spirograph'

const HeroSection = styled.section`
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100vw;
`

const FrontPageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex: 0 0 auto;
  ${media.sm`
    display: block;
  `};
  z-index: 10;
`

const LogoWrapper = styled.div`
  color: #333;
  padding: 24px 0 24px 24px;
  ${media.sm`
    padding: 24px 0 0 0;
  `};
`

const Name = styled.h1`
  font-family: 'bebasneue', Helvetica, sans-serif;
  font-size: 80px;
  line-height: 60px;
  text-align: left;
  margin: 0;
  user-select: none;
  ${media.md`
    font-size: 70px;
    text-align: center;
  `} ${media.sm`
    font-size: 60px;
    text-align: center;
  `};
`

const Role = styled.div`
  font-size: 1.2em;
  line-height: 1em;
  text-align: left;
  user-select: none;
  ${media.sm`
    text-align: center;
  `};
`

const SocialIconWrapper = styled.div`
  display: flex;
  padding: 24px 24px 24px 0;
  ${media.sm`
    justify-content: center;
    padding: 8px;
  `};
`

const SocialIcon = styled.svg`
  /* margin: 4px;
  ${media.sm`
    margin-left: 0 4px 0 4px;
  `} */
  fill: #333;
  :hover {
    fill: red;
  }
`

const SocialLink = styled.a`
  margin: 4px;
  width: 48px;
  height: 48px;
`

const Spacer = styled.div`
  flex: 1 1 0;
`

const ArrowWrapper = styled.div`
  flex: 0 0 0;
  z-index: 10;
`

const ArrowCenter = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 100px;
  height: 100px;
`

const ArrowLink = styled(AnchorLink)`
  display: block;
  height: 100px;
  width: 100px;
  ${media.sm`
    display: none;
  `};
`

const Arrow = styled.svg`
  fill: #dcdcdc;
  height: 100px;
  width: 100px;
  :hover {
    fill: #555;
  }
  ${media.sm`
    display: none;
  `};
`

function Hero() {
  return (
    <HeroSection>
      <Spirograph color="#333" speed={0.012} />
      <FrontPageHeader>
        <LogoWrapper>
          <Name>Gabriel&nbsp;Adorf</Name>
          <Role>UI / UX Design</Role>
        </LogoWrapper>
        <SocialIconWrapper>
          <SocialLink href="https://twitter.com/gabdorf">
            <SocialIcon
              role="img"
              aria-labelledby="twitterTitle twitterDesc"
              width="48"
              height="48"
              xmlns="http://www.w3.org/2000/svg"
            > <title id="twitterTitle">Gabriel Adorf's twitter profile</title><desc id="twitterDesc">Gabriel Adorf's twitter profile</desc>
              <path
                d="M24 0C10.746 0 0 10.746 0 24s10.746 24 24 24 24-10.746 24-24S37.254 0 24 0zm12.132 19.29c.366 8.08-5.66 17.088-16.328 17.088-3.244 0-6.262-.952-8.804-2.582 3.048.36 6.09-.488 8.504-2.378a5.758 5.758 0 0 1-5.368-3.99c.902.172 1.79.122 2.596-.098-2.762-.556-4.67-3.044-4.608-5.706a5.73 5.73 0 0 0 2.602.718 5.753 5.753 0 0 1-1.778-7.67 16.306 16.306 0 0 0 11.84 6.002c-.838-3.592 1.888-7.054 5.598-7.054a5.74 5.74 0 0 1 4.192 1.814 11.458 11.458 0 0 0 3.648-1.394 5.768 5.768 0 0 1-2.526 3.178 11.46 11.46 0 0 0 3.298-.906 11.53 11.53 0 0 1-2.866 2.978z"
                fillRule="nonzero"
              />
            </SocialIcon>
          </SocialLink>
          <SocialLink href="https://dribbble.com/gabdorf">
            <SocialIcon
              aria-labelledby="dribbbleTitle dribbbleDesc" 
              role="img"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            > <title id="dribbbleTitle">Gabriel Adorf's dribbble profile</title><desc id="dribbbleDesc">Gabriel Adorf's dribbble profile</desc>
              <path
                d="M11.528 9.985c-1.42.417-3.11.632-5.067.646.406-1.653 1.52-3.03 3.004-3.783.777 1.016 1.464 2.063 2.064 3.138zm.965 1.93c-.124-.28-.254-.56-.39-.835-1.623.51-3.562.77-5.805.772L6.29 12c0 1.404.504 2.692 1.34 3.695 1.266-1.9 2.89-3.164 4.863-3.78zm-3.97 4.64c1.57 1.226 3.67 1.59 5.624.837-.252-1.488-.65-2.94-1.19-4.352-1.82.542-3.285 1.714-4.434 3.516zm7.075-9.13c-.977-.753-2.197-1.208-3.525-1.208-.49 0-.964.068-1.418.184.764 1.03 1.44 2.087 2.035 3.173 1.236-.524 2.204-1.24 2.908-2.147zM24.073 12c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5 0c0-3.866-3.135-7-7-7s-7 3.134-7 7 3.135 7 7 7 7-3.134 7-7zm-5.824-1.35c.156.325.304.652.446.98 1.26-.216 2.64-.203 4.143.043-.074-1.292-.567-2.474-1.355-3.403-.807 1.005-1.89 1.798-3.236 2.38zm.913 2.133c.49 1.31.865 2.65 1.12 4.023 1.31-.88 2.24-2.284 2.496-3.91-1.318-.227-2.523-.267-3.617-.113z"
                fillRule="nonzero"
              />
            </SocialIcon>
          </SocialLink>
          <SocialLink href="mailto:gabriel.adorf@gmail.com">
            <SocialIcon
              aria-labelledby="mailTitle mailDesc"
              role="img"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            > <title id="mailTitle">Send email to Gabriel Adorf</title><desc id="mailDesc">Send email to Gabriel Adorf</desc>
              <path
                d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.566 7.37L12 12.594 5.433 7.37h13.133zm.01 9.22H5.425V8.748L12 13.978l6.575-5.23v7.842z"
                fillRule="nonzero"
              />
            </SocialIcon>
          </SocialLink>
        </SocialIconWrapper>
      </FrontPageHeader>
      <Spacer />
      <ArrowWrapper>
        <ArrowCenter>
          <ArrowLink href="#about">
            <Arrow
              aria-labelledby="arrowTitle arrowDesc"
              role="img"
              width="100"
              height="100"
              viewBox="-32 -40 100 100"
              xmlns="http://www.w3.org/2000/svg"
            > <title id="arrowTitle">Scroll down arrow</title><desc id="arrowDesc">Scroll down arrow</desc>
              <path
                d="M5.647.064L-.01 5.72 18 23.73 36.01 5.72 30.352.065 18 12.417"
                fillRule="nonzero"
              />
            </Arrow>
          </ArrowLink>
        </ArrowCenter>
      </ArrowWrapper>
    </HeroSection>
  )
}

export default Hero
