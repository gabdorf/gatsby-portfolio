import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { fontSize } from 'styles/theme'

import Section from 'components/section'

const FooterText = styled.div`
  text-align: center;
  font-size: ${fontSize.f3};
  ${media.sm`
    text-align: left;
    font-size: ${fontSize.f2};
  `}
`

function Footer() {
  return (
    <Section>
      <FooterText>
        This page is open source, Check it out on{' '}
        <a href="https://github.com/gabdorf/gabriel-adorf-portfolio">Github</a>
        .<br />© 2018 Gabriel Adorf&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <a href="/imprint">Imprint</a>
      </FooterText>
    </Section>
  )
}

export default Footer
