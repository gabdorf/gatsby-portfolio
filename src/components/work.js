import React, { Fragment } from 'react'
import Link from 'gatsby-link'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import Project from 'components/project'

import Project1Logo from 'img/articles/project1/img1.jpg'

const Project1Link = <Link to="/project1">Read More</Link>
const Project2Link = <Link to="/project2">Read More</Link>
const Project3Link = <Link to="/project3">Read More</Link>

const Work = () => {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Work</SectionHeading>}
      rightColumn={
        <Fragment>
          <Project
            logo={Project1Logo}
            title="Project 1"
            abstract="This is the description for project 1."
            link={Project1Link}
          />
          <Project
            logo=""
            title="Project 2"
            abstract="This description is a little bit longer than the first one."
            link={Project2Link}
          />
          <Project
            logo=""
            title="Project 3"
            abstract="And this is the longest description. But it's a project worth a few more words than the second one."
            link={Project3Link}
          />
        </Fragment>
      }
    />
  )
}

export default Work
