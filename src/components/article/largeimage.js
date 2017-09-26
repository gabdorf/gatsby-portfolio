import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  max-height: 500px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`

const LargeImage = ({ props }) => ({
  render() {
    return <Image src={this.props.src} alt={this.props.alt} />
  },
})

export default LargeImage
