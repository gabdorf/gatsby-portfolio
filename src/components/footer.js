import React from 'react'
import styled from 'styled-components'

const FooterSection = styled.div`
  color: #a6a6a6;
  background: #1a1a1a;
  height: 200px;
  padding-top: 55px;
  text-align: center;
  font-size: 0.9em;
  line-height: 1.4em;
  font-family: 'bebasneue';
`

const FooterText = styled.div`
  margin: 20px auto 0 auto;
`

const FooterLink = styled.a`
  color: #a6a6a6 !important;
`

function Footer() {
  return (
    <FooterSection>
      <FooterText>
        This page is open source, Check it out on{' '}
        <FooterLink href="https://github.com/gabdorf/gabriel-adorf-portfolio">
          Github
        </FooterLink>
        .<br />© 2018 Gabriel Adorf&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <FooterLink href="/imprint">Imprint</FooterLink>
      </FooterText>
    </FooterSection>
  )
}

export default Footer
