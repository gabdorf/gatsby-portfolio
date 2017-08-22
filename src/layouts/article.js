import React from 'react'
import ArticleHeader from '../components/article/header'
import Footer from '../components/footer'

const ArticleLayout = ({}) => ({
  render() {
    return (
      <div>
        <ArticleHeader />
        {this.props.children()}
        <Footer />
      </div>
    )
  },
})

export default ArticleLayout
