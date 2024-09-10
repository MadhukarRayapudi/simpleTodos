// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {title, id} = todoDetails
  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todoItem-btn-container">
      <p className="todos"> {title} </p>
      <button className="delete-btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
