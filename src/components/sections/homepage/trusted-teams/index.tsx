import clsx from 'clsx'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'
import {
  CSSProperties,
  ReactNode,
  useCallback,
  useEffect,
  useState
} from 'react'
import Marquee from 'react-fast-marquee'

import * as Lantern from '~/components/common/lantern-effect'
import { ArizeIcon } from '~/components/icons/arize'
import { CodesandboxIcon } from '~/components/icons/codesandbox'
import { MidniteIcon } from '~/components/icons/midnite'
import { SubsetIcon } from '~/components/icons/subset'
import { VercelIcon } from '~/components/icons/vercel'
import { Section } from '~/components/layout/section'
import { Title } from '~/components/primitives/texts'
import { useTabletLgBreakpoint } from '~/hooks/use-media'

import s from './trusted-teams.module.scss'

export const TrustedTeams = () => {
  return (
    <Section id="homepage-trusted-teams" className={s.section}>
      <div className={s.container}>
        <Title as="h2">Trusted by top teams</Title>

        <HighlightedSection />

        <TeamSection />
      </div>
    </Section>
  )
}

const HighlightedSection = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [emblaRef, embla] = useEmblaCarousel({ align: 'center' })
  const isTablet = useTabletLgBreakpoint()

  const onSelect = useCallback(() => {
    if (!embla) return
    setCurrentSlide(embla.selectedScrollSnap())
  }, [embla, setCurrentSlide])

  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  )

  useEffect(() => {
    if (!embla) return
    onSelect()
    setScrollSnaps(embla.scrollSnapList())
    embla.on('select', onSelect)
  }, [embla, onSelect])

  useEffect(() => {
    if (isTablet) {
      embla?.reInit()
    } else if (!isTablet) {
      embla?.destroy()
    }
  }, [isTablet, embla])

  return (
    <div className={clsx(s.embla, s.highlighted)} ref={emblaRef}>
      <div className={s.emblaContainer}>
        {highlighted.map((item) => (
          <div className={s.emblaSlide} key={item.id}>
            <Link passHref href={item.href}>
              <HighlightCard {...item} />
            </Link>
          </div>
        ))}
      </div>

      {isTablet && (
        <div className={s.emblaDots}>
          {scrollSnaps.map((_, index) => (
            <button
              className={clsx({
                [s.active as string]: index === currentSlide
              })}
              type="button"
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

const HighlightCard = (props: HighlightedType) => {
  return (
    <Lantern.Root className={s['card']}>
      <Lantern.MaskBorder />
      <Lantern.ContentWrapper className={s['content']}>
        <div>
          <div className={s.titleWrapper}>{props.title}</div>
          <p className={s.description}>{props.description}</p>
        </div>

        <div className={s.imgWrapper}>
          <Image src={props.image.src} alt={props.image.alt} fill />
        </div>
      </Lantern.ContentWrapper>
    </Lantern.Root>
  )
}

const TeamSection = () => {
  const isTablet = useTabletLgBreakpoint()

  if (isTablet) {
    return (
      <Marquee className={s.marquee}>
        <div className={s.teams}>
          {teams.map((item) => (
            <div className={s.card} key={item.id}>
              <Link href={item.href} aria-label={item.label}>
                {item.logo}
              </Link>
            </div>
          ))}
        </div>
      </Marquee>
    )
  }

  return (
    <div
      className={s.teams}
      style={{ '--teams-quantity': teams.length } as CSSProperties}
    >
      {teams.map((item) => (
        <div className={s.card} key={item.id}>
          <Link href={item.href} aria-label={item.label}>
            {item.logo}
          </Link>
        </div>
      ))}
    </div>
  )
}

type HighlightedType = {
  id: number
  href: string
  title: ReactNode
  description: string
  image: {
    src: string
    alt: string
  }
}

const highlighted: HighlightedType[] = [
  {
    id: 0,
    href: '/',
    title: (
      <svg
        width="72"
        height="22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Glide</title>
        <path
          d="M72 12.9821c-.2226-.1536-.1793-.4121-.2407-.6253-.4224-1.5722-1.1937-2.94662-2.5174-3.93041-2.4453-1.80441-5.1541-2.07954-7.9218-.88851-2.7678 1.19103-4.1144 3.46832-4.3021 6.39702-.1468 2.263.4814 4.3259 2.1468 5.9552 2.5271 2.4666 7.0446 2.8156 9.9688.8075 1.2032-.8026 2.0612-2.0199 2.4067-3.4147h-3.6306a.36435.36435 0 0 0-.1765.0191.36183.36183 0 0 0-.146.1c-.8736 1.147-2.1336 1.203-3.4127 1.1553-1.42-.0524-2.9615-1.085-3.0939-2.7155h10.9146v-.3573a1.53337 1.53337 0 0 1 0-.9529v-.1191a1.53306 1.53306 0 0 1 0-.9528L72 12.9821Zm-10.9748-.0143c.1577-1.4054 1.6451-2.6679 3.4718-2.6703 1.805 0 3.3694 1.1791 3.515 2.6703h-6.9868Z"
          fill="#fff"
        />
        <path
          d="M71.9994 14.4079a.88021.88021 0 0 1-.1402-.4764c0-.1688.0486-.334.1402-.4764v.9528ZM71.9998 15.4772a.87817.87817 0 0 1-.1406-.4764c0-.1688.0488-.3341.1406-.4764v.9528ZM21.3607 7.66264h-4.4633c-.2335 0-.3466-.08694-.4609-.28108-1.3562-2.29631-3.4741-3.13599-6.0361-2.87397-2.71722.27751-4.65825 1.69723-5.56439 4.29606-1 2.86685-.17088 5.89915 2.01083 7.64525 2.54152 2.0355 6.91096 1.9521 9.19856-.1787.5525-.5109.955-1.1604 1.1649-1.8794H9.18138c-.14681-.2072.00842-.3323.06739-.455.34777-.7313.79783-1.4292 1.05413-2.1879.3358-.9957.9374-1.2101 1.9519-1.1839 3.0385.0786 6.0818.0357 9.1227.0191.3972 0 .5319.0738.5548.499.1781 3.3813-.8532 6.2815-3.4898 8.5111-1.9651 1.6675-4.3225 2.3523-6.8736 2.3821-2.61616.0262-5.06983-.5741-7.22868-2.1069C1.6928 17.9841.32698 15.3674.0502 12.1981c-.20938-2.39517.22503-4.69029 1.51384-6.76388C3.27403 2.68055 5.7951 1.07861 8.99366.5355 11.7301.07219 14.3811.36637 16.8288 1.72653c2.3454 1.30657 3.8171 3.3075 4.5319 5.93611ZM56.472 1.15059c.0505-.32754.0505-.49785-.3815-.48594-1.1396.03216-2.2804.0262-3.42 0-.361-.00834-.4657.1191-.5162.45616-.2118 1.44592-.4597 2.88588-.6956 4.32822-.1744 1.07193-.3525 2.14386-.5487 3.33489-.3567-.53163-.8403-.9681-1.4079-1.27083-2.1661-1.23034-5.8159-.65745-7.8785 1.20652-2.1288 1.92589-2.935 4.37819-2.8388 7.13669.0722 2.1105.8785 3.9173 2.7148 5.156 2.2094 1.4911 5.6294 1.3435 7.7895-1.1756.2599.5312.4958 1.0076.728 1.4852.0867.1787.1504.343.4176.3407 1.4922-.0119 2.9855 0 4.5271 0-.3081-1.1256-.5897-2.1939-.8941-3.2551a2.76735 2.76735 0 0 1-.0843-1.2161A8929.12146 8929.12146 0 0 0 56.472 1.15059ZM47.6019 18.0025c-2.4584.9362-4.5896-.4764-4.5728-3.0836.0205-2.3153 1.6306-4.1829 3.7365-4.3318 1.5199-.1083 2.7449.6611 3.2371 2.0903.5848 1.6806-.1276 4.4592-2.4008 5.3251ZM22.6737 21.6573c.4813-3.0323.9627-6.0254 1.444-9.0197.5921-3.70566 1.1821-7.41136 1.7702-11.11707.1336-.84444.1203-.84563.9555-.84563 1.0204 0 2.0457.00834 3.0601-.00596.337 0 .4248.04884.361.42997a3651.22189 3651.22189 0 0 0-3.166 19.82239c-.0891.5717-.2407.7837-.8628.7527-1.1685-.0584-2.3418-.0167-3.562-.0167ZM32.9036 21.6619c-.5596 0-1.1215-.0286-1.6847.0083-.432.0286-.4814-.1191-.4224-.5026.4332-2.6108.8424-5.2251 1.2635-7.8382.3009-1.8735.6126-3.74461.8905-5.62168.0554-.37875.1493-.5443.5777-.5312a60.80335 60.80335 0 0 0 3.361 0c.4139-.01191.4452.1191.3875.47046-.5055 3.08002-.994 6.16242-1.4874 9.24362-.2274 1.4292-.4705 2.8477-.6691 4.277-.0565.4037-.2058.5264-.6017.5026-.5343-.0333-1.0758-.0083-1.6149-.0083ZM38.5167 2.09704c.0109 1.80203-1.7557 3.18006-3.5174 2.74652-1.3779-.33944-2.0277-1.727-1.4152-3.09668C34.0835.63326 34.98.04608 36.2099.00201c.9627-.03335 1.6979.3466 2.1384 1.22677.1241.27234.1818.56977.1684.86826Z"
          fill="#fff"
        />
      </svg>
    ),
    description:
      "Glide's mission is to put the power, beauty, and magic of software development into the hands of a billion new creators.",
    image: {
      src: '/images/homepage/trusted-teams/glide.png',
      alt: 'Glide'
    }
  },
  {
    id: 1,
    href: '/',
    title: (
      <svg
        width="158"
        height="19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>TableCheck</title>
        <g clipPath="url(#a)" fill="#fff">
          <path d="M8.15385 2.92336 5.41538.1849c-.0923-.0923-.27692-.12308-.4-.0923C2.8 1.0772 1.01539 2.86182.03077 5.04643c-.06154.12308-.03077.30769.0923.4L2.86155 8.1849c.09231.09231.27692.06154.30769-.09231.4-2.49231 2.36923-4.4923 4.89231-4.8923.12308 0 .18461-.18462.09231-.27693ZM15.0766 8.21537l2.7384-2.73846c.0924-.09231.1232-.27693.0924-.4-.9846-2.21539-2.7692-4.00001-4.9539-4.98462-.123-.06154-.3076-.03077-.3999.09231L9.81513 2.92307c-.09234.0923-.06156.27692.09225.30769 2.49232.39999 4.49232 2.36922 4.89232 4.8923 0 .12308.1846.18462.2769.09231ZM17.8152 12.6161l-2.7385-2.76923c-.0923-.09234-.2769-.06156-.3077.09225-.4 2.49238-2.3692 4.49238-4.89227 4.89228-.1539.0308-.21537.2154-.09234.3077l2.73851 2.7385c.0923.0923.2769.1231.4.0923 2.2153-.9846 3.9692-2.7692 4.9538-4.9539.0923-.1538.0616-.3077-.0615-.3999ZM2.86159 9.84622.12313 12.6154c-.0923.0923-.12307.277-.0923.4.98461 2.2154 2.76923 3.9693 4.95384 4.9539.12308.0615.3077.0307.4-.0924l2.73847-2.7384c.0923-.0923.06153-.2769-.09232-.3077-2.4923-.4-4.4923-2.3693-4.89231-4.89233 0-.12303-.1846-.18459-.27692-.09225Z" />
        </g>
        <g clipPath="url(#b)" fill="#fff">
          <path d="M56.8566 5.16916c.8484-.15385 1.6969-.27693 2.5767-.36924 2.0424-.06154 3.7079.61539 4.8391 2.40001.4085.64614.6598 1.38461.6598 2.15386.0315 1.29231.0629 2.61541 0 3.90771-.1256 2.6153-2.0739 4.4307-4.839 4.6154-1.9168.0922-3.8651-.1539-5.6876-.8-.3142-.0924-.377-.3077-.377-.5847V1.04608c0-.7077.0314-.73846.7227-.73846h1.634c.377 0 .5027.15384.5027.52307V4.8307c-.0314.12307-.0314.21537-.0314.33846Zm0 6.30774v3.1692c0 .3384.0943.4923.4085.523.8484.0924 1.6654.1539 2.5138.1846 1.3512-.0922 2.0739-.7692 2.1997-2.0922.0942-1.3231.0942-2.6154 0-3.93849 0-.89231-.6285-1.63078-1.5084-1.84616-1.1312-.33846-2.3253-.21539-3.3622.33846-.1571.12308-.2514.27692-.2514.46154v3.20005ZM105.625 5.16866c1.068-.30769 2.168-.43077 3.268-.36923 2.702.15384 4.556 1.84615 4.713 4.49231.126 2.30766.063 4.61536.094 6.92306v.9538c0 .3077-.125.4616-.471.4616-.629-.0307-1.225-.0307-1.854 0-.44 0-.566-.1846-.566-.5538v-6.6155c0-.3691-.031-.7692-.094-1.13838-.188-1.16924-.817-1.78463-2.011-1.93847-.911-.12309-1.822-.03077-2.702.21538-.314.09231-.409.24616-.409.58462v8.76925c0 .6769-.031.7076-.722.7076h-1.352c-.817 0-.817 0-.817-.7692V.95328c0-.55385.063-.61539.629-.61539h1.665c.503 0 .597.0923.597.58462v3.78461c.032.15385.032.3077.032.46154ZM144.212 9.84609c1.288-1.38462 2.545-2.64616 3.708-3.96924.534-.61539.974-.76923 1.917-.8.439-.03077 1.099-.03077 1.633-.03077.535 0 .314.4.221.52308-1.384 1.44615-2.766 2.89231-4.148 4.30771-.157.15383-.315.33843-.503.52313l1.508 1.9384c1.194 1.5384 2.419 3.0461 3.614 4.5846.22.2769.377.6154-.314.6462h-2.2c-.314 0-.597-.1231-.785-.3693-1.132-1.4769-2.295-2.9538-3.457-4.4307-.094-.1231-.189-.2462-.315-.3693-.25.2462-.502.4923-.722.7385-.095.1231-.126.2769-.126.4307v3.4462c0 .5231-.062.5847-.596.6154h-1.666c-.566 0-.597-.0307-.597-.6154V.98454c0-.64615.031-.67692.691-.67692h1.572c.534 0 .596.0923.596.61538v8.36923c-.031.18459-.031.36927-.031.55386ZM88.0908 5.10693c.2199-2.27692 1.8854-4.18461 4.1478-4.73846 2.7024-.73846 5.2162-.30769 7.6043 1.13846.4401.27692.4711.36923.1571.83077-.3142.46154-.6284.89231-.9427 1.35385-.0942.21538-.3456.30769-.5655.21538-.0314-.03077-.0943-.03077-.1257-.06154-.9114-.58461-1.9483-.92307-3.048-1.01538-1.2256-.09231-2.3882.06153-3.3623.92308-.6599.58461-1.0056 1.44615-.9741 2.30769a180.84313 180.84313 0 0 0 0 5.84612c.0314 1.8769 1.3197 3.1385 3.268 3.2616 1.5711.123 3.1423-.2769 4.462-1.1077.4714-.3077.5028-.3077.817.1846.3142.4923.6603.9231.9743 1.3846.157.1538.157.4 0 .5539-.032.0307-.032.0307-.063.0615-2.3882 1.9384-7.0073 2.2769-9.6783.7385-1.8225-1.0462-2.6395-2.677-2.7651-4.7077-.0629-1.077 0-2.1846 0-3.26155.0313-.06156-.0315-2.64618.0942-3.90772ZM77.596 12.5237c-.1571 1.6616.5028 2.677 1.9168 2.8308.7227.0615 1.4454.0307 2.1682-.1232.6599-.1845 1.2883-.4615 1.8539-.8307.3457-.1846.5342-.1846.7541.1539.2829.4.5657.7692.8485 1.1385.1571.1538.1571.3691 0 .523-.0315.0308-.0629.0615-.0943.0615-2.2939 1.6616-4.8077 2.1231-7.4786 1.1693-1.6654-.5231-2.828-2.0308-2.8595-3.7539-.0943-1.5385-.0943-3.0462 0-4.58462.1885-2.24613 1.6654-3.75382 3.9279-4.15382 1.4139-.24615 2.7966-.21538 4.1163.4 1.7283.8 2.5453 2.15385 2.6396 3.96919.0628.89235 0 1.81535.0314 2.70775 0 .4307-.1572.5539-.5656.5539h-6.7559c-.1572-.0616-.3457-.0616-.5028-.0616Zm5.059-2.2154c.0629-1.10768 0-2.18461-1.0997-2.73845-.9742-.55385-2.1996-.49231-3.1109.15384-.8798.61539-.8484 1.59996-.8484 2.58461h5.059ZM119.2 12.5237c-.252 1.9076.848 3.0153 2.734 2.8922 1.13-.0308 2.231-.4 3.141-1.0154.346-.2153.567-.1846.786.1539.22.3384.566.7385.849 1.1077.157.2154.188.4-.063.5846-2.325 1.6924-4.87 2.1539-7.604 1.1385-1.634-.5539-2.734-2.0308-2.766-3.7231-.062-1.5077-.062-3.0462 0-4.55385.189-2.24616 1.634-3.75385 3.897-4.18462 1.382-.3077 2.828-.18462 4.117.36922 1.727.76923 2.545 2.15385 2.67 3.96921.063.89234.032 1.81544.032 2.70774 0 .4923-.064.5539-.598.5539H119.2Zm4.996-2.2155c.188-1.23073-.157-2.21535-.974-2.67688-.943-.58462-2.137-.55385-3.079.03077-1.006.61538-.975 1.63075-.975 2.64611h5.028ZM48.1529 10.1535c.0313-.70766.0314-1.35381-.2828-1.93842-.3143-.55385-.9428-.92308-1.6026-.89231-1.2255-.12308-2.451.09231-3.5508.64615-.377.18462-.597.15385-.817-.21538-.22-.36923-.5028-.76923-.7542-1.13846-.2199-.30769-.1885-.49231.1572-.67693 1.5083-.8923 3.1737-1.16922 4.9334-1.10769 1.1627-.03076 2.2624.33846 3.2051.98462.9741.73846 1.5712 1.87692 1.5712 3.07692.0942 1.6923.0627 3.3846.0627 5.077v2.6768c.0315.3077-.157.5847-.4399.6462-2.2624.5846-4.5249.9231-6.8501.4616-1.2569-.2462-2.3882-.7693-3.048-1.9693-1.2255-2.2462-.0629-4.7384 2.451-5.4153 1.3825-.3385 2.8595-.43086 4.2734-.2155.22-.0308.4714-.0308.6914 0Zm0 2.2769c-.3457-.0307-.6285-.0922-.9113-.123-1.0055-.0616-2.0425-.1846-3.048.123-.597.1539-1.0369.677-1.0369 1.2923-.0629.6154.3141 1.2001.9112 1.4155 1.3512.5538 2.7024.2769 4.0536.0307.0314-.9231.0314-1.8154.0314-2.7385ZM33.0383 2.98406h-4.8705c-.3142 0-.5028-.12308-.5028-.46154V.70714c0-.3077.1572-.43077.4714-.43077h12.5063c.6913 0 .7227.03077.7227.70769v1.38461c0 .55385-.0629.61539-.6285.61539h-4.7448V16.861c0 .7385 0 .7385-.7542.7385h-1.7596c-.3143 0-.4714-.1232-.44-.4309V2.98406ZM129.38 8.46187c.409-1.96922 1.791-3.10769 3.74-3.50768 1.885-.40001 3.833-.09232 5.498.86153.472.27692.472.36923.189.8-.189.30769-.409.58462-.597.89231-.408.64615-.408.61538-1.1.30769-.785-.36923-1.633-.55384-2.482-.52307-1.634.06153-2.451.8923-2.482 2.46152 0 1.07693-.032 2.18463 0 3.26163.031 1.4153.848 2.2153 2.262 2.3077 1.1.0922 2.168-.1847 3.08-.7693.376-.2462.627-.1847.848.1846.22.3692.565.8.848 1.2.189.2461.157.4307-.126.6154-2.23 1.4461-4.619 1.7231-7.101.7385-1.791-.7077-2.608-2.1539-2.734-4.0001-.031-.6769 0-1.3846 0-2.0615-.031-.9231.031-1.84611.157-2.76923ZM67.5405 7.29175V.86098c0-.4923.0629-.58461.5657-.58461h1.6967c.5028 0 .5971.0923.5971.58461v5.07693c0 2.49231 0 5.01539.0314 7.50769 0 .2154.0315.4615.0942.6769.1886.8308.5971 1.1693 1.477 1.2001.3142 0 .597 0 .9112-.0308.2828 0 .44.123.44.3999.0314.5847 0 1.1385-.0315 1.7232 0 .1538-.1885.3999-.3142.3999-.9741.0924-1.9796.1846-2.9538-.1846-1.5083-.5538-2.1681-1.7538-2.4195-3.2-.0628-.5846-.0943-1.1692-.0943-1.7538V7.29175Z" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h18v18H0z" />
          </clipPath>
          <clipPath id="b">
            <path fill="#fff" d="M27.5 0h125v18h-125z" />
          </clipPath>
        </defs>
      </svg>
    ),
    description:
      'Connect your POS, CRM, guest database, and other useful tools to enhance your staff productivity and efficiency.',
    image: {
      src: '/images/homepage/trusted-teams/tablecheck.png',
      alt: 'TableCheck'
    }
  },
  {
    id: 2,
    href: '/',
    title: (
      <svg
        width="140"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Pantheon</title>
        <path
          d="M22.7987 0h-4.3451l-6.3203 15.8667h4.4321l1.11-2.709h5.7554l1.0468 2.709h4.4557L22.7987 0Zm-3.9501 10.0618 1.7262-5.07735h.0435l1.7064 5.07735h-3.4761ZM6.34287 0H0v15.8667h4.30955v-5.4179h2.17827c3.61608 0 5.64548-1.54799 5.64548-5.26698C12.1372 1.56732 9.77091 0 6.34287 0ZM4.83844 7.35284h-.52889V3.4829l.52889.00003c1.61021 0 2.98143-.03096 2.98143 1.9543.00391 1.91561-1.477 1.91561-2.97751 1.91561h-.00392ZM88.3436 9.6748l4.3436.00774V6.19187h-4.3436V3.48293h5.9231V0H84v15.8667h10.2667v-3.87h-5.9231V9.6748ZM50.4 4.25691h3.914l.0235 11.60979h4.2819V4.25691h3.9139V0H50.4v4.25691Zm25.427 1.93496h-6.054V0h-4.4397v15.8667h4.4397V9.6748h6.054v6.1919h4.4397V0H75.827v6.19187Zm28.24-1.93496c2.03 0 3.676 1.64599 3.676 3.67642s-1.646 3.67647-3.676 3.67647c-2.031 0-3.677-1.64604-3.677-3.67647.002-2.02955 1.647-3.67429 3.677-3.67642Zm0-4.25691c-4.3818 0-7.9337 3.55187-7.9337 7.93333 0 4.38147 3.5519 7.93337 7.9337 7.93337 4.381 0 7.933-3.5519 7.933-7.93337C112 3.55187 108.448 0 104.067 0Zm22.376 8.88533L119.696 0h-3.963v15.8667h4.228l-.016-8.90085 6.448 8.90085h4.274V0h-4.212l-.012 8.88533Zm-83.9998 0L35.6964 0h-3.9631v15.8667h4.2273l-.0153-8.90085 6.4481 8.90085h4.2733V0h-4.212l-.0115 8.88533Zm91.0238-5.61048c-.004-.43753.084-.871.257-1.2726.336-.78284.959-1.40678 1.74-1.74316.811-.34545 1.727-.34545 2.537 0a3.3191 3.3191 0 0 1 1.74 1.74316 3.24879 3.24879 0 0 1 0 2.5411c-.333.77449-.948 1.39318-1.719 1.7309-.811.34544-1.727.34544-2.537 0a3.3191 3.3191 0 0 1-1.74-1.74317c-.179-.39504-.273-.82276-.278-1.25623Zm.58 0c-.002.36006.071.7166.212 1.04754.272.64609.785 1.16012 1.43 1.43218a2.69716 2.69716 0 0 0 2.092 0c.645-.27169 1.158-.78584 1.429-1.43218a2.7088 2.7088 0 0 0 0-2.09508c-.271-.64634-.784-1.16048-1.429-1.43218a2.69307 2.69307 0 0 0-2.092 0c-.645.27206-1.158.78609-1.43 1.43218-.141.33094-.214.68748-.212 1.04754Zm1.43-1.89048h1.442c.356-.02967.711.0738.996.29053.22.21367.338.51181.323.81839.021.27125-.071.53909-.253.74064a1.05455 1.05455 0 0 1-.633.29053l.968 1.58358h-.707l-.931-1.53039h-.503v1.53039h-.686V1.36391l-.016.02046Zm.686 1.63678h.817c.098-.00683.194-.02892.286-.06547a.48052.48052 0 0 0 .208-.15959.5706.5706 0 0 0 0-.58105.4779.4779 0 0 0-.208-.15959.86867.86867 0 0 0-.286-.06138h-.817v1.02708Z"
          fill="#fff"
        />
      </svg>
    ),
    description:
      "Pantheon's WebOps Platform improves productivity to drive down the cost of making changes to your Drupal and WordPress websites.",
    image: {
      src: '/images/homepage/trusted-teams/pantheon.png',
      alt: 'Pantheon'
    }
  }
]

type TeamType = {
  id: number
  logo: ReactNode
  href: string
  label: string
}[]

const teams: TeamType = [
  {
    id: 0,
    logo: <MidniteIcon />,
    href: '/',
    label: 'Midnite'
  },
  {
    id: 1,
    logo: <SubsetIcon />,
    href: '/',
    label: 'Subset'
  },
  {
    id: 2,
    logo: <CodesandboxIcon />,
    href: '/',
    label: 'CodeSandobx'
  },
  {
    id: 3,
    logo: <VercelIcon />,
    href: '/',
    label: 'Vercel'
  },
  {
    id: 4,
    logo: <ArizeIcon />,
    href: '/',
    label: 'Arize'
  }
]
