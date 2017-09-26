import React from 'react'
import styled from 'styled-components'

var test

const Image = styled.div`
  background: #cdcdcd;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: ${props => props.focusX} ${props => props.focusY};
  width: 100%;
  height: 82vh;
`

const LargeImage = ({ props }) => ({
  render() {
    return (
      <Image
        src={this.props.src}
        focusX={this.props.focusX}
        focusY={this.props.focusY}
      />
    )
  },
})

export default LargeImage
