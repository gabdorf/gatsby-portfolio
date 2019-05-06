import React from 'react'
import styled from 'styled-components'
import GlobalWrapper from 'components/global-wrapper'
import media from 'utils/media-queries'

import Header from 'components/article/header'
import CoverImage from 'components/article/coverimage'
import ContentWrapper from 'components/article/contentwrapper'
import Footer from 'components/footer'
import TwoImage from 'components/article/twoimage'
import LargeImage from 'components/article/largeimage'
import FullSizeImage from 'components/article/fullsizeimage'

import LifeTimeCoverImage from 'img/articles/lifetime/lifetimeCover.jpg'
import SilosImage from 'img/articles/lifetime/silos.jpg'
import LifeTimeUIImage from 'img/articles/lifetime/lifetimeUI.jpg'
import LifeTimeMobileImage from 'img/articles/lifetime/lifetimePhoneDocuments.jpg'
import Screenshot1 from 'img/articles/lifetime/screenshot1.jpg'
import Screenshot2 from 'img/articles/lifetime/screenshot2.jpg'
import LifeTimeDesktopImage from 'img/articles/lifetime/lifetimeDesktop.jpg'
import LifeTimeHubImage from 'img/articles/lifetime/lifetimeHub.jpg'
import LifeTimeHubImage2 from 'img/articles/lifetime/lifetimeHub2.jpg'

const Section = styled.section`
  margin: 64px 0;
  ${media.sm`
    margin: 0;
  `}
`

const EmbedContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  width: 100%;
  height: auto;
  @media (min-width: 1000px) {
    width: 1000px;
    height: 562px;
    padding-bottom: 0px;
    margin-left: auto;
    margin-right: auto;
  }
