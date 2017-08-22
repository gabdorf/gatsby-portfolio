import React from 'react'
import styled from 'styled-components'

const ReadMoreDiv = styled.div`
  /*font-size: 16px;*/
  display: block;
  :before {
    content: "Read more";
  }
`

const ReadMore = ({}) => ({
  render() {
    return (
      <ReadMoreDiv>
        {this.props.children}
      </ReadMoreDiv>
    )
  },
})

export default ReadMore
