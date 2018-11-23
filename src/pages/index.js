import React from 'react'
import styledNormalize from 'styled-normalize'
import Helmet from 'react-helmet'
import { createGlobalStyle } from 'styled-components'
import Breakpoints from '../utils/breakpoints'

import Hero from '../components/hero'
import Section from '../components/section'
import About from '../components/about'
import Work from '../components/work'
import Writing from '../components/writing'
import Footer from '../components/footer'

import BebasNeueBoldWoff2 from '../fonts/bebasneuebold.woff2'
import BebasNeueBoldWoff from '../fonts/bebasneuebold.woff'
import CharterRegularWoff2 from '../fonts/charterregular.woff2'
import CharterRegularWoff from '../fonts/charterregular.woff'
import CharterBoldWoff2 from '../fonts/charterbold.woff2'
import CharterBoldWoff from '../fonts/charterbold.woff'

const GlobalStyle = createGlobalStyle`

  /* ${styledNormalize} */

  @font-face {
    font-family: 'bebasneue';
    src: url(${BebasNeueBoldWoff2}) format('woff2'),
         url(${BebasNeueBoldWoff}) format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'charter';
    src: url(${CharterRegularWoff2}) format('woff2');
    src: url(${CharterRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'charter';
    src: url(${CharterBoldWoff2}) format('woff2');
    src: url(${CharterBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
  }

  a {
    color: #333;
    text-decoration: underline;
    :hover {
      color: red!important;
      text-decoration: underline
    }
    :visited {
      color: #333;
    }
  }

  html {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
  }

  p+ h2 {
    margin-top: 1.2em;
  }

  p + h3 {
    margin-top: 1.5em;
  }
`

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <html lang="en" />
          <title>Gabriel Adorf</title>
          <meta name="description" content="Gabriel Adorf's projects" />
          <meta
            name="keywords"
            content="design, ux, ui, product, graphic, health, climbing, app, interface, experience, festival, techno, code"
          />
          <meta
            property="og:image"
            content="https://www.gabrieladorf.com/static/kellerkindCover.14f87246.jpg"
          />
          <meta property="og:description" content="Gabriel Adorf's projects" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://gabrieladorf.com" />
          <meta property="og:title" content="Gabriel Adorf" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
        <GlobalStyle />
        {/* <Breakpoints /> */}
        <Hero />
        <Section id={'about'}>
          <About />
        </Section>
        <Section id={'projects'}>
          <Work />
        </Section>
        <Section>
          <Writing />
        </Section>
        <Footer />
      </div>
    )
  }
}
