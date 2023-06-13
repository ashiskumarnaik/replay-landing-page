import Image from 'next/image'
import { forwardRef, useEffect } from 'react'

import gridPng from '~/public/images/homepage/grid.png'

import s from './grid-3d.module.scss'

const Grid = () => {
  return (
    <Image
      loading="eager"
      priority
      src={gridPng}
      className={s['grid']}
      quality={100}
      alt="grid"
    />
  )
}

export const Grid3D = forwardRef<HTMLDivElement, { onMount?: () => void }>(
  ({ onMount }, ref) => {
    useEffect(() => {
      onMount?.()
    }, [onMount])

    return (
      /* Gives perspective */
      <div className={s['container']}>
        {/* Gives rotation */}
        <div className={s['rotate']}>
          {/* Gives y displace control */}
          <div className={s['y-group-control']} ref={ref}>
            <Grid />
            <Grid />
          </div>
        </div>
      </div>
    )
  }
)
