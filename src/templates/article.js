//future template for blog posts

import React from 'react'
import styled from 'styled-components'
import Header from '../components/article/header'
import ContentWrapper from '../components/article/contentwrapper'
import Footer from '../components/footer'

const Bam = ({ data }) => ({
  render() {
    console.log(data)
    return (
      <div>
        <Header title={data.markdownRemark.frontmatter.title} />
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

export default Bam

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
