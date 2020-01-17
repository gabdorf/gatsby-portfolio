import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  color: red;
  z-index: 100000;
`

const BreakpointWrapper = styled.div`
  display: ${props => (props.breakpointsAreVisible ? 'block' : 'none')};
`

const ScreenWrapper = styled.div`
  display: ${props => (props.screensAreVisible ? 'block' : 'none')};
`

const Breakpoint = styled.div`
  position: absolute;
  text-align: right;
  color: red;
  padding: 4px;
  font-weight: 700;
  font-size: 12px;
  box-sizing: border-box;
  border-right: 1px solid red;
  z-index: 100000;
  height: 500vh;
  width: ${props => props.width};
  &::before {
    content: '${props => props.name}';
  }
`

const Screen = styled.div`
  position: absolute;
  text-align: right;
  color: lime;
  padding: 4px;
  font-weight: 700;
  font-size: 12px;
  box-sizing: border-box;
  border-right: 1px solid lime;
  border-bottom: 1px solid lime;
  z-index: 100000;
  height: ${props => props.height};
  width: ${props => props.width};
  &::before {
    content: '${props => props.name}';
  }
`

const Button = styled.input`
  position: absolute;
  z-index: 100001;
  margin: 4px;
  background: white;
  border: none;
  outline: none;
  color: red;
  font-weight: 700;
  font-size: 12px;
  padding: 0;
  opacity: 0;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`

const Button2 = styled.input`
  position: absolute;
  top: 12px;
  left: 0;
  z-index: 100001;
  margin: 4px;
  background: white;
  border: none;
  outline: none;
  color: lime;
  font-weight: 700;
  font-size: 12px;
  padding: 0;
  opacity: 0;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`

class Breakpoints extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      breakpointsAreVisible: false,
      screensAreVisible: false,
      breakpointsButtonLabel: 'SHOW BREAKPOINTS',
      screensButtonLabel: 'SHOW SCREEN SIZES'
    }
    this.handleBreakpointClick = this.handleBreakpointClick.bind(this)
    this.handleScreenClick = this.handleScreenClick.bind(this)
  }
  
  handleBreakpointClick() {
    if(this.state.breakpointsAreVisible === true) {
      this.setState({
        breakpointsAreVisible: !this.state.breakpointsAreVisible,
        breakpointsButtonLabel: 'SHOW BREAKPOINTS'
      })
    } else {
      this.setState({
        breakpointsAreVisible: !this.state.breakpointsAreVisible,
        breakpointsButtonLabel: 'HIDE BREAKPOINTS'
      })
    }
  }

  handleScreenClick() {
    console.log(this.state)
    if(this.state.screensAreVisible === true) {
      this.setState({
        screensAreVisible: !this.state.screensAreVisible,
        screensButtonLabel: 'SHOW SCREEN SIZES'
      })
    } else {
      this.setState({
        screensAreVisible: !this.state.screensAreVisible,
        screensButtonLabel: 'HIDE SCREEN SIZES'
      })
    }
    console.log(this.state.screensAreVisible);
    console.log(this.state.breakpointsAreVisible);
  }

  render() {
    return (
      <Div>
        <Button value={this.state.breakpointsButtonLabel} type='button' onClick={this.handleBreakpointClick} />
        <Button2 value={this.state.screensButtonLabel} type='button' onClick={this.handleScreenClick} />
        <BreakpointWrapper breakpointsAreVisible={this.state.breakpointsAreVisible}>
          <Breakpoint width='350px' name='XS' />
          <Breakpoint width='600px' name='SM' />
          <Breakpoint width='900px' name='MD' />
          <Breakpoint width='1300px' name='LG' />
          <Breakpoint width='1700px' name='XL' />
        </BreakpointWrapper>
        <ScreenWrapper screensAreVisible={this.state.screensAreVisible}>
          <Screen width='375px' height='667px' name='iPhone'/>
          <Screen width='1280px' height='699px' name='MBP'/>
          <Screen width='1680px' height='949px' name='MBP scaled'/>
          <Screen width='2560px' height='1339px' name='Dell'/>
        </ScreenWrapper>
      </Div>
    )
  }
}

export default Breakpoints
