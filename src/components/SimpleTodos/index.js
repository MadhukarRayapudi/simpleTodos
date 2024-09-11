import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
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
  state = {
    userInput: '',
    todosList: initialTodosList,
  }

  deleteTodo = id => {
    // console.log('delete btn clicked')
    // console.log(this.state)
    const {todosList} = this.state
    const filteredTodoList = todosList.filter(eachTodo => eachTodo.id !== id)

    this.setState({todosList: filteredTodoList})
  }

  editTodo = id => {
    const {todosList} = this.state

    const updatedTodoList = todosList.map(eachTodo => {
      if (eachTodo.id === id) {
        return {...eachTodo, editON: true}
      }
      return eachTodo
    })

    this.setState({todosList: updatedTodoList})
  }

  saveTodo = id => {
    const {todosList} = this.state

    const updatedTodoList = todosList.map(eachTodo => {
      if (eachTodo.id === id) {
        return {...eachTodo, editON: false}
      }
      return eachTodo
    })
    this.setState({todosList: updatedTodoList})
  }

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onEditTodo = (id, newTitle) => {
    const {todosList} = this.state

    const updatedTodoList = todosList.map(eachTodo => {
      if (eachTodo.id === id) {
        return {...eachTodo, title: newTitle}
      }
      return eachTodo
    })

    this.setState({todosList: updatedTodoList})
  }

  onClickAddBtn = () => {
    const {userInput, todosList} = this.state

    const inputParts = userInput.split(' ')
    const numberOfTodos = parseInt(inputParts.slice(inputParts.length - 1))
    // console.log(numberOfTodos)

    let title = userInput
    let todosToAdd = 1

    if (numberOfTodos > 0) {
      // Remove the number part from the title
      title = inputParts.slice(0, inputParts.length - 1).join(' ')
      console.log(title)
      todosToAdd = numberOfTodos
    }

    const newTodos = Array.from({length: todosToAdd}).map(() => ({
      title,
      id: uuidv4(),
      editON: false,
      todoDone: false,
    }))
    this.setState({todosList: [...todosList, ...newTodos], userInput: ''})
  }

  onClickCheckBox = id => {
    const {todosList} = this.state

    const updatedTodoList = todosList.map(eachItem => {
      if (eachItem.id === id) {
        return {...eachItem, todoDone: !eachItem.todoDone}
      }
      return eachItem
    })

    this.setState({todosList: updatedTodoList})
  }

  render() {
    const {todosList, userInput} = this.state
    return (
      <div className="app-bg-container">
        <div className="todos-bg-container">
          <h1 className="todos-heading"> Simple Todos </h1>
          <div className="input-and-add-btn-container">
            <input
              type="text"
              id="InputText"
              placeholder="Enter Here..."
              className="input-field"
              onChange={this.onChangeInput}
              value={userInput}
            />
            <button
              className="add-btn"
              type="button"
              onClick={this.onClickAddBtn}
            >
              Add
            </button>
          </div>

          <ul className="todos-ul-container">
            {todosList.map(eachTodo => (
              <TodoItem
                todoDetails={eachTodo}
                key={eachTodo.id}
                deleteTodo={this.deleteTodo}
                editTodo={this.editTodo}
                editON={eachTodo.editON}
                saveTodo={this.saveTodo}
                onEditTodo={this.onEditTodo}
                onClickCheckBox={this.onClickCheckBox}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
