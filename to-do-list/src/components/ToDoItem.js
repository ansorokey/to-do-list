function ToDoItem({id, title, completed, deleteToDo, toggleCheck}) {
    return (
        <li key={id}>
            <label>
                <input
                    type="checkbox"
                    className="item-check"
                    checked={completed}
                    onChange={e => toggleCheck(id, e.target.checked)}
                />
                {title}
            </label>
            <button
                className="item-delete"
                onClick={() => deleteToDo(id)}>
                Delete
            </button>
        </li>
    );
}

export default ToDoItem;
