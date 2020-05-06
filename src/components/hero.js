import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import Header from 'components/header'
import Spirograph from 'components/spirograph'

const HeroSection = styled.section`
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  ${media.sm`
    height: calc(100vh - 76px);
  `}
`

const Hero = () => {
  return (
    <HeroSection>
      <Spirograph />
      <Header />
    </HeroSection>
  )
}
export default Hero
