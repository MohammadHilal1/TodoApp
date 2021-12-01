import React from 'react'

import './todo.styles.scss'

const Todo = (props) => {
    const {text} = props.todo
    return(
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button className="complete-button" onClick={() => props.completeHandle(props.todo)}><i className="fa fa-check "></i></button>
            <button className="delete-button" onClick={() => props.deleteHandle(props.todo)}><i className="fa fa-trash "></i></button>
        </div>
    )
}
export default Todo