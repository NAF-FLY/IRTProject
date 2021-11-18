import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { getTodos } from 'redux/reducers'
import { TodoList } from 'components'

const ImportantTodoListContainer = ({ todos, getTodos }) => {
  const [currentTodos, setCurrentTodos] = useState([])

  const list = { title: 'Important tasks' }

  const emptyText = 'Mark the task as important and then it will appear here'

  const currentTodosCreator = todos =>
    todos.filter(item => item.important === true)

  useEffect(() => {
    getTodos()
  }, [getTodos])

  useEffect(() => {
    setCurrentTodos(currentTodosCreator(todos))
  }, [todos])

  return (
    <TodoList
      canCreate={false}
      todos={currentTodos}
      list={list}
      emptyText={emptyText}
    />
  )
}

const mapStateToProps = state => ({
  todos: state.todos.todos
})

export default connect(mapStateToProps, { getTodos })(
  ImportantTodoListContainer
)
