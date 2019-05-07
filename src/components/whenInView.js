import React from 'react'
import { Waypoint } from 'react-waypoint'

class WhenInView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isInView: false,
    }
  }

  onEnter = () => {
    this.setState({
      isInView: true,
    })
  }

  render() {
    return (
      <div>
        <Waypoint onEnter={this.onEnter} bottomOffset="30%" />
        {this.props.children({ isInView: this.state.isInView })}
      </div>
    )
  }
}

export default WhenInView
