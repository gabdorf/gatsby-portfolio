import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Article from './article'
import NotFound from './notfound'

const MasterLayout = ({ data }) => ({
  render() {
    return <div>{this.props.children()}</div>
  },
})

export default MasterLayout
