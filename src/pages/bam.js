import React from 'react'
import styled from 'styled-components'
import Header from '../components/article/header'
import ContentWrapper from '../components/article/contentwrapper'
import Footer from '../components/footer'

const Bam = () => ({
  render() {
    return (
      <div>
        <Header title="Bäm" />
        <ContentWrapper>
          <h2 id="toc_0">Products with the extra bäm effect</h2>

          <p>
            Bäm is a brand and registered trademark by Dr. Johannes Jacubeit,
            under which he has bundled and marketed various smaller projects and
            products in the past. The common denominator is the motto &quot;Bäm
            - make things happen.&quot;
          </p>

          <p>
            Bäm - Afterclimb is a soothing gel for the hands, which provides for
            a faster healing of the skin after sports climbing. I have provided
            packaging and web designs for it.
          </p>
        </ContentWrapper>
        <Footer />
      </div>
    )
  },
})

export default Bam
