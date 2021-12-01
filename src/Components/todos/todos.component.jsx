import React from 'react'

import './todos.styles.scss'

import Todo from '../todo/todo.component'


const Todos = (props) => {
    const {filteredtodos} = props
    
    return(
        <div className="todos">
            <h1 className="heading">Todo List</h1>
                <ul className="todo-list">
                {
                    filteredtodos.map(todo => (
                        <Todo todo={todo} 
                        key={todo.id} 
                        completeHandle = {props.completeHandle}
                        deleteHandle = {props.deleteHandle}/>
                    ))
                }
                </ul>
        </div>
    )}


export default Todos