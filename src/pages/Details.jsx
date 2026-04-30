// Importing router utilities for accessing URL parameters and navigation
import { useParams, useNavigate } from 'react-router-dom'

// Details component: displays full information for a single task
function Details({ tasks }) {
    const { id } = useParams()      // Get task ID from URL
    const navigate = useNavigate()  // Hook for navigation

    // Find the task by ID in the tasks array
    const task = tasks.find(t => t.id === Number(id))

    // If task is not found, show fallback message and back button
    if (!task) {
        return (
            <div>
                <p>Task not found.</p>
                <button onClick={() => navigate('/list')}>Go Back</button>
            </div>
        )
    }

    // If task exists, display its details and provide navigation options
    return (
        <div>
            <button onClick={() => navigate('/list')}>Back</button>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>Priority: {task.priority}</p>
            <p>Due: {task.due}</p>
            <p>Status: {task.done ? 'Complete' : 'Pending'}</p>
            <button onClick={() => navigate('/edit/' + task.id)}>Edit</button>
        </div>
    )
}

// Exporting Details so it can be used in routing
export default Details
