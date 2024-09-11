// Write your code here
import './index.css'

const TodoItem = props => {
  const {
    todoDetails,
    deleteTodo,
    editTodo,
    saveTodo,
    onEditTodo,
    onClickCheckBox,
  } = props
  const {title, id, editON, todoDone} = todoDetails

  const textClassName = todoDone ? 'strike-text todos' : 'todos'
  const onDelete = () => {
    deleteTodo(id)
  }

  const onEdit = () => {
    editTodo(id)
  }

  const onSave = () => {
    saveTodo(id)
  }

  const editTodoTitle = event => {
    onEditTodo(id, event.target.value)
  }

  const checkboxClicked = () => {
    onClickCheckBox(id)
  }

  return (
    <li className="todoItem-btn-container">
      <input type="checkbox" className="check-box" onClick={checkboxClicked} />
      {editON ? (
        <input
          type="input"
          onChange={editTodoTitle}
          value={title}
          className="edit-box"
        />
      ) : (
        <p className={textClassName}> {title} </p>
      )}
      <button className="delete-btn" onClick={onDelete} type="button">
        Delete
      </button>

      {editON ? (
        <button className="edit-btn" type="button" onClick={onSave}>
          Save
        </button>
      ) : (
        <button className="edit-btn" type="button" onClick={onEdit}>
          Edit
        </button>
      )}
    </li>
  )
}

export default TodoItem