`

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

function LifeTime() {
  return (
    <GlobalWrapper>
      <Header title="LifeTime" />
      <CoverImage src={LifeTimeCoverImage} focusX={'73.5%'} focusY={'50%'} />
      <Section>
        <ContentWrapper>
          <h2 id="toc_0">Data flow in medicine is broken</h2>

          <h3 id="toc_1">We don&#39;t have access to our own medical data</h3>

          <p>
            Medical practices and public administration offices are among the
            last places in Germany where most of the communication is still done
            paper-based or verbally. Important information, is written down
            illegibly by hand, gets only mentioned briefly - or in the worst
            case - is not handed out to patients at all.
          </p>

          <p>
            Historically, the fact that people are not granted direct access to
            their own health data can be explained by the role of doctors as
            &quot;gods in white&quot;. Patients weren&#39;t considered as wise
            and educated enough to be able to have a say in the matter and
            diagnostic details were considered to be only an overwhelming burden
            to them. This attitude can still be found with older doctors today.
          </p>

          <p>
            In reality, I believe only in the field of psychiatry/psychotherapy,
            it sometimes is better if doctors are able to make diagnoses and
            take notes without patients having access to them. In all other
            medical areas, in my opinion transparency should be an absolute
            prerequisite for medical treatment.
          </p>

          <p>
            It should be clear to all people that medicine is not an exact
            science and that it holds many uncertainties and decisions are often
            based only on probabilities or experience. In no other area with
            equivalent consequences for one&#39;s own life one would give up
            complete control to outsiders so readily and &quot;hope for the
            best&quot; without trying to figure on which basis decisions are
            made.
          </p>
        </ContentWrapper>
        <FullSizeImage src={SilosImage} />
        <ContentWrapper>
          <h3 id="toc_2">
            Doctors don&#39;t have access to the medical history of their
            patients
          </h3>

          <p>
            People - especially chronically ill people - who actually try to
            keep track of past treatments and diagnoses usually do so in form of
            a folder in which documents are filed. This folder is then carried
            from doctor&#39;s office to doctor&#39;s office and put on the
            counter at the reception desk before the appointment. The handling
            of these folders varies from place to place. In some facilities, the
            documents are all scanned in. In others, the doctor leafs through
            them briefly just before the treatment, hoping that something
            accidentally strikes her or his eye. In other facilities, the paper
            stacks are simply ignored.
          </p>

          <p>
            It&#39;s not the doctors&#39; fault. On average, they only have 8
            minutes for one treatment and have no chance to process big stacks
            of files during this time. If a certain information of an earlier
            treatment is urgently needed, the current standard process is a
            phone call and a subsequent direct transmission of the file from
            doctor to doctor by fax. A technology from the 1970ies that almost
            nobody else has wanted to use anymore for the last 20 years.
          </p>

          <h3 id="toc_3">
            Computers can not help doctors to take medical decisions.
          </h3>

          <p>
            If previous findings are not digital and do not contain any
            meta-information, such as the creation date or name and
            specialization of the previously treating doctor, the data is not
            very useful to computers. There are efforts to make medical
            documents understandable for machines through OCR software. However,
            the road to meaningful structured data is still long.
          </p>

          <p>
            For your diagnoses, doctors therefore rely to a large extent on the
            data they collect themselves during treatment or on the few pieces
            of information that are collected through questionaires, handed out
            to patients preceding the appointement. A tiresome repetitive work
            for patients and who is really able to reproduce all the medical
            details of family members by heart? This information could be very
            valuable for a better diagnosis.
          </p>

          <h2 id="toc_4">Our solution</h2>

          <h3 id="toc_5">Computer-assisted medical treatments</h3>

          <p>
            The path to computer-assisted medical treatment begins with a
            structured collection and aggregation of the patient&#39;s medical
            context. This data is then supplemented by new information that is
            created during an appointment or an hospital stay. And it ends with
            all newly acquired information and instructions being structured and
            fully returned into the hands of the patient.
          </p>

          <p>
            Patients should be considered intelligent enough and allowed to have
            a say. They should be allowed to ask questions and to question
            decisions. Interfaces are needed to give them insights into their
            treatment processes and enabling them to browse through their
            medical history and draw information from it.
          </p>

          <p>
            Physicians should be supported in their difficult work by the best
            possible data basis and clear and just as helpful interfaces, which
            aggregate this data base in a meaningful and understandable way and
            thus enable raw computing power to be used for medical purposes.
          </p>
        </ContentWrapper>
        <FullSizeImage src={LifeTimeUIImage} />
        <ContentWrapper>
          <h3 id="toc_6">Designing mobile first</h3>

          <p>
            Several competitors have already unsuccessfully tried to solve the
            problem with centralized cloud solutions that include a log-in for
            doctors and a log-in for patients.{' '}
          </p>

          <p>
            The difficulty always lies in building the link between the two
            areas. How can I, as a doctor, make something available to a certain
            patient? In some systems, the patient have to authenticate
            themselves by calling their doctor&#39;s offices. For others doctors
            have to hand over a one-time-password on paper.
          </p>

          <p>
            All systems have in common that as a doctor you have to open a web
            app to send a file. In most solutions you have to log in to do so.
            Next the patient has to log in to the patient portal to retrieve the
            file.
          </p>

          <p>
            The biggest flaw: The company that operates the system has a
            complete list of all patients, including their insurance and
            insurance numbers, and all health data flows through the
            company&#39;s server. And another problem: if the platform provider
            decides to discontinue the service, all data will disappear
            instantly.
          </p>

          <p>
            With LifeTime, founded in 2014 by Dr. Johannes Jacubeit, a doctor,
            we have decided to go another way: LifeTime is mobile first. We have
            built an infrastructure that allows a doctor to send a file to a
            patient&#39;s smartphone via an end-to-end encrypted connection
            without the patient having to set up a user account beforehand. The
            patient does not even need to have heard of LifeTime before.
          </p>

          <p>
            The assignment between physician and patient is created using the
            insurance number and the mobile phone number when asynchronously
            sending data via LifeTime. Normally, doctors&#39; offices already
            have both stored in their systems. It is also possible to send files
            directly to patients via a local encrypted WLAN without any patient
            information at all.
          </p>

          <p>
            With LifeTime the patient is in full possession of his data and the
            only one who is able to decrypt it. The app runs natively and if it
            is being discontinued in the future, the patient has enough time to
            export the data to another system.
          </p>
        </ContentWrapper>
        <FullSizeImage src={LifeTimeMobileImage} />
        <ContentWrapper>
          <h3 id="toc_7">The components of LifeTime</h3>

          <p>
            On the doctor&#39;s side, LifeTime consists of two components:
            LifeTime Desktop and LifeTime Hub. The LifeTime Hub is an optional
            hardware for doctors&#39; offices. Over the hub documents can be
            sent to patients and documents can be received via a local WLAN,
            even without the doctor&#39;s office being connected to the
            Internet. The second component, LifeTime Desktop, is an Electron app
            for asynchronous, encrypted transmission of files over the Internet.
          </p>

          <p>
            On the patient side, LifeTime provides an Android and an iOS app.
            Since 2010 I am responsible for the design of all four components as
            well as the web pages, the print and promo material and many company
            presentations including the pitch that lead to the company getting
            its first capital.
          </p>

          <h3 id="toc_8">The Android and iOS Apps</h3>

          <p>
            Originally, I had designed two relatively different apps for both
            platforms to meet the platform-specific requirements. To connect to
            the LifeTime WLAN, you had to click on a central custom designed
            button with the LifeTime icon, because we considered it to be the
            core action of the app.
          </p>

          <p>
            Gradually, we have brought the apps closer together as the general
            design differences between Android and iOS became smaller in time. A
            fact that also saves a lot of design effort and enhances the
            branding with the uniform look and feel.
          </p>

          <p>
            Creating trust in the product has been the biggest challenge for
            LifeTime from the very beginning. That&#39;s why we gradually
            eliminated all patterns people did not already know from other apps.
            Both the custom connect button and a connetion gesture that
            consisted of bringing the smartphone near the LifeTime Hub in the
            doctor&#39;s office gave way to common patterns and buttons with
            text instead of icons. Custom icons are now only used to add
            delight, not in places where the meaning of icons is really
            critical.
          </p>

          <p>
            People are already using apps with similar features every day (e. g.
            chat apps, scan apps or cloud storing apps). We noticed over time
            that the app is much better accepted when mostly using known
            patterns and only teaches new patterns in a bite-size manner.
          </p>
        </ContentWrapper>
        <TwoImage src1={Screenshot1} src2={Screenshot2} maxHeight={'900px'} />
        <ContentWrapper>
          <h3 id="toc_9">The best interface is no interface</h3>

          <p>
            On the doctor&#39;s side, we had a completely different picture.
            There are no comparable applications and only a few common patterns.
            Doctors and medical staff already use many different programs in
            their daily work, each with its own interface: appointment
            management, practice information systems, image viewer, etc. All of
            these programs are often large legacy systems with unintuitive
            design.
          </p>

          <p>
            In the beginning, I tried to create a design for another interface
            for sending reports and documents to patients. In the next step I
            tried to eliminate steps in the process step by step in order to
            omit unnecessary elements. At the end there was nothing left. The
            LifeTime Desktop Interface became invisible. It only appears when it
            is needed.
          </p>
        </ContentWrapper>
        <EmbedContainer>
          <Video
            width="850"
            height="478"
            src="https://www.youtube.com/embed/YMUITHc8Xkk?rel=0&amp;showinfo=0"
            frameBorder="0"
            allowFullScreen
          />
        </EmbedContainer>
        <ContentWrapper>
          <p>
            Doctors only need to log in once. From this moment on, they just
            have to click on <code>print</code> or alternatively put a file in a
            special folder on their desktop. The minimalistic dispatch window
            pops up and stays in the foreground of the screen to avoid being
            &quot;lost&quot; when the user tries to copy a mobile phone number
            from the practice system into the window. As soon as the user clicks
            on send, the interface disappears again.
          </p>

          <p>
            The challenge in this case was not the visual design of the buttons,
            but the brainstorming and mockup process to achieve an optimal UX
            for the practice team.
          </p>
        </ContentWrapper>
        <LargeImage src={LifeTimeDesktopImage} />
        <ContentWrapper>
          <h3 id="toc_10">The hardware</h3>

          <p>
            Another challenge in medical facilities is the often outdated and
            fragmented IT infrastructure. Some doctors still use dot-matrix
            printers and do not have an internet connection at the reception
            desk due to fear of hackers. The only thing all computers have in
            common is a USB port. In addition to the LifeTime Desktop App, we
            have therefore built our own custom USB-hardware for doctors&#39;
            offices, which provides a uniform interface for patients via a local
            WLAN.
          </p>

          <p>
            I designed the first drafts for the hardware in Blender 3D. Alex
            Hofmann helped me out to translate the files into CAD and printed
            the first prototypes using a laser-sintering process.
          </p>
        </ContentWrapper>
        <TwoImage
          src1={LifeTimeHubImage2}
          src2={LifeTimeHubImage}
          maxHeight={'430px'}
        />
        <ContentWrapper>
          <h2 id="toc_11">Outlook</h2>

          <p>
            We live in exciting times for digital health. Apps are maturing
            slowly and the acceptance of tools that really help doctors and
            patients in their daily communication and interaction is increasing
            from day to day. Digital health has long been synonymous with
            fitness and nutrition apps or quantified self tools. The real
            potential will only unfold when software not only helps young,
            healthy people to stay healthy, but actually supports (chronically)
            sick, elderly people and others really in need of care. When
            software really helps doctors in their daily work and creates
            transparency for all sides.
          </p>
        </ContentWrapper>
      </Section>
      <Footer />
    </GlobalWrapper>
  )
}

export default LifeTime
