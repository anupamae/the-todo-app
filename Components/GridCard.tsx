import styles from './GridCard.module.scss'

import { truncateString } from '../State/Utils'
import { ITodoList } from '../State/State'

interface IGridCardProps {
  todoList: ITodoList
}

const GridCard = ({ todoList }: IGridCardProps) => {
  return (
    <a href={"/list/" + todoList.id} className={styles.card}>
      <h2>{truncateString(todoList.name, 15)} &rarr;</h2>
      <p>ToDo: {todoList.list.filter(it => !it.completed).reduce(sum => sum++, 0)}</p>
      <p>Done: {todoList.list.filter(it => it.completed).reduce(sum => sum++, 0)}</p>
    </a>
  )
}

export default GridCard
