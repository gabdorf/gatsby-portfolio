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
        <title>John Doe</title>
        <meta name="description" content="John Doe's projects" />
        <meta
          name="keywords"
          content="keyword1, keyword2, keyword3"
        />
        <meta
          property="og:image"
          content="https://via.placeholder.com/250"
        />
        <meta property="og:description" content="John Doe's projects" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://johndoe.com" />
        <meta property="og:title" content="John Doe" />

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
