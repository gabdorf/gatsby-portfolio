import React from 'react'
import styled from 'styled-components'

const TwoImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Image = styled.img`
  max-height: ${props => props.maxHeight};
  align-self: center;
`

const TwoImage = ({ props }) => ({
  render() {
    return (
      <TwoImageWrapper>
        <Image
          src={this.props.src1}
          alt={this.props.alt1}
          maxHeight={this.props.maxHeight}
        />
        <Image
          src={this.props.src2}
          alt={this.props.alt2}
          maxHeight={this.props.maxHeight}
        />
      </TwoImageWrapper>
    )
  },
})

export default TwoImage
