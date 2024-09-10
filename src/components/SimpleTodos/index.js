import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {todoDetailsList: initialTodosList}

  deleteTodo = id => {
    console.log('delete btn clicked')
    // console.log(this.state)
    const {todoDetailsList} = this.state
    const filteredTodoList = todoDetailsList.filter(
      eachTodo => eachTodo.id !== id,
    )

    this.setState({todoDetailsList: filteredTodoList})
  }

  render() {
    const {todoDetailsList} = this.state
    return (
      <div className="app-bg-container">
        <div className="todos-bg-container">
          <h1 className="todos-heading"> Simple Todos </h1>

          {todoDetailsList.map(eachTodo => (
            <TodoItem
              todoDetails={eachTodo}
              key={eachTodo.id}
              deleteTodo={this.deleteTodo}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default SimpleTodos
