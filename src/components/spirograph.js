import React from 'react'
import styled from 'styled-components'
import debounce from 'lodash/debounce'

const CanvasDiv = styled.div`
  /*background: red;*/
  width: 50%;
  margin: auto;
  height: 1000px;
  z-index: 99;
`

const Canvas = styled.canvas`
  /*border: 1px solid limegreen;*/
  position: absolute;
  top: 25vh;
  bottom: 0;
  left: 50%;
  right: 50%;
  margin: auto;
  transform: translateX(-50%);
  z-index: -99;
  @media (min-width: 768px) {
    top: -10vh;
  }
`

let windowWidth
let mousePressed = false

export default class Spirograph extends React.Component {
  constructor(props) {
    super(props)
    this.draw = this.draw.bind(this)
    this._resizeHandler = debounce(() => {
      if (window.innerWidth != windowWidth) {
        //check if window size has actually changed bc of iOS Safari Bug
        this.movingCanvas.width = Math.min(1000, window.innerWidth)
        this.movingCanvas.height = Math.min(1000, window.innerHeight)
        this.plottingCanvas.width = Math.min(1000, window.innerWidth)
        this.plottingCanvas.height = Math.min(1000, window.innerHeight)
        this.newSpirograph()
        windowWidth = window.innerWidth
      } else {
        return
      }
    }, 500)
  }

  componentDidMount() {
    window.addEventListener('resize', this._resizeHandler)

    windowWidth = window.innerWidth

    this.pctx = this.movingCanvas.getContext('2d')
    this.mctx = this.plottingCanvas.getContext('2d')

    this.movingCanvas.width = Math.min(1000, window.innerWidth)
    this.movingCanvas.height = Math.min(1000, window.innerHeight)
    this.plottingCanvas.width = Math.min(1000, window.innerWidth)
    this.plottingCanvas.height = Math.min(1000, window.innerHeight)

    window.requestAnimationFrame(this.draw)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resizeHandler)
  }

  shouldComponentUpdate() {
    return false
  }

  // helper function
  reduce(numerator, denominator) {
    var gcd = function(a, b) {
      return b ? gcd(b, a % b) : a
    }
    gcd = gcd(numerator, denominator)
    return [numerator / gcd, denominator / gcd]
  }

  speedUp = () => {
    this.speed = 0.07
    mousePressed = true
  }

  speedDown = () => {
    this.speed = 0.012
    mousePressed = false
  }

  newSpirograph() {
    // display config
    this.size = Math.max(140, this.canvasDiv.offsetWidth / 2.8)
    this.dotSize = 7
    this.spiroColor = '#777'
    this.circleColor = '#ccc'
    if (mousePressed == false) {
      this.speed = 0.012
    }

    // clear canvas
    this.mctx.clearRect(0, 0, this.movingCanvas.width, this.movingCanvas.height)
    this.pctx.clearRect(0, 0, this.movingCanvas.width, this.movingCanvas.height)

    // get random gear values
    var randomM = Math.floor(Math.random() * (100 - 3)) + 3
    var randomN =
      Math.floor(Math.random() * (randomM / 2 - randomM / 10)) +
      Math.floor(randomM / 10 + 1)
    this.N = this.reduce(randomN, randomM)[0]
    this.M = this.reduce(randomN, randomM)[1]
    this.gearRadius = this.N / this.M
    this.f = Math.random() * (0.9 - 0.2) + 0.2

    // calculate gear values
    this.angle = 0
    this.centerX = this.movingCanvas.width / 2
    this.centerY = this.movingCanvas.height / 2
    this.gearX = (1 - this.gearRadius) * Math.cos(this.angle) * this.size
    this.gearY = (1 - this.gearRadius) * Math.sin(this.angle) * this.size
    this.spiroX =
      this.centerX +
      ((1 - this.gearRadius) * Math.cos(this.angle) +
        this.f *
          this.gearRadius *
          Math.cos((1 / this.gearRadius - 1) * this.angle)) *
        this.size
    this.spiroY =
      this.centerY +
      ((1 - this.gearRadius) * Math.sin(this.angle) -
        this.f *
          this.gearRadius *
          Math.sin((1 / this.gearRadius - 1) * this.angle)) *
        this.size
    this.mctx.strokeStyle = this.circleColor

    // plot outer circle
    this.pctx.strokeStyle = this.circleColor
    this.pctx.beginPath()
    this.pctx.arc(this.centerX, this.centerY, this.size, 0, 2 * Math.PI)
    this.pctx.stroke()
    this.pctx.strokeStyle = this.spiroColor
  }

  draw() {
    // ----------- MOVING CANVAS ----------
    // clear moving canvas
    this.mctx.clearRect(0, 0, this.movingCanvas.width, this.movingCanvas.height)

    // gear
    this.mctx.beginPath()
    this.mctx.arc(
      this.centerX + this.gearX,
      this.centerY + this.gearY,
      this.gearRadius * this.size,
      0,
      2 * Math.PI
    )
    this.mctx.stroke()

    // inner gear
    this.mctx.beginPath()
    this.mctx.arc(
      this.centerX + this.gearX,
      this.centerY + this.gearY,
      this.f * this.gearRadius * this.size,
      0,
      2 * Math.PI
    )
    this.mctx.stroke()

    // drawing dot
    this.mctx.beginPath()
    this.mctx.arc(
      this.centerX +
        ((1 - this.gearRadius) * Math.cos(this.angle) +
          this.f *
            this.gearRadius *
            Math.cos((1 / this.gearRadius - 1) * this.angle)) *
          this.size,
      this.centerY +
        ((1 - this.gearRadius) * Math.sin(this.angle) -
          this.f *
            this.gearRadius *
            Math.sin((1 / this.gearRadius - 1) * this.angle)) *
          this.size,
      this.dotSize,
      0,
      2 * Math.PI
    )
    this.mctx.stroke()

    // ---------- PLOTTING CANVAS ----------
    if (this.angle - this.speed < this.N * 2 * Math.PI) {
      //check if spirograph is uncomplete
      this.pctx.beginPath()
      this.pctx.moveTo(this.spiroX, this.spiroY)
      this.spiroX =
        this.centerX +
        ((1 - this.gearRadius) * Math.cos(this.angle) +
          this.f *
            this.gearRadius *
            Math.cos((1 / this.gearRadius - 1) * this.angle)) *
          this.size
      this.spiroY =
        this.centerY +
        ((1 - this.gearRadius) * Math.sin(this.angle) -
          this.f *
            this.gearRadius *
            Math.sin((1 / this.gearRadius - 1) * this.angle)) *
          this.size
      this.pctx.lineTo(this.spiroX, this.spiroY)
      this.pctx.stroke()
    } else {
      // if completed, start new spirograph
      this.newSpirograph()
      window.requestAnimationFrame(this.draw)
      return
    }

    // ---------- INCREMENT ----------
    this.gearX = (1 - this.gearRadius) * Math.cos(this.angle) * this.size
    this.gearY = (1 - this.gearRadius) * Math.sin(this.angle) * this.size
    this.angle += this.speed

    // draw next frame
    window.requestAnimationFrame(this.draw)
  }

  render() {
    return (
      <CanvasDiv onMouseDown={this.speedUp} onMouseUp={this.speedDown} innerRef={canvasDiv => (this.canvasDiv = canvasDiv)}>
        <Canvas innerRef={movingCanvas => (this.movingCanvas = movingCanvas)} />
        <Canvas 
          innerRef={plottingCanvas => (this.plottingCanvas = plottingCanvas)}
        />
      </CanvasDiv>
    )
  }
}
