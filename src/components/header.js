import React, { useState } from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'
import { color, fontSize } from 'styles/theme'

import Icon from 'components/icons'

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex: 0 0 auto;
  ${media.lg`
  height: ${(props) => (props.article ? '64px' : '')};
  `}
  ${media.sm`
    display: ${(props) => (props.article ? 'flex' : 'block')};
  `};
  z-index: 10;
  height: ${(props) => (props.article ? '74px' : '')};
  ${media.xs`
    display: block;
    height: 112px;
  `}
`

const LogoWrapper = styled.div`
  padding: 24px 0 24px 24px;
  ${media.sm`
    padding: ${(props) => (props.article ? '24px 0 24px 24px' : '24px 0 0 0')};
  `};
  ${media.xs`
    padding: 24px 0 0 0;
  `}
`

const NameLink = styled.a`
  text-decoration: none;
`

const Name = styled.h1`
  white-space: nowrap;
  font-size: ${fontSize.f6};
  text-align: left;
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.8px;
  ${media.sm`
    text-align: center;
    font-size: ${fontSize.f7};
  `};
`

const NameArticle = styled.div`
  white-space: nowrap;
  font-size: ${fontSize.f5};
  font-weight: 700;
  text-align: left;
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.6px;
  color: ${color.grey900};
  ${media.xs`
    text-align: center;
  `};
`

const Role = styled.div`
  color: ${color.grey700};
  text-align: left;
  line-height: 1.4;
  font-size: ${fontSize.f4};
  ${media.sm`
    text-align: center;
    font-size: ${fontSize.f6};
  `};
`

const SocialLinks = styled.div`
  display: grid;
  grid-column-gap: 4px;
  grid-template-columns: auto auto auto;
  padding: 15px 24px 0 24px;
  ${media.sm`
    padding: ${(props) => (props.article ? '15px 12px 0 8px' : '4px 0 0 0')};
    grid-column-gap: 0;
  `}
  ${media.xs`
    padding: 0;
  `}
  justify-content: center;
`

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 20px;
  color: ${color.grey900};
  border: 1px solid white;
  &:hover {
    border: 1px solid ${color.grey150};
    background: ${color.grey150};
    color: ${color.grey900};
  }
  &:active {
    color: ${color.grey900};
  }
  &:visited {
    color: ${color.grey900};
  }
`

export const SvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 24px;
  min-height: 24px;
  color: inherit;
  background: inherit;
`

export const InlineSvg = styled.svg`
  height: 24px;
  width: 24px;
  color: inherit;
  fill: currentColor;
`

const Tooltip = styled.div`
  padding: 2px 24px 0 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  opacity: ${(props) => (props.visible ? '1' : '0')};
  transition: opacity 300ms;
  ${media.sm`
    justify-content: center;
    padding-top: 6px;
  `}
`

const TooltipIcon = styled.div`
  transform: rotate(270deg);
  margin-left: 8px;
