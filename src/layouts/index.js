import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Article from './article'
import NotFound from './notfound'

const MasterLayout = ({ data }) => ({
  render() {
    // console.log(data.allMarkdownRemark.edges[0].node.frontmatter.title)
    // let location = this.props.location.pathname
    // let page
    // if (location === '/') {
    //   page = this.props.children()
    // } else if (
    //   location === '/kellerkind' ||
    //   location === '/lifetime' ||
    //   location === '/bam'
    // ) {
    //   page = <Article {...this.props} />
    // } else {
    //   page = <NotFound />
    // }

    return (
      <div>
        {this.props.children()}
      </div>
    )
  },
})

export default MasterLayout

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
