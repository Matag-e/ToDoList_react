import React from 'react'

const todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
          <div className="content">
            <p>{todo.text}</p>
            <p className="category">
              ({todo.category})
            </p>
            <div>
              <button className='completar' onClick={() => completeTodo(todo.id)}>Completar</button>
              <button className='remover' onClick={() => removeTodo(todo.id)}>X</button>
            </div>
          </div>
          
        </div>
  )
}

export default todo