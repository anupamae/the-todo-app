import styles from './GridCard.module.scss'

import { truncateString } from '../State/Utils'

interface GridCardProps {
  id: string,
  title: string
}

const GridCard = (props: GridCardProps) => {
  return (
    <a href={"/list/" + props.id} className={styles.card}>
      <h2>{truncateString(props.title, 10)} &rarr;</h2>
    </a>
  )
}

export default GridCard
