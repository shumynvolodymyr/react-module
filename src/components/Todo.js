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
            <div className={'item-icon'}>
                <div className="item-delete" onClick={() => removeTask(id)}>
                    &#10008;
                </div>
                <div className={'item-edit'}>
                    &#9998;
                </div>
            </div>
        </div>
    );
}
