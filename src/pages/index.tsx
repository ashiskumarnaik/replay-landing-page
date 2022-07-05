import { Meta } from '~/components/common/meta'
import { Footer } from '~/components/layout/footer'
import { Header } from '~/components/layout/header'
import { PageLayout } from '~/components/layout/page'
import { AsyncCollab } from '~/components/sections/home/async-collab'
import { FastAndSecure } from '~/components/sections/home/fast-and-secure'
import { Hero } from '~/components/sections/home/hero'
import { MainFeatures } from '~/components/sections/home/main-features'
import { PowerfulDevTools } from '~/components/sections/home/powerful-dev-tools'
import { SoftwareTellsStory } from '~/components/sections/home/software-tells-story'
import { Testimonials } from '~/components/sections/home/testimonials'
import { TrustedBy } from '~/components/sections/home/trusted-by'

const HomePage = () => {
  return (
    <PageLayout>
      <Meta />

      <Header />

      <Hero />
      <MainFeatures />
      <PowerfulDevTools />
      <Testimonials />
      <AsyncCollab />
      <TrustedBy />
      <FastAndSecure />
      <SoftwareTellsStory />

      <Footer />
    </PageLayout>
  )
}

export default HomePage