`

const TooltipText = styled.div``

const Header = (props) => {
  const [tooltipIsVisible, setTooltipIsVisible] = useState(false)
  const [tooltipText, setTooltipText] = useState('')

  const showTooltip = (tooltipText) => {
    setTooltipIsVisible(true)
    setTooltipText(tooltipText)
  }

  const hideTooltip = () => {
    setTooltipIsVisible(false)
  }

  return (
    <Div article={props.article}>
      <LogoWrapper article={props.article}>
        {props.article && (
          <NameLink href="/">
            <NameArticle article={props.article}>Gabriel Adorf</NameArticle>
          </NameLink>
        )}
        {!props.article && <Name article={props.article}>Gabriel Adorf</Name>}
        {!props.article && <Role>UI / UX Design</Role>}
      </LogoWrapper>
      <div>
        <SocialLinks article={props.article}>
          <SocialLink
            href={`mailto:${process.env.GATSBY_EMAIL}`}
            onMouseOver={() => showTooltip('Mail')}
            onFocus={() => showTooltip('Mail')}
            onMouseLeave={hideTooltip}
            onBlur={hideTooltip}
            aria-label="Send an email to Gabriel"
          >
            <SvgWrapper>
              <InlineSvg>
                <path d="m22.3592881 5.82427054v.59619016c0 .24378184-.1417446.46531584-.3630886.56747461l-8.9485541 4.13010189c-.6647377.306802-1.4305531.306802-2.0952908 0l-8.94855408-4.13010189c-.22134402-.10215877-.36308864-.32369277-.36308864-.56747461v-.59619016c0-.55012277.44596262-.99608539.9960854-.99608539h18.72640542c.5501228 0 .9960854.44596262.9960854.99608539zm-1.25 13.34754436h-18.21857622c-.69035594 0-1.25-.5596441-1.25-1.25v-8.52329148c0-.20710678.16789322-.375.375-.375.05424403 0 .10784237.01176807.15709707.03449228l8.78345405 4.0523453c.6647826.3067049 1.4305981.306593 2.095291-.0003062l8.7755375-4.05180448c.1880319-.08681729.4108411-.00476666.4976584.18326519.0227541.04928162.0345382.1029156.0345382.1571966v8.52310279c0 .6903559-.559644 1.25-1.25 1.25z" />
              </InlineSvg>
            </SvgWrapper>
          </SocialLink>
          <SocialLink
            href="https://twitter.com/gabdorf"
            target="blank"
            onMouseOver={() => showTooltip('Twitter')}
            onFocus={() => showTooltip('Twitter')}
            onMouseLeave={hideTooltip}
            onBlur={hideTooltip}
            aria-label="Gabriel's twitter profile"
          >
            <SvgWrapper>
              <InlineSvg>
                <path d="m21.0247938 8.63275418c.2692962 5.94511812-4.1645259 12.57304192-12.0138477 12.57304192-2.38687665 0-4.60746657-.7004644-6.47782429-1.8997889 2.24266338.2648815 4.48091208-.3590616 6.25708971-1.7496895-1.84828426-.033846-3.40961356-1.2567156-3.94967751-2.93577.66367531.1265545 1.31704969.0897654 1.91008994-.0721066-2.03222975-.4090948-3.43610171-2.2397203-3.39048323-4.1983718.57096679.3163862 1.22139804.5062179 1.91450464.5282914-1.88213023-1.25818714-2.41483637-3.74365857-1.30822031-5.64344757 2.08373448 2.55757806 5.19903526 4.2395756 8.71165825 4.41616327-.6165852-2.64292877 1.3891564-5.19020588 4.1189074-5.19020588 1.2140402 0 2.3132985.5135758 3.0843979 1.33470846.9624028-.18836018 1.8688862-.54153552 2.6841326-1.02568004-.3163862.98741938-.9859478 1.81443829-1.8585852 2.33831504.8549786-.10300948 1.670225-.32963032 2.4266089-.66661845-.5650806.85056393-1.2802606 1.59517527-2.1087511 2.19115865z" />
              </InlineSvg>
            </SvgWrapper>
          </SocialLink>
          <SocialLink
            href="https://dribbble.com/gabdorf"
            target="blank"
            onMouseOver={() => showTooltip('Dribbble')}
            onFocus={() => showTooltip('Dribbble')}
            onMouseLeave={hideTooltip}
            onBlur={hideTooltip}
            aria-label="Gabriel's dribbble profile"
          >
            <SvgWrapper>
              <InlineSvg>
                <path d="m22.9838875 12c0 6.0662442-4.9192125 10.9838875-10.9838875 10.9838875-6.06467504 0-10.98388753-4.9176433-10.98388753-10.9838875 0-6.06624417 4.91921249-10.98388753 10.98388753-10.98388753 6.064675 0 10.9838875 4.91764336 10.9838875 10.98388753zm-11.8390616-3.16179048c-.9414761-1.6868113-2.01946618-3.32968705-3.2386777-4.92391987-2.33015328 1.1831216-4.0765914 3.34224006-4.71208775 5.93757577 3.07078113-.02196777 5.72417453-.35933003 7.95076545-1.0136559zm1.5142074 3.02841468c-.1945718-.4393555-.3985583-.8771419-.6135286-1.3102208-2.54512368.8002546-5.58766052 1.2066585-9.10721191 1.2113658l-.01255302.2322308c0 2.203054.7908399 4.2240893 2.1026299 5.7979235 1.98651452-2.98291 4.53634555-4.9647172 7.63066363-5.9312993zm-6.22943341 7.2823175c2.46195994 1.9221803 5.76026441 2.4933424 8.82476911 1.31179-.39542-2.3348607-1.0199325-4.6132328-1.8672609-6.8288398-2.8542416.8504667-5.15458152 2.6894833-6.95750821 5.5170498zm11.10157201-14.32612764c-1.5330368-1.1831216-3.4473715-1.89707429-5.5311719-1.89707429-.7688721 0-1.5126382.10670062-2.22502179.28871933 1.19881289 1.61306234 2.26111169 3.27319849 3.19317299 4.97727018 1.9394407-.82222244 3.4583555-1.94571722 4.5630207-3.36891522zm-3.6858788 5.0604339c.2463529.50839704.4785837 1.02150154.7013997 1.53774424 1.9770997-.3405005 4.1440638-.3201019 6.5008923.0659033-.1145463-2.02731177-.8881258-3.88201964-2.1245977-5.33973843-1.2662853 1.57697243-2.9656496 2.82128997-5.0776943 3.73609089zm1.4341819 3.34537834c.767303 2.0539869 1.3572947 4.1597551 1.7558529 6.3125971 2.0586943-1.3808316 3.5164131-3.5838856 3.9181096-6.1337167-2.06654-.3577609-3.9573378-.4205259-5.6739625-.1788804z" />
              </InlineSvg>
            </SvgWrapper>
          </SocialLink>
        </SocialLinks>
        {!props.article && (
          <Tooltip visible={tooltipIsVisible} article={props.article}>
            <TooltipText>{tooltipText}</TooltipText>
            <TooltipIcon>
              <Icon glyph="arrow" size={24} />
            </TooltipIcon>
          </Tooltip>
        )}
      </div>
    </Div>
  )
}

export default Header
