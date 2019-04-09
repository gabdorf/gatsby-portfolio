import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { color, fontSize } from 'styles/theme'

import Icon from 'components/icons'
import Spirograph from 'components/spirograph'

const HeroSection = styled.section`
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100vw;
`

const Header = styled.div`
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
  padding: 24px 0 24px 24px;
  ${media.sm`
    padding: 24px 0 0 0;
  `};
`

const Name = styled.h1`
  white-space: nowrap;
  font-size: ${fontSize.f8};
  text-align: left;
  margin: 0;
  line-height: 1;
  ${media.sm`
    text-align: center;
  `};
`

const Role = styled.div`
  font-size: ${fontSize.f6};
  color: ${color.grey700};
  text-align: left;
  line-height: 1.2;
  ${media.sm`
    text-align: center;
  `};
`

const SocialIconWrapper = styled.div`
  display: grid;
  grid-column-gap: 8px;
  grid-template-columns: auto auto auto;
  padding: 24px 24px 0 0;
  ${media.sm`
  `};
`

const SocialLink = styled.a`
  height: 40px;
  color: ${color.grey900};
  transition: all 200ms;
  :hover {
    color: ${color.blue500};
  }
`

const Tooltip = styled.div`
  padding: 2px 24px 0 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const TooltipIcon = styled.div`
  transform: rotate(270deg);
`

const TooltipText = styled.div`
  font-size: ${fontSize.f4};
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
  width: 88px;
  height: 88px;
`

const ArrowLink = styled(AnchorLink)`
  display: block;
  height: 88px;
  width: 88px;
  color: ${color.grey900};
  transition: all 200ms;
  :hover {
    color: ${color.blue500};
  }
  ${media.sm`
    display: none;
  `};
`

function Hero() {
  return (
    <HeroSection>
      <Spirograph color="#333" speed={0.012} />
      <Header>
        <LogoWrapper>
          <Name>Gabriel Adorf</Name>
          <Role>UI / UX Design</Role>
        </LogoWrapper>
        <div>
          <SocialIconWrapper>
            <SocialLink href="https://twitter.com/gabdorf" target="blank">
              <Icon glyph="twitter" size={40} />
            </SocialLink>
            <SocialLink href="https://dribbble.com/gabdorf" target="blank">
              <Icon glyph="dribbble" size={40} />
            </SocialLink>
            <SocialLink href="mailto:gabriel.adorf@gmail.com">
              <Icon glyph="mail" size={40} />
            </SocialLink>
          </SocialIconWrapper>
          <Tooltip>
            <TooltipIcon>
              <Icon glyph="arrow" size={24}/>
            </TooltipIcon>
            <TooltipText>Twitter</TooltipText>
          </Tooltip>
        </div>
      </Header>
      <Spacer />
      <ArrowWrapper>
        <ArrowCenter>
          <ArrowLink href="#about">
            <Icon glyph="arrow" size={48} />
          </ArrowLink>
        </ArrowCenter>
      </ArrowWrapper>
    </HeroSection>
  )
}

export default Hero
