import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import GlobalWrapper from 'components/global-wrapper'
import Header from 'components/article/header'
import ContentWrapper from 'components/article/contentwrapper'
import Footer from 'components/footer'
import CoverImage from 'components/article/coverimage'
import LargeImage from 'components/article/largeimage'
import TwoImage from 'components/article/twoimage'
import FullSizeImage from 'components/article/fullsizeimage'

import BamCoverImage from 'img/articles/bam/jj_climbing.jpg'
import AfterClimbImage1 from 'img/articles/bam/afterclimb_wireframe.jpg'
import AfterClimbImage2 from 'img/articles/bam/afterclimb_textured.jpg'
import AfterClimbImage3 from 'img/articles/bam/afterclimb_montage.jpg'
import AfterClimbImage4 from 'img/articles/bam/afterclimb_logo.jpg'

const Section = styled.section`
  margin: 64px 0;
  ${media.sm`
    margin: 0;
  `}
`

function Bam() {
  return (
    <GlobalWrapper>
      <Header title="Bäm" />
      <CoverImage src={BamCoverImage} focusX={'44%'} focusY={'45%'} />
      <Section>
        <ContentWrapper>
          <h2>Products with extra bäm effect</h2>

          <p>
            Bäm is a brand and registered trademark by Dr. Johannes Jacubeit,
            under which he has bundled and marketed various smaller projects and
            (mostly climbing) products in the past. The common denominator is
            the motto &quot;Bäm - make things happen.&quot;
          </p>

          <p>
            Bäm - Afterclimb is a soothing gel for the hands, which provides for
            a faster healing of the skin after sports climbing. I have provided
            packaging, CI and web designs for it.
          </p>
        </ContentWrapper>
        <LargeImage src={AfterClimbImage4} alt="Afterclimb Logo" />
        <br />
        <TwoImage
          src1={AfterClimbImage1}
          alt1="Afterclimb Wireframe"
          src2={AfterClimbImage2}
          alt2="Afterclimb Textured"
        />
        <br />
        <FullSizeImage src={AfterClimbImage3} alt="Afterclimb Montage" />
      </Section>
      <Footer />
    </GlobalWrapper>
  )
}

export default Bam
