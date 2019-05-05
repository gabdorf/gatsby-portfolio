import React from 'react'
import styled, { keyframes } from 'styled-components'
import media from 'utils/media-queries'
// import AnchorLink from 'react-anchor-link-smooth-scroll'

import { color, fontSize } from 'styles/theme'

import Header from 'components/header'
import Spirograph from 'components/spirograph'

const Fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const HeroSection = styled.section`
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100vw;
  ${media.sm`
    height: calc(100vh - 76px);
  `}
`

const Spacer = styled.div`
  flex: 1 1 0;
`

const GearValues = styled.div`
  display: flex;
  justify-content: center;
  z-index: 10;
  text-align: center;
  align-items: flex-end;
  opacity: 0;
  animation: ${Fade} 1s linear 400ms;
  animation-fill-mode: forwards;
  padding-bottom: 48px;
`

class Hero extends React.Component {
  getGearValues = (gearA, gearB, ratio) => {
    this.setState({
      gearA: gearA,
      gearB: gearB,
      ratio: ratio,
    })
  }

  render() {
    return (
      <HeroSection>
        <Spirograph speed={0.012} getGearValues={this.getGearValues} />
        <Header />
        <Spacer />
        {/* <GearValues>
          {this.state.gearA} | {this.state.gearB} | {this.state.ratio}
        </GearValues> */}
      </HeroSection>
    )
  }
}

export default Hero
