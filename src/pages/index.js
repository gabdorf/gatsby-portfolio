import React from 'react'

import GlobalWrapper from 'components/global-wrapper'
import Hero from 'components/hero'
import Section from 'components/section'
import About from 'components/about'
import Work from 'components/work'
import Footer from 'components/footer'

const App = () => {
  return (
    <GlobalWrapper>
      <Hero />
      <Section id={'about'}>
        <About />
      </Section>
      <Section id={'projects'}>
        <Work />
      </Section>
      <Footer />
    </GlobalWrapper>
  )
}

export default App
