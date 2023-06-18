import ToDoItem from "./ToDoItem";

function List({toDos, setToDos}) {

    function toggleCheck(id, completed) {
        setToDos((state) => {
            return state.map( item => {
                if(item.id === id) return {...item, completed};
                return item;
            });
        });
    }

    function deleteToDo(id) {
        setToDos((state) => state.filter( item => item.id !== id ));
    }

    const toDoItems = toDos.map(( item ) => {
        return (
            <ToDoItem
                {...item}
                deleteToDo={deleteToDo}
                toggleCheck={toggleCheck}
            />
        );
    });

    return (
        <ul className="item-list">
            { toDos.length === 0 && "Empty..." }
            {toDoItems}
        </ul>
    );
}

export default List;
