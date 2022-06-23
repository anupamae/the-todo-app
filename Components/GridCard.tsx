import styles from './GridCard.module.scss'

import Link from 'next/link'

import { truncateString } from '../State/Utils'
import { ITodoList } from '../State/State'

interface IGridCardProps {
  todoList: ITodoList
}

const GridCard = ({ todoList }: IGridCardProps) => {
  const totalCount = todoList.list.length
  const doneCount = todoList.list.filter(it => it.completed).reduce(sum => sum += 1, 0)
  return (
    <Link href="/list/[id]" as={`/list/${todoList.id}`}>
      <article className={styles.grid_card}>
        <h2 className={styles.grid_card__h2}>{truncateString(todoList.name, 15)} &rarr;</h2>
        {totalCount > 0 ? (<p className={styles.grid_card__p}>{`${doneCount} of ${totalCount}`}</p>) : ''}
      </article>
    </Link>
  )
}

export default GridCard
