import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { color } from 'styles/theme'
import debounce from 'lodash/debounce'

const Div = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

const CanvasWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Canvas = styled.canvas``

const Spirograph = (props) => {
  const movingCanvasContainer = useRef()
  const plottingCanvasContainer = useRef()
  let movingCanvas
  let plottingCanvas
  let leftMouseIsPressed = false
  let isMounted

  //canvas
  let windowWidth
  let canvasSize
  let size
  let mctx
  let pctx

  // config
  let dotSize
  let spiroColor
  let circleColor
  let speed

  // seed values
  let randomM
  let randomN
  let f

  // calculated values
  let m
  let n
  let gearRadius
  let angle
  let centerX
  let centerY
  let gearX
  let gearY
  let spiroX
  let spiroY

  useEffect(() => {
    isMounted = true
    window.addEventListener('resize', _resizeHandler)
    movingCanvas = movingCanvasContainer.current
    plottingCanvas = plottingCanvasContainer.current
    mctx = movingCanvas.getContext('2d')
    pctx = plottingCanvas.getContext('2d')
    windowWidth = window.innerWidth
    setCanvasSize()
    initSpirograph()
    window.requestAnimationFrame(draw)
    return function cleanup() {
      window.removeEventListener('resize', _resizeHandler)
      isMounted = false
    }
  })

  const _resizeHandler = debounce(() => {
    //check if window size has actually changed bc of iOS Safari Bug
    if (window.innerWidth !== windowWidth) {
      setCanvasSize()
      initSpirograph()
      windowWidth = window.innerWidth
    } else {
      return
    }
  }, 500)

  const setCanvasSize = () => {
    canvasSize = Math.min(1000, window.innerWidth, window.innerHeight) / 1.4 + 2
    movingCanvas.width = canvasSize
    movingCanvas.height = canvasSize
    plottingCanvas.width = canvasSize
    plottingCanvas.height = canvasSize
  }

  // helper function
  const reduce = (numerator, denominator) => {
    var gcd = function(a, b) {
      return b ? gcd(b, a % b) : a
    }
    gcd = gcd(numerator, denominator)
    return [numerator / gcd, denominator / gcd]
  }

  const speedUp = () => {
    speed = 0.07
    leftMouseIsPressed = true
  }

  const speedDown = () => {
    speed = 0.012
    leftMouseIsPressed = false
  }

  const delay = (t) => new Promise((resolve) => setTimeout(resolve, t))

  const initSpirograph = () => {
    // display config
    size = Math.min(
      498,
      Math.min(window.innerWidth / 2.8, window.innerHeight / 2.8)
    )
    dotSize = 7
    spiroColor = color.grey800
    circleColor = color.grey400
    if (leftMouseIsPressed === false) {
      speed = props.speed
    }
    mctx.lineWidth = 1.2
    pctx.lineWidth = 1.2

    // clear canvas
    mctx.clearRect(0, 0, movingCanvas.width, movingCanvas.height)
    pctx.clearRect(0, 0, movingCanvas.width, movingCanvas.height)

    // get random gear values
    randomM = Math.floor(Math.random() * (100 - 3)) + 3
    randomN =
      Math.floor(Math.random() * (randomM / 2 - randomM / 10)) +
      Math.floor(randomM / 10 + 1)
    n = reduce(randomN, randomM)[0]
    m = reduce(randomN, randomM)[1]
    gearRadius = n / m
    f = Math.random() * (0.9 - 0.2) + 0.2

    // calculate gear values
    angle = 0
    centerX = movingCanvas.width / 2
    centerY = movingCanvas.height / 2
    gearX = (1 - gearRadius) * Math.cos(angle) * size
    gearY = (1 - gearRadius) * Math.sin(angle) * size
    spiroX =
      centerX +
      ((1 - gearRadius) * Math.cos(angle) +
        f * gearRadius * Math.cos((1 / gearRadius - 1) * angle)) *
        size
    spiroY =
      centerY +
      ((1 - gearRadius) * Math.sin(angle) -
        f * gearRadius * Math.sin((1 / gearRadius - 1) * angle)) *
        size
    mctx.strokeStyle = circleColor

    // plot outer circle
    pctx.strokeStyle = circleColor
    pctx.beginPath()
    pctx.arc(centerX, centerY, size, 0, 2 * Math.PI)
    pctx.stroke()
    pctx.strokeStyle = spiroColor
  }

  const draw = () => {
    if (isMounted === true) {
      // ----------- MOVING CANVAS ----------
      // clear moving canvas
      mctx.clearRect(0, 0, movingCanvas.width, movingCanvas.height)

      // outer gear
      mctx.beginPath()
      mctx.arc(
        centerX + gearX,
        centerY + gearY,
        gearRadius * size,
        0,
        2 * Math.PI
      )
      mctx.stroke()

      // inner gear
      mctx.beginPath()
      mctx.arc(
        centerX + gearX,
        centerY + gearY,
        f * gearRadius * size,
        0,
        2 * Math.PI
      )
      mctx.stroke()

      // drawing dot
      mctx.beginPath()
      mctx.arc(
        centerX +
          ((1 - gearRadius) * Math.cos(angle) +
            f * gearRadius * Math.cos((1 / gearRadius - 1) * angle)) *
            size,
        centerY +
          ((1 - gearRadius) * Math.sin(angle) -
            f * gearRadius * Math.sin((1 / gearRadius - 1) * angle)) *
            size,
        dotSize,
        0,
        2 * Math.PI
      )
      mctx.stroke()

      // ---------- PLOTTING CANVAS ----------

      //check if spirograph is uncomplete
      if (angle - speed < n * 2 * Math.PI) {
        pctx.beginPath()
        pctx.moveTo(spiroX, spiroY)
        spiroX =
          centerX +
          ((1 - gearRadius) * Math.cos(angle) +
            f * gearRadius * Math.cos((1 / gearRadius - 1) * angle)) *
            size
        spiroY =
          centerY +
          ((1 - gearRadius) * Math.sin(angle) -
            f * gearRadius * Math.sin((1 / gearRadius - 1) * angle)) *
            size
        pctx.lineTo(spiroX, spiroY)
        pctx.stroke()
      } else {
        // if completed, start new spirograph

        mctx.clearRect(0, 0, movingCanvas.width, movingCanvas.height)
        delay(3000)
          .then(() => initSpirograph())
          .then(() => window.requestAnimationFrame(draw))

        return
      }

      // ---------- INCREMENT ----------
      gearX = (1 - gearRadius) * Math.cos(angle) * size
      gearY = (1 - gearRadius) * Math.sin(angle) * size
      angle += speed

      // // draw next frame
      window.requestAnimationFrame(draw)
    } else {
      return
    }
  }

  return (
    <Div>
      <CanvasWrapper
        onMouseDown={speedUp}
        onMouseUp={speedDown}
        onTouchStart={speedUp}
        onTouchEnd={speedDown}
      >
        <Canvas ref={plottingCanvasContainer} />
      </CanvasWrapper>
      <CanvasWrapper
        onMouseDown={speedUp}
        onMouseUp={speedDown}
        onTouchStart={speedUp}
        onTouchEnd={speedDown}
      >
        <Canvas ref={movingCanvasContainer} />
      </CanvasWrapper>
    </Div>
  )
}

export default Spirograph
