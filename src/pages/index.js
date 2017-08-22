import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { injectGlobal } from 'styled-components'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Page, Row, Column } from 'hedron'

import Hero from '../components/hero'
import Section from '../components/section'
import About from '../components/about'
import Projects from '../components/projects'
import Writing from '../components/writing'
import Photo from '../components/photo'
import Notes from '../components/notes'
import Footer from '../components/footer'

injectGlobal`
  @font-face {
    font-family: 'bebasneuebold';
    src: url('bebasneuebold.woff2') format('woff2'),
         url('bebasneuebold.woff') format('woff');
    font-weight: normal;
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
`

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Hero />
        <ScrollableAnchor id={'about'}>
          <Section>
            <About />
          </Section>
        </ScrollableAnchor>
        <ScrollableAnchor id={'projects'}>
          <Section>
            <Projects />
          </Section>
        </ScrollableAnchor>
        <Section>
          <Writing />
        </Section>
        {/*        ds<Section>
          <Photo />
        </Section>
        <Section>
          <Notes />
        </Section>*/}
        <Footer />
      </div>
    )
  }
}
