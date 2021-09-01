export default function Todo({todo, removeTask, toggleTask}) {
    const {id, title, description, complete} = todo;
    return (
        <div className={'item-todo'}>
            <div
                className={complete ? "item-text strike" : 'item-text'}
                onClick={() => toggleTask(id)}
            >
                <p>Title: {title} .</p>
                <p><i>Description: {description}.</i></p>
            </div>
            <div className="item-delete" onClick={() => removeTask(id)}>
                X
            </div>
        </div>
    );
}
