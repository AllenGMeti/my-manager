import { useNavigate } from 'react-router-dom'

function TaskCard({ task, onDelete, onToggle }) {
    const navigate = useNavigate()

    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Priority: {task.priority}</p>
            <p>Due: {task.due}</p>
            <p>Status: {task.done ? 'Complete' : 'Pending'}</p>
            <button onClick={() => onToggle(task.id)}>
                {task.done ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => navigate('/details/' + task.id)}>View</button>
            <button onClick={() => navigate('/edit/' + task.id)}>Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    )
}

export default TaskCard