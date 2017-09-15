import React from 'react'
import styled from 'styled-components'
import Header from '../components/article/header'
import CoverImage from '../img/articles/kellerkind/kellerkindCover.jpg'
import ContentWrapper from '../components/article/contentwrapper'
import Footer from '../components/footer'

const Image = styled.div`
  background: #cdcdcd;
  background-image: url(${CoverImage});
  background-size: cover;
  background-position: 28% 70%;
  width: 100%;
  height: 82vh;
`

const Kellerkind = () => ({
  render() {
    return (
      <div>
        <Header title="Kellerkind" />
        <Image />
        <ContentWrapper>
          <h2 id="toc_0">Dancing for a better world</h2>

          <p>
            One of my dreams has always been to build a social business in which
            you have no secrets from each other, where all employees have access
            to all documents and information and where everyone can work as much
            or as little as they like.
          </p>

          <p>
            If you work more, you earn more. If you work less, you earn less. At
            the same time, once the company is doing well it should pursue a
            higher goal than pure profit maximization and share this success
            with others.
          </p>

          <p>
            I would never have thought that this dream would come true in the
            event industry. It is thanks to a series of coincidences, but also
            to many years of hard work, that a hobby has become something
            bigger.
          </p>

          <h2 id="toc_1">The beginnings</h2>

          <p>
            The first event organized by the Kellerkind crew in 2009 was nothing
            more than a small techno party of friends for friends in an
            transformed cellar under a friends farm house. It was well received,
            so we organised a major follow-up open air event for electronic
            music in 2010.
          </p>

          <p>
            We had no start capital at all and borrowed the sound equipment free
            of charge from our school. The refrigerators were provided for free
            by the local liquor store. We have bootstrapped everything from
            ground up and put every cent we earned through the sale of drinks
            directly back into the next event.
          </p>

          <p>
            From 2010 on, we created two open air events per year, each one
            bigger and more professional than the previous one. Over the years,
            we have developed a few basic principles that we initially adhered
            to unconsciously, but later deliberately decided to stick to in
            order to keep the events special for both our guests and ourselves.
            While growing bigger, they should not lose their charm over time.
          </p>

          <h2 id="toc_2">Our 3 core principles of event site design</h2>

          <ul>
            <li>
              <p>
                <strong>
                  Handmade solutions are always better than standard solutions
                </strong>
                <br />Each contributor should put emphasis on the individual
                design of their work. E.g.: handmade screens made out of cloth
                are better than LED screens. Custom built DIY food stands are
                better than ready-made pavilions from the store. The visual
                quality of the event is just as important as the acoustic
                quality.
              </p>
            </li>
            <li>
              <p>
                <strong>Waiting times should be as short as possible</strong>
                <br />Some night clubs try to always have a queue in front of
                their door to create a sense of scarcity and exclusivity. But no
                one wants to wait in line for an event where you have already
                bought a ticket beforehand. At the bar, too, every minute of
                waiting time lowers the mood of the guests. Therefore, we always
                designed walk paths, entry and bar processes in such way that
                waiting time is low during the whole day.
              </p>
            </li>
            <li>
              <p>
                <strong>No advertising on the event site</strong>
                <br />No banners. No promotions. No flyers from other events. We
                never wanted to allow our art to be corrupted by clumsy
                advertising messages or brands placing their logos everywhere
                trying to boost their image.
              </p>
            </li>
          </ul>

          <p>
            These 3 basic principles contributed to the fact that our events
            &quot;Schall im Schilf&quot; with lately 6000 visitors and
            &quot;Back to the Woods&quot; with lately 9000 visitors have been
            sold out several years in a row
          </p>

          <h2 id="toc_3">The higher goal</h2>

          <p>
            With increasing success and size of the events, we were bothered by
            the increasingly lack of social aspects of the company. Even though
            art and culture are an important part of society, the hedonistic
            character of the events could not be ignored completely.
          </p>

          <p>
            When we legally founded the company in 2015, we consequently made
            the decision to always give something back as long as the company
            exists. We wanted to not only give privileged people a break from
            their lives, but also to do something good for children and young
            people who do not have the same starting conditions.
          </p>

          <p>
            In our foundation contract we have therefore embodied the principle
            of giving away 10% of all profits annually to selected social
            projects and institutions, all of which help children or young
            people in one way or another
          </p>
        </ContentWrapper>
        <Footer />
      </div>
    )
  },
})

export default Kellerkind
