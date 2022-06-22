import styles from './GridCard.module.scss'

import { truncateString } from '../State/Utils'
import { ITodoList } from '../State/State'

interface IGridCardProps {
  todoList: ITodoList
}

const GridCard = ({ todoList }: IGridCardProps) => {
  return (
    <a href={"/list/" + todoList.id} className={styles.grid_card}>
      <article>
        <h2 className={styles.grid_card__h2}>{truncateString(todoList.name, 15)} &rarr;</h2>
        <p className={styles.grid_card__p}>ToDo: {todoList.list.filter(it => !it.completed).reduce(sum => sum++, 0)}</p>
        <p className={styles.grid_card__p}>Done: {todoList.list.filter(it => it.completed).reduce(sum => sum++, 0)}</p>
      </article>
    </a>
  )
}

export default GridCard
