import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import GlobalWrapper from 'components/global-wrapper'
import Header from 'components/article/header'
import CoverImage from 'components/article/coverimage'
import ContentWrapper from 'components/article/contentwrapper'
import Footer from 'components/footer'
import TwoImage from 'components/article/twoimage'
import LargeImage from 'components/article/largeimage'

import Img1 from 'img/articles/project1/img1.jpg'
import Img2 from 'img/articles/project1/img2.jpg'
import Img3 from 'img/articles/project1/img3.jpg'
import Img4 from 'img/articles/project1/img4.jpg'

const Section = styled.section`
  margin: 64px 0;
  ${media.sm`
    margin: 0;
  `}
`

const Project3 = () => {
  return (
    <GlobalWrapper>
      <Header title="Project 3" />
      <CoverImage src={Img1} focusX={'28%'} focusY={'70%'} />
      <Section>
        <ContentWrapper>
          <h2>The Headline</h2>

          <p>
            Sed posuere consectetur est at lobortis. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec id elit non mi
            porta gravida at eget metus. Fusce dapibus, tellus ac cursus
            commodo, tortor mauris condimentum nibh, ut fermentum massa justo
            sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas
            eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris
            condimentum nibh, ut fermentum massa justo sit amet risus.
          </p>

          <p>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Sed posuere consectetur est at lobortis. Morbi leo risus,
            porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla
            vitae elit libero, a pharetra augue.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere
            velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor
            mauris condimentum nibh, ut fermentum massa justo sit amet risus.
          </p>
        </ContentWrapper>
        <LargeImage src={Img2} />
        <ContentWrapper>
          <h2>The Headline</h2>

          <p>
            Sed posuere consectetur est at lobortis. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec id elit non mi
            porta gravida at eget metus. Fusce dapibus, tellus ac cursus
            commodo, tortor mauris condimentum nibh, ut fermentum massa justo
            sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas
            eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris
            condimentum nibh, ut fermentum massa justo sit amet risus.
          </p>

          <p>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Sed posuere consectetur est at lobortis. Morbi leo risus,
            porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla
            vitae elit libero, a pharetra augue.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere
            velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor
            mauris condimentum nibh, ut fermentum massa justo sit amet risus.
          </p>
        </ContentWrapper>
        <TwoImage src1={Img3} src2={Img4} maxHeight={'450px'} />
      </Section>
      <Footer />
    </GlobalWrapper>
  )
}

export default Project3
