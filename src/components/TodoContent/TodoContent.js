import React from 'react'
import Todo from '../Todo/Todo'
import './TodoContent.css'

const TodoContent = props => {

  const renderTodo = todo => {
    return <Todo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              isDone={todo.done}
              onToggle={props.actions.onToggleTodo}
              onDelete={props.actions.onDeleteTodo}
            />
  }

  return (
    <main className="todo-content">
      <ul className="todos uncompleted-todos">
        {props.todos.map(todo => !todo.done ? renderTodo(todo) : null).reverse()}
      </ul>

      <hr/>

      <ul className="todos completed-todos">
        {props.todos.map(todo => todo.done ? renderTodo(todo) : null)}
      </ul>
    </main>
  )
}

export default TodoContent
