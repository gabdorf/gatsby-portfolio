import React from 'react'
import styled from 'styled-components'

import { color } from 'styles/theme'

export const InlineSvg = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: inherit;
  fill: currentColor;
`

export const SvgWrapper = styled.div`
  display: inline-block;
  flex: 0 0 ${(props) => (props.size ? `${props.size}px` : '32px')};
  width: ${(props) => (props.size ? `${props.size}px` : '32px')};
  height: ${(props) => (props.size ? `${props.size}px` : '32px')};
  min-width: ${(props) => (props.size ? `${props.size}px` : '32px')};
  min-height: ${(props) => (props.size ? `${props.size}px` : '32px')};
  position: relative;
  color: inherit;
`

export const Glyph = ({ glyph }) => {
  switch (glyph) {
    case 'arrow':
      return (
        <path
          d="m17.2418941 24.3664442-1.4379826-1.4193075 5.9200062-5.9200063h-15.33225596v-2.0542608h15.33225596l-5.9200062-5.90133121 1.4379826-1.43798259 8.3664442 8.3664442z"
          transform="matrix(0 1 -1 0 32 0)"
        />
      )
    case 'external-link':
      return (
        <g fill="none" fillRule="evenodd">
          <path
            d="m14.0009183 6v2h-6.0009183v16h16v-6.0009183h2v6.0009183c0 1.1045695-.8954305 2-2 2h-16c-1.1045695 0-2-.8954305-2-2v-16c0-1.1045695.8954305-2 2-2zm7.2919749 3.29289322-3.2928932-3.29289322h8v8l-3.2928932-3.2928932-8.7071068 8.7071068-1.4142136-1.4142136z"
            fill={color.grey500}
          />
        </g>
      )
    case 'close':
      return (
        <g fill="none" fillRule="evenodd">
          {/* <rect fill={Color.grey200} height="32" rx="16" width="32" /> */}
          <path
            d="m14.5857864 16-6.99999996-7 1.41421356-1.41421356 7 6.99999996 7-6.99999996 1.4142136 1.41421356-7 7 7 7-1.4142136 1.4142136-7-7-7 7-1.41421356-1.4142136z"
            fill={color.grey700}
          />
        </g>
      )
    default:
  }
}

const Icon = (props) => {
  const { size = 32, glyph } = props

  return (
    <SvgWrapper size={size} className={'icon'}>
      <InlineSvg
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="1.414"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="title"
        viewBox="0 0 32 32"
        preserveAspectRatio="xMidYMid meet"
        fit
        id={glyph}
      >
        <title id="title">{glyph}</title>
        <Glyph glyph={glyph} />
      </InlineSvg>
    </SvgWrapper>
  )
}

export default Icon
