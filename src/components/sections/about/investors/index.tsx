import clsx from 'clsx'
import Image from 'next/future/image'
import { FC } from 'react'

import { Carousel } from '~/components/common/carousel'
import { Heading } from '~/components/common/heading'
import { Section } from '~/components/common/section'
import { Container } from '~/components/layout/container'
import { useMedia } from '~/hooks/use-media'

import styles from '../team/team.module.scss'
import { UserCard } from '../team/user-card'
import { institutions, investors } from './investors'
import s from './investors.module.scss'

export const Investors: FC = () => {
  const isMobile = useMedia('(max-width: 768px)')
  const isDesktop = useMedia('(min-width: 1361px)')

  return (
    <Section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.heading}>
          <Heading as="h2" size="lg">
            Our investors
          </Heading>
          <p>
            We are grateful for the support and guidance we are receiving from
            our institutional investors and angels. Their experience of leading
            and advising companies such as GitHub, Figma, DataDog, Replit, and
            Sourcegraph is helping us become even better.
          </p>
        </div>
      </Container>

      <Container size="md">
        <div className={s['institutions']}>
          {institutions.map(({ image, name }) => (
            <Image src={image} alt={`${name} logo`} title={name} key={name} />
          ))}
        </div>
      </Container>

      <div className={styles['fade-container']}>
        <Container
          size="md"
          className={clsx(styles['slider-container'], s['individuals'])}
        >
          <div className={styles['team']}>
            <Carousel
              dots={isMobile}
              arrows={!isMobile}
              className={styles.slider}
              config={{
                containScroll: isDesktop ? 'trimSnaps' : '',
                skipSnaps: true
              }}
              slideClassName={styles['slide']}
              viewportClassname={styles['slider__viewport']}
              containerClassname={styles['slider-container']}
            >
              {investors.map((member, i) => (
                <UserCard key={i} member={member} />
              ))}
            </Carousel>
          </div>
        </Container>
      </div>
    </Section>
  )
}
