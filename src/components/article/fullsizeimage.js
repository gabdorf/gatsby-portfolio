import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-height: 750px;
`

const FullSizeImage = ({ props }) => ({
  render() {
    return <Image src={this.props.src} alt={this.props.alt} />
  },
})

export default FullSizeImage
