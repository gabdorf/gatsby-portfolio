import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import GlobalWrapper from 'components/global-wrapper'
import Header from 'components/article/header'
import CoverImage from 'components/article/coverimage'
import ContentWrapper from 'components/article/contentwrapper'
import Footer from 'components/footer'
import TwoImage from 'components/article/twoimage'
import LargeImage from 'components/article/largeimage'

import KellerkindCoverImage from 'img/articles/kellerkind/kellerkindCover.jpg'
import KellerkindImage1 from 'img/articles/kellerkind/schall_im_schilf.jpg'
import KellerkindImage2 from 'img/articles/kellerkind/back_to_the_woods2.jpg'
import KellerkindImage4 from 'img/articles/kellerkind/schall_im_schilf2.jpg'
import KellerkindImage5 from 'img/articles/kellerkind/back_to_the_woods.jpg'

const Section = styled.section`
  margin: 64px 0;
  ${media.sm`
    margin: 0;
  `}
`

function Kellerkind() {
  return (
    <GlobalWrapper>
      <Header title="Kellerkind" />
      <CoverImage src={KellerkindCoverImage} focusX={'28%'} focusY={'70%'} />
      <Section>
        <ContentWrapper>
          <h2>The beginnings</h2>

          <p>
            The first event organized by the Kellerkind crew in 2009 in Garching
            near Munich was not more than a small techno party of friends for
            friends in the cellar under a farm house. It was well received, so
            we organised a major follow-up open air event in 2010.
          </p>

          <p>
            We had no start capital and borrowed the sound equipment free of
            charge from our school. The refrigerators were provided for free by
            the local liquor store. Every cent we earned by selling drinks went
            directly back into the next event.
          </p>

          <p>
            From 2010 on, we created two open air events for electronic music
            per year, each one a little bit bigger and more professional than
            the previous one. Over the years, we have developed a few basic
            principles that we initially adhered to unconsciously, but later
            deliberately decided to stick to in order to keep the events special
            for both our guests and ourselves. While growing bigger, they should
            not lose their charm over time.
          </p>
        </ContentWrapper>
        <LargeImage src={KellerkindImage1} />
        <ContentWrapper>
          <h2>The core principles of our event designs</h2>

          <ul>
            <li>
              <p>
                <strong>
                  Handmade solutions are always better than standard solutions
                </strong>
                <br />
                Each contributor should put emphasis on the individual design of
                their work. E.g.: handmade screens for visuals made out of cloth
                are better than LED screens. Custom built DIY food stands are
                better than ready-made pavilions from the store. The visual
                quality of the event is just as important as the acoustic
                quality.
              </p>
            </li>
            <li>
              <p>
                <strong>Waiting times should be as short as possible</strong>
                <br />
                Some night clubs try to always have a queue in front of their
                door to create a sense of scarcity and exclusivity. But no one
                wants to wait in line for an event where you have already bought
                a ticket beforehand. Also at the bar, every minute of waiting
                time lowers the mood of the guests. Therefore, we always
                designed walk paths, entry and bar processes in such way that
                waiting time is low during the whole day.
              </p>
            </li>
            <li>
              <p>
                <strong>No advertising on the event site</strong>
                <br />
                No banners. No promotions. No flyers from other events. We never
                wanted to allow our art to be corrupted by clumsy advertising
                messages or brands placing their logos everywhere trying to
                boost their image.
              </p>
            </li>
            <li>
              <p>
                <strong>Sound quality should be as good as possible</strong>
                <br />
                Putting emphasis on visual design does not mean forgetting why
                people are initally attending a music event. So we always tried
                to pay attention to have the best possible sound quality on all
                stages.
              </p>
            </li>
          </ul>

          <p>
            These basic principles contributed to the fact that our events
            &quot;Schall im Schilf&quot; with now 6000 visitors and &quot;Back
            to the Woods&quot; with now 9000 visitors have always been sold out
            in the last years.
          </p>
        </ContentWrapper>
        <LargeImage src={KellerkindImage4} />
        <ContentWrapper>
          <h2>Remote, transparent &amp; social</h2>

          <p>
            In the beginning we were a small circle of friends all living in the
            same small town and going to the same school. As new people joined
            the core team and me and some others left munich for studying in
            other cities, we transitioned to working remote from different
            German and Austrian cities. We meet at least two times a year for
            several days at our two beatiful locations near munich two build up
            the event sites.
          </p>

          <p>
            To make things work remotly we had to establish transparent
            processes. At kellerkind you can talk over everything openly, all
            team members have access to all documents and information and
            everyone can work as much or as little as they please. If you work
            more, you earn more. If you work less, you earn less. Everybody
            writes down their hours and gets paid accordingly.
          </p>

          <p>
            Another aspect that was important to all of us is impact that our
            work has on the world we live in. Though art and culture are an
            important part of society, the hedonistic wasteful character of the
            events can not be ignored completely. - When we legally founded the
            company in 2015, we consequently made the decision to always give
            something back as long as the company exists. We wanted to not only
            give privileged people a break from their lives, but also to do
            something good for children and young people who do not have the
            same starting conditions.
          </p>

          <p>
            In our foundation contract we have therefore embodied the principle
            of giving away 10% of all profits annually to selected social
            projects and institutions, all of which help children or young
            people in one way or another
          </p>

          <h2>Outlook</h2>

          <p>
            The lose structure of the company and spendings for charity are only
            possible because it is still a side project for all of us and nobody
            is dependent on making a living from her or his work at kellerkind.
          </p>

          <p>
            At the moment we have no plans to change this, but we are still
            eager to grow our events, to create sustainable processes and to
            keep surprising with ever more immersive and holistic experiences.
          </p>
        </ContentWrapper>
        <TwoImage
          src1={KellerkindImage2}
          src2={KellerkindImage5}
          maxHeight={'450px'}
        />
      </Section>
      <Footer />
    </GlobalWrapper>
  )
}

export default Kellerkind
