import styles from './AddCard.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'

interface IAddCardProps {
  onClick: () => void
}

const AddCard = (props: IAddCardProps) => {
  return (
    <article className={styles.add_card} onClick={props.onClick}>
      <FontAwesomeIcon icon={faAdd} />
      <p className={styles.add_card__title}>Add List</p>
    </article>
  )
}

export default AddCard
