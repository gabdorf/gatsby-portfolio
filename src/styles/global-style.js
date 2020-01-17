import { createGlobalStyle } from 'styled-components'
import media from 'utils/media-queries'

import { color, fontSize } from 'styles/theme'

import TTNormsProBoldWoff from 'fonts/TTNormsProBold.woff'
import TTNormsProBoldWoff2 from 'fonts/TTNormsProBold.woff2'

import TTNormsProRegularWoff from 'fonts/TTNormsProRegular.woff'
import TTNormsProRegularWoff2 from 'fonts/TTNormsProRegular.woff2'

const GlobalStyle = createGlobalStyle`

/* Normalize.css
----------------------------------------------- */

article,aside,details,figcaption,figure,footer,header,hgroup,nav,section,summary{display:block;}audio,canvas,video{display:inline-block;*display:inline;*zoom:1;}audio:not([controls]){display:none;height:0;}[hidden]{display:none;}html{font-size:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}html,button,input,select,textarea{font-family:sans-serif;}body{margin:0;}a:focus{outline:thin dotted;}a:active,a:hover{outline:0;}h1{font-size:2em;margin:0.67em 0;}h2{font-size:1.5em;margin:0.83em 0;}h3{font-size:1.17em;margin:1em 0;}h4{font-size:1em;margin:1.33em 0;}h5{font-size:0.83em;margin:1.67em 0;}h6{font-size:0.75em;margin:2.33em 0;}abbr[title]{border-bottom:1px dotted;}b,strong{font-weight:bold;}blockquote{margin:1em 40px;}dfn{font-style:italic;}mark{background:#ff0;color:#000;}p,pre{margin:1em 0;}code,kbd,pre,samp{font-family:monospace,serif;_font-family:'courier new',monospace;font-size:1em;}pre{white-space:pre;white-space:pre-wrap;word-wrap:break-word;}q{quotes:none;}q:before,q:after{content:'';content:none;}small{font-size:75%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sup{top:-0.5em;}sub{bottom:-0.25em;}dl,menu,ol,ul{margin:1em 0;}dd{margin:0 0 0 40px;}menu,ol,ul{padding:0 0 0 40px;}nav ul,nav ol{list-style:none;list-style-image:none;}img{border:0;-ms-interpolation-mode:bicubic;}svg:not(:root){overflow:hidden;}figure{margin:0;}form{margin:0;}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em;}legend{border:0;padding:0;white-space:normal;*margin-left:-7px;}button,input,select,textarea{font-size:100%;margin:0;vertical-align:baseline;*vertical-align:middle;}button,input{line-height:normal;}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer;*overflow:visible;}button[disabled],input[disabled]{cursor:default;}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0;*height:13px;*width:13px;}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}textarea{overflow:auto;vertical-align:top;}table{border-collapse:collapse;border-spacing:0;}

  @font-face {
    font-family: 'TTNormsPro';
    src: url(${TTNormsProBoldWoff}) format('woff');
    src: url(${TTNormsProBoldWoff2}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'TTNormsPro';
    src: url(${TTNormsProRegularWoff}) format('woff');
    src: url(${TTNormsProRegularWoff2}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  :root {
    /* font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"; */
    
  }

  html {
    height: 100%;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    font-family: 'TTNormsPro', system-ui, sans-serif;
    height: 100%;
    color: ${color.grey700};
    font-feature-settings: "liga","kern";
    font-variant-ligatures: contextual common-ligatures;
    font-kerning: normal;
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
    font-size: ${fontSize.f4};
    -webkit-tap-highlight-color: transparent;
    letter-spacing: -0.2px;
    ${media.lg`
      font-size: ${fontSize.f3};
    `}
    ${media.sm`
      font-size: ${fontSize.f3};
      line-height: 1.4;
    `}
  }

  h1 {
    font-size: ${fontSize.f11};
    color: ${color.grey900};
    font-weight: 700;
    margin: 0 0 24px 0;
    padding: 0;
    line-height: 1.1;
    letter-spacing: -1.5px;
    ${media.lg`
      font-size: ${fontSize.f10};
    `}
    ${media.xs`
      font-size: ${fontSize.f8};
    `}
  }

  h2 {
    font-size: ${fontSize.f8};
    color: ${color.grey900};
    font-weight: 700;
    margin: 16px 0 20px 0;
    padding: 0;
    line-height: 1.1;
    letter-spacing: -0.4px;
    ${media.lg`
      font-size: ${fontSize.f7};
    `}
  }

  h3 {
    font-size: ${fontSize.f6};
    color: ${color.grey900};
    font-weight: 700;
    margin: 0 0 28px 0;
    padding: 0;
    line-height: 1.25;
    letter-spacing: -0.4px;
    ${media.lg`
      font-size: ${fontSize.f5};
      letter-spacing: -0.3px;
      margin: 0 0 16px 0;
    `}
  }

  h4 {
    font-size: ${fontSize.f5};
    color: ${color.grey900};
    font-weight: 700;
    margin: 0 0 8px 0;
    padding: 0;
    line-height: 1.1;
    letter-spacing: -0.4px;
    ${media.sm`
      font-size: ${fontSize.f4};
    `}
  }

  p {
    font-size: ${fontSize.f4};
    line-height: 1.5;
    ${media.lg`
      font-size: ${fontSize.f3};
      margin: 0.9em 0;
    `}
    ${media.sm`
      line-height: 1.4;
    `}
  }

  p + h2 {
    margin-top: 48px;
  }

  p + h3 {
    margin-top: 32px;
  }

  a {
    color: ${color.grey700};
    &:visited {
      color: ${color.grey700};
    }
    &:active {
      color: ${color.blue500};
    }
    &:hover {
      color: ${color.blue500};
    }
    :focus {
      outline: ${props => (props.displayOutlines ? '' : 'none')};
    }
  }

  ::selection {
    background: rgba(0, 125, 255, .99);
    color: white;
  }

  code {
    background: ${color.grey200};
    border-radius: 4px;
    border: 1px solid ${color.grey400};
    padding: 1px 4px;
    margin: 0 3px;
    font-size: ${fontSize.f3};
    ${media.lg`
      font-size: ${fontSize.f2};
    `}
  }
`

export default GlobalStyle
