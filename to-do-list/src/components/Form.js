function Form({newItem, setNewItem, addToDo}) {

    function handleSubmit(e) {
        e.preventDefault();
        addToDo(newItem);
        setNewItem('');
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input
                    type="text"
                    id="item"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <button className="btn">Add</button>
            </div>
        </form>
    );
}

export default Form;
