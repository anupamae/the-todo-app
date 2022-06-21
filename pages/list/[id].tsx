import { NextPage } from 'next'
import { useRouter } from 'next/router'

import styles from '../../styles/TodoList.module.scss'

const TodoList: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <p>List: {id}</p>
  )
}

export default TodoList
