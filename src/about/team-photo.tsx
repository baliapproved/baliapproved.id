import { cn } from 'cn'
import { useIntlayer } from 'react-intlayer'

import teamPhoto from './assets/team.webp'
import styles from './team-photo.module.css'

export function TeamPhoto({ className }: { className?: string }) {
  const content = useIntlayer('about')

  return (
    <figure className={cn(styles.frame, className)}>
      <img
        src={teamPhoto}
        alt={content.teamPhotoAlt.value}
        width={1080}
        height={1080}
        loading="lazy"
        decoding="async"
        className="aspect-4/3 w-full rounded-xs bg-muted object-cover object-[center_72%] sm:aspect-16/7"
      />
      <figcaption className={styles.caption}>{content.teamPhotoCaption}</figcaption>
    </figure>
  )
}
