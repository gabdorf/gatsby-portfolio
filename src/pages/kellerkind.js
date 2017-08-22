import React from 'react'
import styled from 'styled-components'
import Header from '../components/article/header'
import CoverImage from '../img/articles/kellerkind/kellerkindCover.jpg'
import ContentWrapper from '../components/article/contentwrapper'
import Footer from '../components/footer'

const Image = styled.div`
  background: #cdcdcd;
  background-image: url(${CoverImage});
  background-size: cover;
  background-position: 28% 70%;
  width: 100%;
  height: 82vh;
`

const Kellerkind = () => ({
  render() {
    return (
      <div>
        <Header title="Kellerkind" />
        <Image />
        <ContentWrapper>
          <h2>Intro</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
            ut fermentum massa justo sit amet risus. Maecenas sed diam eget
            risus varius blandit sit amet non magna. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec id elit non mi porta gravida at eget metus. Sed posuere
            consectetur est at lobortis.
          </p>
          <p>
            Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac
            cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
            justo sit amet risus. Maecenas faucibus mollis interdum. Aenean eu
            leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed
            diam eget risus varius blandit sit amet non magna. Vestibulum id
            ligula porta felis euismod semper. Donec sed odio dui. Sed posuere
            consectetur est at lobortis. Aenean lacinia bibendum nulla sed
            consectetur. Maecenas sed diam eget risus varius blandit sit amet
            non magna.
          </p>
        </ContentWrapper>
        <Footer />
      </div>
    )
  },
})

export default Kellerkind
