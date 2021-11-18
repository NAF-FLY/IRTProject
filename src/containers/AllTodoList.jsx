import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { getTodos } from 'redux/reducers'
import { TodoList } from 'components'

const AllTodoListContainer = ({ todos, getTodos }) => {
  const [currentTodos, setCurrentTodos] = useState([])

  const list = { title: 'All tasks' }

  const emptyText = 'Create a task in any list and then it will appear here'

  useEffect(() => {
    getTodos()
  }, [getTodos])

  useEffect(() => {
    setCurrentTodos(todos)
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

export default connect(mapStateToProps, { getTodos })(AllTodoListContainer)