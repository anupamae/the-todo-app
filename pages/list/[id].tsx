import { NextPage } from 'next'

import { useRouter } from 'next/router'
import PageTemplate from '../../Components/PageTemplate'

import styles from '../../styles/Home.module.scss'

const TodoList: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <PageTemplate>
      <p>List: {id}</p>
    </PageTemplate>
  )
}

export default TodoList
