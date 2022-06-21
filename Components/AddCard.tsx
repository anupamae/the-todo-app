import styles from './AddCard.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'

const AddCard = () => {
  return (
    <article className={styles.add_card}>
      <FontAwesomeIcon icon={faAdd} />
      <p className={styles.add_card__title}>Add List</p>
    </article>
  )
}

export default AddCard
