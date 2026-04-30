// Importing useNavigate from react-router-dom for programmatic navigation
import { useNavigate } from 'react-router-dom'

// TaskCard component: displays a single task with details and action buttons
function TaskCard({ task, onDelete, onToggle }) {
    const navigate = useNavigate() // Hook for navigation between routes

    return (
        <div>
            {/* Task details */}
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Priority: {task.priority}</p>
            <p>Due: {task.due}</p>
            <p>Status: {task.done ? 'Complete' : 'Pending'}</p>

            {/* Action buttons for task management */}
            <button onClick={() => onToggle(task.id)}>
                {task.done ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => navigate('/details/' + task.id)}>View</button>
            <button onClick={() => navigate('/edit/' + task.id)}>Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    )
}

// Exporting TaskCard so it can be used in list rendering
export default TaskCard
