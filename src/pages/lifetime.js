import React from 'react'
import styled from 'styled-components'

import GlobalWrapper from 'components/global-wrapper'
import media from 'utils/media-queries'

import Header from 'components/article/header'
import CoverImage from 'components/article/coverimage'
import ContentWrapper from 'components/article/contentwrapper'
import Footer from 'components/footer'
import FullSizeImage from 'components/article/fullsizeimage'

import CoverSrc from 'img/articles/lifetime/lifetime-cover.svg'
import SilosSrc from 'img/articles/lifetime/lifetime-silos.svg'
import Silos2Src from 'img/articles/lifetime/lifetime-silos2.svg'
import UISrc from 'img/articles/lifetime/lifetime-app.jpg'
import UI2Src from 'img/articles/lifetime/lifetime-app2.jpg'
import TasksSrc from 'img/articles/lifetime/lifetime-tasks.jpg'
import OnboardingSrc from 'img/articles/lifetime/lifetime-illustration.svg'
import DesktopSrc from 'img/articles/lifetime/lifetime-desktop.jpg'
import PaperPlaneSrc from 'img/articles/lifetime/lifetime-paperplane.svg'
import TypeIconsSrc from 'img/articles/lifetime/lifetime-typeicons.svg'
import IconsSrc from 'img/articles/lifetime/lifetime-icons.svg'
import ColorsSrc from 'img/articles/lifetime/lifetime-colors.jpg'
import LetterBoxSrc from 'img/articles/lifetime/lifetime-letterbox.jpg'
import LogoSrc from 'img/articles/lifetime/lifetime-logo.svg'
import HeartSpinnerSrc from 'img/articles/lifetime/lifetime-logoanimation.gif'

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
  margin-top: 32px;
  margin-bottom: 32px;
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

const ImageGrid = styled.div`
  background: #f2f2f2;
  max-width: 100%;
  padding: 40px;
  margin: 32px 0;
  text-align: center;
  ${media.lg`
    padding: 32px;
    margin: 0 0 24px 0;
  `}
  ${media.md`
    margin: 0;
    margin: 0 0 16px 0;
  `}
  ${media.sm`
    padding: 16px;
  `}
`

const Img = styled.img`
  max-width: calc(100% - 96px);
  max-height: 300px;
  margin: 8px;
  display: inline-block;
  ${media.xl`
    max-height: 240px;
  `}
  ${media.lg`
    max-height: 200px;
  `}
  ${media.md`
    max-height: 120px;
    margin: 4px;
  `}
  ${media.sm`
    max-height: 80px;
    margin: 2px;
  `}
`

