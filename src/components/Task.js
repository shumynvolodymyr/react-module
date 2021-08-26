import './Task.css'

export default function Task({task:{id, title, done}, deleteTask, doneTask}) {

    const ActionBtn = () =>
        <div className={'action-btn'}>
            {!done
                ? <p onClick={()=>doneTask(id)}>✅</p>
                : <p onClick={()=>deleteTask(id)}>❌</p>}
        </div>

    const className = 'task' + (done ? ' task-done' : '');

    return (
        <div className={className}>
            <p>{title}</p>
            <ActionBtn/>
        </div>
    );
}
