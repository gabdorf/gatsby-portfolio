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
<h2 id="toc_0">The beginnings</h2>

<p>The first event organized by the Kellerkind crew in 2009 in Garching near Munich was not more than a small techno party of friends for friends in the cellar under a farm house. It was well received, so we organised a major follow-up open air event in 2010.</p>

<p>We had no start capital at all and borrowed the sound equipment free of charge from our school. The refrigerators were provided for free by the local liquor store. Every cent we earned by selling drinks went directly back into the next event.</p>

<p>From 2010 on, we created two open air events for electronic music per year, each one a little bit bigger and more professional than the previous one. Over the years, we have developed a few basic principles that we initially adhered to unconsciously, but later deliberately decided to stick to in order to keep the events special for both our guests and ourselves. While growing bigger, they should not lose their charm over time.</p>

<h2 id="toc_1">The 3 core principles of our event designs</h2>

<ul>
<li><p><strong>Handmade solutions are always better than standard solutions</strong>
Each contributor should put emphasis on the individual design of their work. E.g.: handmade screens for visuals made out of cloth are better than LED screens. Custom built DIY food stands are better than ready-made pavilions from the store. The visual quality of the event is just as important as the acoustic quality.</p></li>
<li><p><strong>Waiting times should be as short as possible</strong>
Some night clubs try to always have a queue in front of their door to create a sense of scarcity and exclusivity. But no one wants to wait in line for an event where you have already bought a ticket beforehand. Also at the bar, every minute of waiting time lowers the mood of the guests. Therefore, we always designed walk paths, entry and bar processes in such way that waiting time is low during the whole day.</p></li>
<li><p><strong>No advertising on the event site</strong>
No banners. No promotions. No flyers from other events. We never wanted to allow our art to be corrupted by clumsy advertising messages or brands placing their logos everywhere trying to boost their image.</p></li>
<li><p><strong>Sound quality should be as good as possible</strong>
Putting emphasis on visual design does not mean to forget why people are initally attending a music event - to listen to music and to dance. So we always tried to pay attention to have the best possible sound quality on all stages.</p></li>
</ul>

<p>These basic principles contributed to the fact that our events &quot;Schall im Schilf&quot; with lately 6000 visitors and &quot;Back to the Woods&quot; with lately 9000 visitors have been sold out several years in a row</p>

<h2 id="toc_2">Building a remote, transparent &amp; social company</h2>

<p>In the beginning we were a circle of friends all living in the same small town and going to the same school. New people joined the core team and the extended crew so we transitioned to working remote from different German and Austrian cities meeting two times a year for several days at our two beatiful locations near munich two build up the event sites.</p>

<p>To make things work remotly we had to establish transparent processes. At kellerkind you can talk over everything openly, all team members have access to all documents and information and everyone can work as much or as little as they please. If you work more, you earn more. If you work less, you earn less. Everybody writes down their hours and gets paid accordingly.</p>

<p>Another aspect that was important to all of us is impact that our work has on the world we live in. Though art and culture are an important part of society, the hedonistic wasteful character of the events can not be ignored completely. - When we legally founded the company in 2015, we consequently made the decision to always give something back as long as the company exists. We wanted to not only give privileged people a break from their lives, but also to do something good for children and young people who do not have the same starting conditions.</p>

<p>In our foundation contract we have therefore embodied the principle of giving away 10% of all profits annually to selected social projects and institutions, all of which help children or young people in one way or another</p>

<h2 id="toc_3">Outlook</h2>

<p>The lose structure of the company and generous spendings for charity are only possible because it is a side project for all of us and nobody is dependent on making a living from her or his work at kellerkind.</p>

<p>At the moment we have no plans to change this, but we are still eager to grow our events, to create sustainable processes and to keep surprising our guests with ever more immersive and holistic experiences.</p>

        </ContentWrapper>
        <Footer />
      </div>
    )
  },
})

export default Kellerkind
