import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { fontSize } from 'styles/theme'

import Section from 'components/section'

const FooterText = styled.div`
  text-align: center;
  font-size: ${fontSize.f2};
  ${media.lg`
    font-size: ${fontSize.f1};
  `}
  ${media.sm`
    text-align: left;
    font-size: ${fontSize.f1};
  `}
`

const Footer = () => {
  return (
    <Section>
      <FooterText>
        This page is open source, Check it out on&nbsp;
        <a href="https://github.com/gabdorf/gabriel-adorf-portfolio">Github</a>
        <br />© 2020 Gabriel Adorf&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <a href="/imprint">Imprint</a>
      </FooterText>
    </Section>
  )
}

export default Footer
