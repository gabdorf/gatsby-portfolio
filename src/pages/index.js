import React from 'react'

import GlobalWrapper from 'components/global-wrapper'
import Hero from 'components/hero'
import Section from 'components/section'
import About from 'components/about'
import Work from 'components/work'
import Writing from 'components/writing'
import Footer from 'components/footer'
// import Breakpoints from 'utils/breakpoints'

const App = () => {
  return (
    <GlobalWrapper>
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
    </GlobalWrapper>
  )
}

export default App