const LifeTime = () => {
  return (
    <GlobalWrapper>
      <Header title="LifeTime" />
      <CoverImage src={CoverSrc} focusX={'35%'} focusY={'50%'} />
      <Section>
        <ContentWrapper>
          <h2>Data flow in medicine is broken</h2>
          <h3>We have no easy access to our own medical data</h3>
          <p>
            Medical practices are some of the last workplaces in Germany where a
            lot of communication with clients (patients) and colleagues (other
            doctors) is still done paper-based or verbally. Important
            information, is written down illegibly by hand, is only briefly
            mentioned - or in the worst case - not handed out to patients at
            all.
          </p>
          <p>
            Historically, the fact that people are not granted direct access to
            their own health data can be explained by the role of doctors as
            &quot;gods in white&quot;. Patients weren&#39;t considered as wise
            and educated enough to have a say and diagnostic details were only
            seen as an overwhelming burden to them. This attitude can still be
            found among older doctors today.
          </p>
          <p>
            In fact, I believe only in the field of psychiatry/psychotherapy, it
            sometimes is better if doctors are able to make diagnoses and take
            notes without patients having direct access to everything. In all
            other medical fields, transparency should be an absolute
            prerequisite for medical treatment.
          </p>
          <p>
            It should be clear to everyone that medicine is not an exact science
            and that it holds many uncertainties. Decisions are often based on
            probabilities or experience. In no other domain with equivalent
            consequences for one&#39;s own life would one give up complete
            control to outsiders so readily and &quot;hope for the best&quot;
            without trying to understand the basis on which decisions are made.
          </p>
          <h3>Doctors need access to the medical history of patients</h3>
          <p>
            People - especially chronically ill - who actually try to keep track
            of past treatments and diagnoses usually do so in form of a folder
            in which documents are filed. This folder is then carried from
            doctor to doctor and placed on the counter at the reception before
            the appointment.
          </p>
          <p>
            The handling of these folders varies from place to place. In some
            facilities, the documents are all scanned in. In others, the doctor
            leafs through them briefly just before the treatment, hoping that
            something accidentally strikes her or his eye. In other facilities,
            the paper stacks are simply ignored.
          </p>
          <p>
            It&#39;s not the doctors&#39; fault. On average, they only have 8
            minutes for one treatment and have no chance to process big stacks
            of files during this time.
          </p>
          <p>
            In the current state of affairs people own only part of their
            medical data themselves – mostly on paper. Most of it is scattered
            over various computers of doctor&#39;s offices and hospitals they
            have visited in the past.
          </p>
          <p>
            If a patient or doctor needs access to certain information, the
            patient must first remember that the information exists and where
            the data was collected. Then the current standard process is a phone
            call followed by a direct transmission of the file from doctor to
            doctor by fax. A technology from the 1970ies that almost no one else
            uses anymore.
          </p>
        </ContentWrapper>
        <FullSizeImage src={SilosSrc} />
        <ContentWrapper>
          <h3>Computers can not help to take medical decisions.</h3>
          <p>
            If previous findings are not digital, structured and do not contain
            any meta-information, the data is not very useful to computers.
            There are efforts to make medical documents understandable for
            machines through OCR software. However, the road to meaningful
            results on this path is still long.
          </p>
          <p>
            For your diagnoses, doctors therefore rely to a large extent on the
            data they collect themselves during an appointment or on the few
            pieces of information that are collected through questionaires,
            handed out to patients before the appointement.
          </p>
          <p>
            This is tiresome repetitive work for both doctors and patients and
            let&#39;s be honest: Who can reliably remember details of diseases
            of his relatives and his own medical past?
          </p>
          <p>
            But: This information could be very valuable for a better diagnosis.
          </p>
          <p>
            What if there was a system in which patients could fully own,
            control and, if necessary, share their data with doctors? On the
            medical side, software would then aggregate this data and help with
            the diagnostic work.
          </p>
        </ContentWrapper>
        <FullSizeImage src={Silos2Src} />
        <ContentWrapper>
          <h2>Our approach</h2>
          <h3>Secure infrastructure for medical data</h3>
          <p>
            The path to computer-assisted medical treatment begins with
            structured collection and aggregation of the patient&#39;s medical
            context. This data is then supplemented by new information that is
            created during an appointment or an hospital stay and ends with all
            newly acquired information and treatment instructions being
            structured and fully returned into the hands of the patient.
          </p>
          <p>
            Patients should be considered intelligent enough to have a say. They
            should be allowed to ask questions and to question decisions.
            Interfaces are needed to give them insights into their treatment
            processes and enable them to browse through their medical history
            and draw conclusions from it.
          </p>
          <p>
            Doctors should be supported in their difficult work by the best
            possible data basis and clear and just as helpful interfaces, which
            aggregate this data base in a meaningful and understandable way and
            thus enable raw computing power to be used for medical purposes.
          </p>
        </ContentWrapper>
        <FullSizeImage src={UISrc} />
        <ContentWrapper>
          <h3>Decentral & mobile first</h3>
          <p>
            In the past several companies have tried to solve the problems with
            centralized cloud platforms where both doctors and patients can log
            in.
          </p>
          <p>
            The difficulty always lies in building a link between the two sides
            and a way for the encryption keys to be exchanged and stored. In
            some systems, the patients have to authenticate themselves by
            calling their doctor&#39;s offices. In others doctors have to hand
            over one-time-passwords on paper.
          </p>
          <p>
            All solutions have in common that as a doctor you have to open a web
            app to send a file. In most apps you have to log in every time. Next
            the patient has to log in to the patient portal to retrieve the
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
            LifeTime follows another path. It is decentral and mobile first.
            Encryption keys are stored on the doctor&#39;s computer and medical
            data is stored on the patient&#39;s smartphone and can from there be
            pushed to cloud storage or sent to other doctors at the
            patient&#39;s will.
          </p>
          <p>
            Doctors can send files to a patient&#39;s smartphone via an
            end-to-end encrypted connection without the patient having to set up
            a user account in a web app beforehand. The patient does not even
            need to have heard of LifeTime before.
          </p>
          <p>
            The assignment between doctor and patient is created using the
            insurance number and the mobile phone number. Normally, doctors&#39;
            offices already have both numbers stored in their systems.
          </p>
          <p>
            With LifeTime the patient is in full possession of his data and the
            only one being able to decrypt it. The app runs natively and if it
            is being discontinued in the future, the user has enough time to
            export the data to another system.
          </p>
        </ContentWrapper>
        <FullSizeImage src={TasksSrc} />
        <ContentWrapper>
          <h2>The components of LifeTime</h2>
          <h3>LifeTime for Patients: The Android and iOS Apps</h3>
          <p>
            On the patient side, LifeTime provides an Android and an iOS app
            that serve as electronic medical records and have elaborated
            features for managing, scanning, receiving and sending files. It is
            also equipped with sophisticated medication reminder features.
          </p>
          <p>
            Originally, I had designed two relatively different apps for both
            platforms to meet the platform-specific requirements. Gradually, I
            brought the apps closer together as the general design differences
            between Android and iOS became smaller in time. A fact that also
            saves a lot of design effort and enhances the branding efforts with
            a uniform look and feel.
          </p>
          <p>
            Creating trust in the product has been the biggest challenge for
            LifeTime from the very beginning. That&#39;s why we gradually
            eliminated patterns that people were not already familar with from
            other apps. Custom iconography is only used to add delight, not in
            places where the meaning of icons and symobls is critical.
          </p>

          <p>
            People are already using apps with similar features every day (e. g.
            chat apps, scan apps or cloud storage apps). We noticed over time
            that the LifeTime app is more likely to be accepted when familiar
            patterns are predominantly used and new patterns are only taught in
            bite-sized form.
          </p>
        </ContentWrapper>
        <FullSizeImage src={UI2Src} />
        <ContentWrapper>
          <h3>LifeTime for Doctors: The best interface is no interface</h3>
          <p>
            On the doctor&#39;s side LifeTime provides an Electron app for
            asynchronous, encrypted transmission of files to patients or, as of
            late, also directly to colleagues.
          </p>
          <p>
            Here I had fewer comparable applications and fewer known patterns to
            start from. Doctors and medical teams already use many different
            applications in their daily work, all with their own interfaces:
            appointment management apps, practice information systems, image
            viewers, etc. These programs are often large legacy systems with
            unintuitive design.
          </p>
          <p>
            In the beginning, I created an elaborated interface for sending
            reports and documents to patients. In the next step I began to
            eliminate and hide uncritical parts of the UI in order to only show
            elements really necessary for the task at hand. At the end there was
            nothing left. The LifeTime Desktop Interface became mostly invisible
            and only appeared when needed.
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
            designated folder on their desktop.
          </p>
          <p>
            The minimalistic dispatch window pops up and stays in the foreground
            of the screen to avoid getting lost when the user copies a mobile
            phone number from the practice management system into the window. As
            soon as the user clicks on send, the interface disappears again.
          </p>
          <p>
            The challenge in this case was not the visual design of the buttons,
            but the brainstorming and mockup process to achieve an optimal
            experience for the practice team.
          </p>
          <p>
            Over time a more visible interface was added back carefully as new
            features like an inbox were introduced. There too the design is
            based on known chat apps to have the least onboarding friction
            possible.
          </p>
        </ContentWrapper>
        <FullSizeImage src={DesktopSrc} />
        <ContentWrapper>
          <h2>Outlook</h2>
          <p>
            We live in exciting times for digital health. Apps are maturing
            slowly and the acceptance of tools that really help doctors and
            patients in their daily communication and interaction is increasing
            from day to day.
          </p>
          <p>
            Digital health has long been synonymous with fitness and nutrition
            apps or quantified self tools.
          </p>
          <p>
            I believe that the real potential will only unfold when software not
            only helps young, healthy people to stay healthy, but actually
            supports chronically sick, elderly people or others really in need
            of care, when it helps doctors in their daily work and creates
            transparency for all sides.
          </p>
        </ContentWrapper>
      </Section>
      <ImageGrid>
        <Img src={IconsSrc} />
        <Img src={ColorsSrc} />
        <Img src={OnboardingSrc} />
        <Img src={LogoSrc} />
        <Img src={LetterBoxSrc} />
        <Img src={HeartSpinnerSrc} />
        <Img src={PaperPlaneSrc} />
        <Img src={TypeIconsSrc} />
      </ImageGrid>
      <Footer />
    </GlobalWrapper>
  )
}

export default LifeTime
