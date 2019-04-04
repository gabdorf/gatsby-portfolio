import React from 'react'

const MasterLayout = ({ data }) => ({
  render() {
    return <div>{this.props.children()}</div>
  },
})

export default MasterLayout
