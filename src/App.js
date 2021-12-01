
import React from 'react';
import './App.css';
import Header from './Components/header/header.component';
import Form from './Components/form/form.component';
import Todos from './Components/todos/todos.component';
import uuid from 'react-uuid'

class App extends React.Component{

constructor(props){
  super(props)
  this.state = {
    todos: [],
    status: "all",
    filteredTodos: []
  }
}
//functions
inputHandler = (formInputText) => {
  const {todos} = this.state
  this.setState({
    todos: [...todos, {text: formInputText, completed: false, id: uuid()}]
  })
}

deleteHandler = (item) => {
  const {todos} = this.state 
  const newTodos = todos.filter((todo) => 
      item.id !== todo.id
  )
  
  this.setState({
      todos: newTodos 
  })
}
completeHandler = (item) => {
  const {todos} = this.state
    this.setState({
      todos: todos.map((todo) => {
          if(todo.id === item.id){
            return{
              ...todo, completed: !todo.completed
            } 
          }
          return todo
        }
      )})  
    }

  statusHandler = (passedStatus) => {
    this.setState({
    status: passedStatus
    })
  }
  
  filteredTodos = () => {
      const {status, todos} = this.state
      switch(status){
        case "completed":
          this.setState({
            filteredTodos: todos.filter(todo => todo.completed === true)
          })
          break
        case "uncompleted":
          this.setState({
            filteredTodos: todos.filter(todo => todo.completed === false)
          })
          break
        default:
          this.setState({
            filteredTodos: todos
          })
 
      }
  }

  componentDidMount(){
    this.getTodosFromLocalStorage()
  }

  componentDidUpdate(previousProps, PreviouState){
    
    if( PreviouState.todos !== this.state.todos || PreviouState.status !== this.state.status){
      this.filteredTodos()
      this.setTodosToLocalStorage()
    }
  }

  //Handling local storage

  setTodosToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(this.state.todos))
  }

  getTodosFromLocalStorage = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]))
    }
    else{
      let localTodo = JSON.parse(localStorage.getItem("todos"))
      this.setState({
        todos: localTodo
      })
    }
  }


  render() {

    return(
      <div className="root-container">
      <Header/>
      <Form inputHandle = {this.inputHandler} statusHandle = {this.statusHandler}/>
      <Todos filteredtodos={this.state.filteredTodos} 
      completeHandle = {this.completeHandler}
      deleteHandle = {this.deleteHandler}/>
      </div>
    )
  }
}

export default App;
