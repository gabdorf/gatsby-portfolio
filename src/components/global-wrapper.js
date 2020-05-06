import React, { Fragment, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import GlobalStyle from 'styles/global-style'

const GlobalWrapper = (props) => {
  const [displayOutlines, setDisplayOutlines] = useState(false)

  const handleKeyboardInput = (e) => {
    const key = e.keyCode || e.charCode
    // Tab
    if (key === 9) {
      setDisplayOutlines(true)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', (e) => handleKeyboardInput(e))
  })

  return (
    <Fragment>
      <Helmet>
        <html lang="en" />
        <title>Gabriel Adorf</title>
        <meta name="description" content="Gabriel Adorf's projects" />
        <meta
          name="keywords"
          content="design, ux, ui, product, graphic, health, climbing, app, interface, experience, festival, techno, code"
        />
        <meta
          property="og:image"
          content="https://www.gabrieladorf.com/static/kellerkindCover-14f87246d1614ff1cf339940bdc58186.jpg"
        />
        <meta property="og:description" content="Gabriel Adorf's projects" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gabrieladorf.com" />
        <meta property="og:title" content="Gabriel Adorf" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <GlobalStyle displayOutlines={displayOutlines} />
      {props.children}
    </Fragment>
  )
}

export default GlobalWrapper
