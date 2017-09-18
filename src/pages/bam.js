import React from 'react'
import styled from 'styled-components'
import Header from '../components/article/header'
import ContentWrapper from '../components/article/contentwrapper'
import Footer from '../components/footer'
import CoverImage from '../img/articles/bam/jj_climbing.jpg'
import AfterClimbImage1 from '../img/articles/bam/afterclimb_wireframe.jpg'
import AfterClimbImage2 from '../img/articles/bam/afterclimb_textured.jpg'
import AfterClimbImage3 from '../img/articles/bam/afterclimb_montage.jpg'
import AfterClimbImage4 from '../img/articles/bam/afterclimb_logo.jpg'

const Image = styled.div`
  background: #cdcdcd;
  background-image: url(${CoverImage});
  background-size: cover;
  background-position: 44% 45%;
  width: 100%;
  height: 82vh;
`

const LargeImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0 20px 0;
`
const LargeImage = styled.div`
  background: white;
  background-image: url(${props => props.image});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
  height: 500px;
  width: 1000px;
`

const FullSizeImageWrapper = styled.div`
  padding: 20px 0 20px 0;
`
const FullSizeImage = styled.div`
  background: white;
  background-image: url(${props => props.image});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
  height: 500px;
  width: 100%;
`

const Bam = () => ({
  render() {
    return (
      <div>
        <Header title="Bäm" />
        <Image />
        <ContentWrapper>
          <h2 id="toc_0">Products with extra bäm effect</h2>

          <p>
            Bäm is a brand and registered trademark by Dr. Johannes Jacubeit,
            under which he has bundled and marketed various smaller projects and (mostly climbing)
            products in the past. The common denominator is the motto &quot;Bäm
            - make things happen.&quot;
          </p>

          <p>
            Bäm - Afterclimb is a soothing gel for the hands, which provides for
            a faster healing of the skin after sports climbing. I have provided
            packaging, CI and web designs for it.
          </p>
          </ContentWrapper>
          <LargeImageWrapper>
            <LargeImage image={AfterClimbImage1}/>
          </LargeImageWrapper>
          <LargeImageWrapper>
            <LargeImage image={AfterClimbImage2}/>
          </LargeImageWrapper>
          <FullSizeImageWrapper>
            <FullSizeImage image={AfterClimbImage3} />
          </FullSizeImageWrapper>
          <LargeImageWrapper>
            <LargeImage image={AfterClimbImage4}/>
          </LargeImageWrapper>
          <ContentWrapper>
        </ContentWrapper>
        <Footer />
      </div>
    )
  },
})

export default Bam
