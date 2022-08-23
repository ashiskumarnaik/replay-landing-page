import clsx from 'clsx'
import { gsap } from 'lib/gsap'
import { FC, useRef } from 'react'

import { Heading } from '~/components/common/heading'
import { ProgressMarker } from '~/components/common/progress-bar'
import { Section } from '~/components/common/section'
import { Container } from '~/components/layout/container'
import { Button } from '~/components/primitives/button'
import { useDeviceDetect } from '~/hooks/use-device-detect'
import { useIsomorphicLayoutEffect } from '~/hooks/use-isomorphic-layout-effect'
import { useMedia } from '~/hooks/use-media'
import { breakpoints } from '~/lib/constants'

import s from './hero.module.scss'

export const Hero: FC = () => {
  const isDesktopSize = useMedia(`(min-width: ${breakpoints.screenLg}px)`)
  const ref = useRef<HTMLDivElement>(null)
  const { isDesktop } = useDeviceDetect()

  useIsomorphicLayoutEffect(() => {
    let tl: gsap.core.Timeline

    if (ref.current && isDesktopSize) {
      tl = gsap
        .timeline({
          scrollTrigger: {
            start: 0,
            end: 300,
            scrub: true
          }
        })
        .to(ref.current, {
          opacity: 0,
          scale: 0.97,
          y: -100
        })
    }

    return () => {
      tl?.scrollTrigger?.kill()
      tl?.kill()
    }
  }, [isDesktopSize])

  return (
    <Section className={s['section']} ref={ref}>
      <Container className={s['container']}>
        <div className={s['illustration']}>
          <span className={s['marker']}>
            <ProgressMarker active />
          </span>
          <svg
            width="1920"
            height="772"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={s['svg']}
          >
            <path fill="#fff" d="M0 0h1920v772H0z" />
            <mask
              id="b"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="11"
              y="0"
              width="1909"
              height="772"
            >
              <path d="M11 0h1909v772H11V0Z" fill="url(#a)" />
            </mask>
            <g mask="url(#b)" fillRule="evenodd" clipRule="evenodd">
              <path
                d="m1913.81 267.213 6.93-3.995-.5-.866-6.93 3.995.5.866Zm-13.85 7.992 6.92-3.996-.5-.866-6.92 3.996.5.866Zm-13.86 7.991 6.93-3.996-.5-.866-6.93 3.996.5.866Zm-13.86 7.991 6.93-3.995-.5-.867-6.92 3.996.49.866Zm-13.85 7.992 6.93-3.996-.5-.866-6.93 3.995.5.867Zm-13.86 7.991 6.93-3.996-.5-.866-6.93 3.996.5.866Zm-13.85 7.991 6.93-3.995-.5-.867-6.93 3.996.5.866Zm-13.86 7.992 6.93-3.996-.5-.866-6.93 3.995.5.867Zm-13.85 7.991 6.92-3.996-.5-.866-6.92 3.996.5.866Zm-13.86 7.991 6.93-3.996-.5-.866-6.93 3.996.5.866Zm-13.86 7.991 6.93-3.995-.5-.866-6.93 3.995.5.866Zm-13.85 7.992 6.93-3.996-.5-.866-6.93 3.995.5.867Zm-13.86 7.991 6.93-3.996-.5-.866-6.93 3.996.5.866Zm-13.85 7.991 6.92-3.995-.5-.867-6.92 3.996.5.866Zm-13.86 7.991 6.93-3.995-.5-.866-6.93 3.995.5.866Zm-13.86 7.992 6.93-3.996-.5-.866-6.92 3.996.49.866Zm-13.85 7.991 6.93-3.996-.5-.866-6.93 3.996.5.866Zm-13.86 7.991 6.93-3.995-.5-.867-6.93 3.996.5.866Zm-13.85 7.992 6.93-3.996-.5-.866-6.93 3.995.5.867Zm-13.86 7.991 6.93-3.996-.5-.866-6.93 3.996.5.866Zm-13.85 7.991 6.92-3.996-.5-.866-6.92 3.996.5.866Zm-13.86 7.991 6.93-3.995-.5-.866-6.93 3.995.5.866Zm-13.86 7.992 6.93-3.996-.5-.866-6.93 3.995.5.867Zm-13.85 7.991 6.93-3.996-.5-.866-6.93 3.996.5.866Zm-13.86 7.991 6.93-3.995-.5-.867-6.93 3.996.5.866Zm-13.85 7.991 6.92-3.995-.49-.866-6.93 3.995.5.866Zm-13.86 7.992 6.93-3.996-.5-.866-6.93 3.996.5.866Zm-13.85 7.991 6.92-3.996-.5-.866-6.92 3.996.5.866Zm-13.86 7.991 6.93-3.995-.5-.867-6.93 3.996.5.866Zm-13.86 7.992 6.93-3.996-.5-.866-6.93 3.995.5.867Zm-13.85 7.991 6.93-3.996-.5-.866-6.93 3.996.5.866Zm-13.86 7.991 6.93-3.996-.5-.866-6.93 3.996.5.866Zm-13.85 7.991 6.92-3.995-.5-.866-6.92 3.995.5.866Zm-13.86 7.992 6.93-3.996-.5-.866-6.93 3.995.5.867Zm-13.86 7.991 6.93-3.996-.5-.866-6.93 3.996.5.866Zm-13.85 7.991 6.93-3.995-.5-.867-6.93 3.996.5.866Zm-13.86 7.991 6.93-3.995-.5-.866-6.93 3.995.5.866Zm-13.85 7.992 6.92-3.996-.49-.866-6.93 3.995.5.867Zm-13.86 7.991 6.93-3.996-.5-.866-6.93 3.996.5.866Zm-13.85 7.991 6.92-3.995-.5-.867-6.92 3.996.5.866Zm-13.86 7.992 6.93-3.996-.5-.866-6.93 3.995.5.867Zm-13.86 7.991 6.93-3.996-.5-.866-6.93 3.996.5.866Zm-13.85 7.991 6.93-3.996-.5-.866-6.93 3.996.5.866Zm-13.86 7.991 6.93-3.995-.5-.867-6.93 3.996.5.866Zm-13.85 7.992 6.92-3.996-.5-.866-6.92 3.995.5.867Zm-13.86 7.991 6.93-3.996-.5-.866-6.93 3.996.5.866Zm-13.86 7.991 6.93-3.995-.5-.867-6.92 3.996.49.866Zm-13.85 7.991 6.93-3.995-.5-.866-6.93 3.995.5.866Zm-13.86 7.992 6.93-3.996-.5-.866-6.93 3.995.5.867Zm-13.85 7.991 6.93-3.996-.5-.866-6.93 3.996.5.866Zm-13.86 7.991 6.93-3.995-.5-.867-6.93 3.996.5.866Zm-13.85 7.992 6.92-3.996-.5-.866-6.92 3.995.5.867Zm-13.86 7.991 6.93-3.996-.5-.866-6.93 3.996.5.866Zm-13.86 7.991 6.93-3.996-.5-.866-6.93 3.996.5.866Zm-13.85 7.991 6.93-3.995-.5-.867-6.93 3.996.5.866Zm-13.86 7.992 6.93-3.996-.5-.866-6.93 3.995.5.867Zm-13.85 7.991 6.92-3.996-.49-.866-6.93 3.996.5.866Zm-13.86 7.991 6.93-3.995-.5-.867-6.93 3.996.5.866Zm-13.85 7.991 6.92-3.995-.5-.866-6.92 3.995.5.866Zm-13.86 7.992 6.93-3.996-.5-.866-6.93 3.995.5.867Zm-13.86 7.991 6.93-3.996-.5-.866-6.93 3.996.5.866Zm-13.85 7.991 6.93-3.995-.5-.867-6.93 3.996.5.866Zm-13.86 7.992 6.93-3.996-.5-.866-6.93 3.995.5.867Zm-13.85 7.991 6.92-3.996-.5-.866-6.92 3.996.5.866Z"
                fill="url(#c)"
              />
              <path
                d="m874.422 199.195 6.929 3.996.5-.866-6.93-3.996-.499.866Zm13.858 7.993 6.929 3.996.5-.866-6.929-3.997-.5.867Zm13.859 7.993 6.929 3.996.5-.866-6.93-3.997-.499.867Zm13.858 7.992 6.93 3.997.499-.866-6.929-3.997-.5.866Zm13.859 7.993 6.929 3.997.5-.867-6.93-3.996-.499.866Zm13.858 7.993 6.93 3.997.499-.867-6.929-3.996-.5.866Zm13.859 7.993 6.929 3.996.5-.866-6.929-3.996-.5.866Zm13.859 7.993 6.929 3.996.499-.866-6.929-3.996-.499.866Zm13.858 7.993 6.929 3.996.5-.866-6.929-3.997-.5.867Zm13.859 7.993 6.931 3.996.5-.866-6.932-3.997-.499.867Zm13.861 7.992 6.93 3.997.5-.866-6.93-3.997-.5.866Zm13.86 7.993 6.92 3.997.5-.867-6.92-3.996-.5.866Zm13.85 7.993 6.93 3.997.5-.867-6.93-3.996-.5.866Zm13.86 7.993 6.93 3.996.5-.866-6.93-3.996-.5.866Zm13.86 7.993 6.93 3.996.5-.866-6.93-3.996-.5.866Zm13.86 7.993 6.93 3.996.5-.866-6.93-3.997-.5.867Zm13.86 7.993 6.93 3.996.5-.866-6.93-3.997-.5.867Zm13.86 7.992 6.93 3.997.5-.866-6.93-3.997-.5.866Zm13.86 7.993 6.92 3.997.5-.866-6.92-3.997-.5.866Zm13.85 7.993 6.93 3.997.5-.867-6.93-3.996-.5.866Zm13.86 7.993 6.93 3.996.5-.866-6.93-3.996-.5.866Zm13.86 7.993 6.93 3.996.5-.866-6.93-3.996-.5.866Zm13.86 7.993 6.93 3.996.5-.866-6.93-3.997-.5.867Zm13.86 7.993 6.93 3.996.5-.866-6.93-3.997-.5.867Zm13.86 7.992 6.93 3.997.5-.866-6.93-3.997-.5.866Zm13.86 7.993 6.92 3.997.5-.867-6.93-3.996-.49.866Zm13.85 7.993 6.93 3.997.5-.867-6.93-3.996-.5.866Zm13.86 7.993 6.93 3.996.5-.866-6.93-3.996-.5.866Zm13.86 7.993 6.93 3.996.5-.866-6.93-3.996-.5.866Zm13.86 7.993 6.93 3.996.5-.866-6.93-3.997-.5.867Zm13.86 7.993 6.93 3.996.5-.866-6.93-3.997-.5.867Zm13.86 7.992 6.93 3.997.5-.866-6.93-3.997-.5.866Zm13.86 7.993 6.92 3.997.5-.867-6.93-3.996-.49.866Zm13.85 7.993 6.93 3.997.5-.867-6.93-3.996-.5.866Zm13.86 7.993 6.93 3.996.5-.866-6.93-3.996-.5.866Zm13.86 7.993 6.93 3.996.5-.866-6.93-3.996-.5.866Zm13.86 7.993 6.93 3.996.5-.866-6.93-3.997-.5.867Zm13.86 7.993 6.93 3.996.5-.866-6.93-3.997-.5.867Zm13.86 7.992 6.93 3.997.5-.866-6.93-3.997-.5.866Zm13.86 7.993 6.92 3.997.5-.867-6.93-3.996-.49.866Zm13.85 7.993 6.93 3.996.5-.866-6.93-3.996-.5.866Zm13.86 7.993 6.93 3.996.5-.866-6.93-3.996-.5.866Zm13.86 7.993 6.93 3.996.5-.866-6.93-3.996-.5.866Zm13.86 7.993 6.93 3.996.5-.866-6.93-3.997-.5.867Zm13.86 7.992 6.93 3.997.5-.866-6.93-3.997-.5.866Zm13.86 7.993 6.93 3.997.5-.866-6.93-3.997-.5.866Zm13.86 7.993 6.92 3.997.5-.867-6.93-3.996-.49.866Zm13.85 7.993 6.93 3.996.5-.866-6.93-3.996-.5.866Zm13.86 7.993 6.93 3.996.5-.866-6.93-3.996-.5.866Zm13.86 7.993 6.93 3.996.5-.866-6.93-3.996-.5.866Zm13.86 7.993 6.93 3.996.5-.866-6.93-3.997-.5.867Zm13.86 7.992 6.93 3.997.5-.866-6.93-3.997-.5.866Zm13.86 7.993 6.93 3.997.5-.866-6.93-3.997-.5.866Zm13.85 7.993 6.93 3.997.5-.867-6.93-3.996-.5.866Zm13.86 7.993 6.93 3.997.5-.867-6.93-3.996-.5.866Zm13.86 7.993 6.93 3.996.5-.866-6.93-3.996-.5.866Zm13.86 7.993 6.93 3.996.5-.866-6.93-3.996-.5.866Zm13.86 7.993 6.93 3.996.5-.866-6.93-3.997-.5.867Zm13.86 7.992 6.93 3.997.5-.866-6.93-3.997-.5.866Zm13.86 7.993 6.93 3.997.5-.866-6.93-3.997-.5.866Zm13.85 7.993 6.93 3.997.5-.867-6.93-3.996-.5.866Zm13.86 7.993 6.93 3.997.5-.867-6.93-3.996-.5.866Zm13.86 7.993 6.93 3.996.5-.866-6.93-3.996-.5.866Zm13.86 7.993 6.93 3.996.5-.866-6.93-3.996-.5.866Zm13.86 7.993 6.93 3.996.5-.866-6.93-3.997-.5.867Z"
                fill="url(#d)"
              />
              <path
                d="m1913.81 317.838 6.93 3.995-.5.867-6.93-3.996.5-.866Zm-13.85-7.991 6.92 3.995-.5.866-6.92-3.995.5-.866Zm-13.86-7.992 6.93 3.996-.5.866-6.93-3.996.5-.866Zm-13.86-7.991 6.93 3.996-.5.866-6.92-3.996.49-.866Zm-13.85-7.991 6.93 3.995-.5.866-6.93-3.995.5-.866Zm-13.86-7.992 6.93 3.996-.5.866-6.93-3.995.5-.867Zm-13.85-7.991 6.93 3.996-.5.866-6.93-3.996.5-.866Zm-13.86-7.991 6.93 3.995-.5.867-6.93-3.996.5-.866Zm-13.85-7.992 6.92 3.996-.5.866-6.92-3.995.5-.867Zm-13.86-7.991 6.93 3.996-.5.866-6.93-3.996.5-.866Zm-13.86-7.991 6.93 3.996-.5.866-6.93-3.996.5-.866Zm-13.85-7.991 6.93 3.995-.5.866-6.93-3.995.5-.866Zm-13.86-7.992 6.93 3.996-.5.866-6.93-3.995.5-.867Zm-13.85-7.991 6.92 3.996-.5.866-6.92-3.996.5-.866Zm-13.86-7.991 6.93 3.995-.5.867-6.93-3.996.5-.866Zm-13.86-7.991 6.93 3.995-.5.866-6.92-3.995.49-.866Zm-13.85-7.992 6.93 3.996-.5.866-6.93-3.996.5-.866Zm-13.86-7.991 6.93 3.996-.5.866-6.93-3.996.5-.866Zm-13.85-7.991 6.93 3.995-.5.867-6.93-3.996.5-.866Zm-13.86-7.992 6.93 3.996-.5.866-6.93-3.995.5-.867Zm-13.85-7.991 6.92 3.996-.5.866-6.92-3.996.5-.866Zm-13.86-7.991 6.93 3.996-.5.866-6.93-3.996.5-.866Zm-13.86-7.991 6.93 3.995-.5.866-6.93-3.995.5-.866Zm-13.85-7.992 6.93 3.996-.5.866-6.93-3.995.5-.867Zm-13.86-7.991 6.93 3.996-.5.866-6.93-3.996.5-.866Zm-13.85-7.991 6.92 3.995-.49.867-6.93-3.996.5-.866Zm-13.86-7.992 6.93 3.996-.5.866-6.93-3.995.5-.867Zm-13.85-7.991 6.92 3.996-.5.866-6.92-3.995.5-.867Zm-13.86-7.991 6.93 3.9956-.5.8663-6.93-3.9957.5-.8662Zm-13.86-7.9913 6.93 3.9956-.5.8663-6.93-3.9957.5-.8662Zm-13.85-7.9913 6.93 3.9957-.5.8662-6.93-3.9957.5-.8662Zm-13.86-7.9913 6.93 3.9957-.5.8662-6.93-3.9956.5-.8663Zm-13.85-7.9912 6.92 3.9956-.5.8663-6.92-3.9956.5-.8663Zm-13.86-7.9913 6.93 3.9956-.5.8663-6.93-3.9956.5-.8663Zm-13.86-7.9913 6.93 3.9957-.5.8662-6.93-3.9956.5-.8663Zm-13.85-7.9912 6.93 3.9956-.5.8662-6.93-3.9956.5-.8662ZM1415 30.1518l6.93 3.9956-.5.8663-6.93-3.9956.5-.8663Zm-13.85-7.9913 6.92 3.9956-.49.8663-6.93-3.9956.5-.8663Zm-13.86-7.9912 6.93 3.9956-.5.8662-6.93-3.9956.5-.8662Zm-13.85-7.99126 6.92 3.99556-.5.8663-6.92-3.99565.5-.86621Zm-13.86-7.99133 6.93 3.99566-.5.86621-6.93-3.995601.5-.866269Z"
                fill="url(#e)"
              />
              <path
                d="m680.402 497.756 6.929-3.997.5.867-6.93 3.996-.499-.866Zm13.858-7.993 6.93-3.997.499.867-6.929 3.996-.5-.866Zm13.859-7.993 6.929-3.996.5.866-6.929 3.996-.5-.866Zm13.859-7.993 6.929-3.996.499.866-6.929 3.996-.499-.866Zm13.858-7.993 6.929-3.996.5.866-6.929 3.997-.5-.867Zm13.859-7.993 6.929-3.996.5.866-6.93 3.997-.499-.867Zm13.858-7.992 6.929-3.997.5.866-6.929 3.997-.5-.866Zm13.859-7.993 6.929-3.997.5.867-6.93 3.996-.499-.866Zm13.858-7.993 6.929-3.996.5.866-6.929 3.996-.5-.866Zm13.859-7.993 6.929-3.996.5.866-6.93 3.996-.499-.866Zm13.858-7.993 6.93-3.996.499.866-6.929 3.996-.5-.866Zm13.859-7.993 6.929-3.996.5.866-6.929 3.997-.5-.867Zm13.858-7.992 6.93-3.997.499.866-6.929 3.997-.5-.866Zm13.859-7.993 6.929-3.997.5.866-6.929 3.997-.5-.866Zm13.859-7.993 6.929-3.997.5.867-6.93 3.996-.499-.866Zm13.858-7.993 6.929-3.996.5.866-6.929 3.996-.5-.866Zm13.859-7.993 6.929-3.996.5.866-6.93 3.996-.499-.866Zm13.858-7.993 6.93-3.996.499.866-6.929 3.996-.5-.866Zm13.859-7.993 6.929-3.996.5.866-6.93 3.997-.499-.867Zm13.858-7.992 6.93-3.997.499.866-6.929 3.997-.5-.866Zm13.859-7.993 6.929-3.997.5.866-6.929 3.997-.5-.866Zm13.859-7.993 6.929-3.997.499.867-6.929 3.996-.499-.866Zm13.858-7.993 6.929-3.996.5.866-6.929 3.996-.5-.866Zm13.859-7.993 6.931-3.996.5.866-6.932 3.996-.499-.866Zm13.861-7.993 6.93-3.996.5.866-6.93 3.996-.5-.866Zm13.86-7.993 6.92-3.996.5.866-6.92 3.997-.5-.867Zm13.85-7.993 6.93-3.996.5.866-6.93 3.997-.5-.867Zm13.86-7.992 6.93-3.997.5.866-6.93 3.997-.5-.866Zm13.86-7.993 6.93-3.997.5.867-6.93 3.996-.5-.866Zm13.86-7.993 6.93-3.996.5.866-6.93 3.996-.5-.866Zm13.86-7.993 6.93-3.996.5.866-6.93 3.996-.5-.866Zm13.86-7.993 6.93-3.996.5.866-6.93 3.996-.5-.866Zm13.86-7.993 6.92-3.996.5.866-6.92 3.997-.5-.867Zm13.85-7.993 6.93-3.996.5.866-6.93 3.997-.5-.867Zm13.86-7.992 6.93-3.997.5.866-6.93 3.997-.5-.866Zm13.86-7.993 6.93-3.997.5.867-6.93 3.996-.5-.866Zm13.86-7.993 6.93-3.997.5.867-6.93 3.996-.5-.866Zm13.86-7.993 6.93-3.996.5.866-6.93 3.996-.5-.866Zm13.86-7.993 6.93-3.996.5.866-6.93 3.996-.5-.866Zm13.86-7.993 6.92-3.996.5.866-6.93 3.997-.49-.867Zm13.85-7.992 6.93-3.997.5.866-6.93 3.997-.5-.866Zm13.86-7.993 6.93-3.997.5.866-6.93 3.997-.5-.866Zm13.86-7.993 6.93-3.997.5.867-6.93 3.996-.5-.866Zm13.86-7.993 6.93-3.996.5.866-6.93 3.996-.5-.866Zm13.86-7.993 6.93-3.996.5.866-6.93 3.996-.5-.866Zm13.86-7.993 6.93-3.996.5.866-6.93 3.996-.5-.866Zm13.86-7.993 6.92-3.996.5.866-6.93 3.997-.49-.867Zm13.85-7.993 6.93-3.996.5.866-6.93 3.997-.5-.867Zm13.86-7.992 6.93-3.997.5.867-6.93 3.996-.5-.866Zm13.86-7.993 6.93-3.997.5.867-6.93 3.996-.5-.866Zm13.86-7.9931 6.93-3.9964.5.8662-6.93 3.9965-.5-.8663Zm13.86-7.9928 6.93-3.9964.5.8662-6.93 3.9964-.5-.8662Zm13.86-7.9929 6.93-3.9964.5.8663-6.93 3.9964-.5-.8663Zm13.86-7.9929 6.92-3.9964.5.8663-6.93 3.9964-.49-.8663Zm13.85-7.9928 6.93-3.9964.5.8662-6.93 3.9965-.5-.8663Zm13.86-7.9928 6.93-3.9965.5.8663-6.93 3.9964-.5-.8662Zm13.86-7.9929 6.93-3.9964.5.8662-6.93 3.9964-.5-.8662Zm13.86-7.9929 6.93-3.9964.5.8662-6.93 3.9965-.5-.8663Zm13.86-7.9928 6.93-3.9965.5.8663-6.93 3.9964-.5-.8662Zm13.86-7.9929 6.93-3.9964.5.8663-6.93 3.9964-.5-.8663Zm13.86-7.9929 6.92-3.9964.5.8662-6.93 3.9965-.49-.8663Zm13.85-7.9928 6.93-3.99643.5.86627-6.93 3.99636-.5-.8662Zm13.86-7.99283 6.93-3.99646.5.866271-6.93 3.996399-.5-.86621Z"
                fill="url(#f)"
              />
              <path
                d="M1453.32 1.30182v-7.99176h-1v7.99176h1Zm0 15.98348V9.29352h-1v7.99178h1Zm0 15.9836v-7.9918h-1v7.9918h1Zm0 15.9835v-7.9918h-1v7.9918h1Zm0 15.9835v-7.9918h-1v7.9918h1Zm0 15.9835v-7.9917h-1v7.9917h1Zm0 15.9835v-7.9918h-1v7.9918h1Zm0 15.9831v-7.991h-1v7.991h1Zm0 15.984v-7.992h-1v7.992h1Zm0 15.984v-7.992h-1v7.992h1Zm0 15.983v-7.992h-1v7.992h1Zm0 15.984v-7.992h-1v7.992h1Zm0 15.983v-7.992h-1v7.992h1Zm0 15.984v-7.992h-1v7.992h1Zm0 15.983v-7.992h-1v7.992h1Zm0 15.984v-7.992h-1v7.992h1Zm0 15.983v-7.992h-1v7.992h1Zm0 15.984v-7.992h-1v7.992h1Zm0 15.983v-7.992h-1v7.992h1Zm0 15.984v-7.992h-1v7.992h1Zm0 15.983v-7.992h-1v7.992h1Zm0 15.984v-7.992h-1v7.992h1Zm0 15.983v-7.991h-1v7.991h1Zm0 15.984v-7.992h-1v7.992h1Zm0 15.983v-7.992h-1v7.992h1Zm0 15.983v-7.991h-1v7.991h1Zm0 15.984v-7.992h-1v7.992h1Zm0 15.983v-7.991h-1v7.991h1Zm0 15.984v-7.992h-1v7.992h1Zm0 15.983v-7.992h-1v7.992h1Zm0 15.983v-7.991h-1v7.991h1Zm0 15.984v-7.992h-1v7.992h1Zm0 15.983v-7.991h-1v7.991h1Zm0 15.984v-7.992h-1v7.992h1Zm0 15.983v-7.992h-1v7.992h1Zm0 15.983v-7.991h-1v7.991h1Zm0 15.984v-7.992h-1v7.992h1Zm0 15.983v-7.991h-1v7.991h1Zm0 15.984v-7.992h-1v7.992h1Zm0 15.983v-7.992h-1v7.992h1Zm0 15.983v-7.991h-1v7.991h1Zm0 15.984v-7.992h-1v7.992h1Zm0 15.983v-7.992h-1v7.992h1Zm0 15.984v-7.992h-1v7.992h1Zm0 15.983v-7.992h-1v7.992h1Zm0 15.983v-7.991h-1v7.991h1Zm0 15.984v-7.992h-1v7.992h1Zm0 15.983v-7.991h-1v7.991h1Zm0 15.984v-7.992h-1v7.992h1Z"
                fill="url(#g)"
              />
            </g>
            <defs>
              <linearGradient
                id="a"
                x1="1920"
                y1="605.5"
                x2="258.513"
                y2="-484.34"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D9D9D9" stopOpacity="0" />
                <stop offset=".0344073" stopColor="#D9D9D9" stopOpacity="0" />
                <stop offset=".162578" stopColor="#D9D9D9" />
                <stop offset=".475252" stopColor="#D9D9D9" />
                <stop offset=".553959" stopColor="#D9D9D9" stopOpacity="0" />
                <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="c"
                x1="733.105"
                y1="948.552"
                x2="2224.47"
                y2="84.0903"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopOpacity=".1" />
                <stop offset=".480779" stopOpacity=".4" />
                <stop offset=".481095" stopColor="#F41C52" />
                <stop offset="1" stopColor="#F41C52" />
              </linearGradient>
              <linearGradient
                id="d"
                x1="422.745"
                y1="-62.0004"
                x2="1771.45"
                y2="717.224"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopOpacity=".1" />
                <stop offset=".499484" stopOpacity=".4" />
                <stop offset=".499584" stopColor="#F41C52" />
                <stop offset="1" stopColor="#F41C52" />
              </linearGradient>
              <linearGradient
                id="e"
                x1="733.105"
                y1="-363.501"
                x2="2224.47"
                y2="500.961"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopOpacity=".1" />
                <stop offset=".480779" stopOpacity=".4" />
                <stop offset=".481095" stopColor="#F41C52" />
                <stop offset="1" stopColor="#F41C52" />
              </linearGradient>
              <linearGradient
                id="f"
                x1="422.745"
                y1="647.051"
                x2="1771.45"
                y2="-132.173"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopOpacity=".1" />
                <stop offset=".499484" stopOpacity=".4" />
                <stop offset=".499584" stopColor="#F41C52" />
                <stop offset="1" stopColor="#F41C52" />
              </linearGradient>
              <linearGradient
                id="g"
                x1="1452.82"
                y1="737"
                x2="1979.2"
                y2="243.852"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopOpacity=".1" />
                <stop offset=".101187" stopOpacity=".4" />
                <stop offset=".104169" stopColor="#F41C52" />
                <stop offset=".738113" stopColor="#F41C52" />
                <stop offset=".741695" stopOpacity=".1" />
                <stop offset="1" stopOpacity=".1" />
              </linearGradient>
            </defs>
          </svg>
          <div className={s['gradient']} />
        </div>

        <div className={s['hero']}>
          <div className={s['heading']}>
            <Heading className={s['title']} size="lg">
              <span className={s['heading-highlight']}>
                Record, Share, and Debug
              </span>{' '}
              your application with&nbsp;DevTools.
            </Heading>
            <div className={clsx(s['cta'], { [s['hidden']]: !isDesktop })}>
              <Button variant="primary">Download Replay</Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
