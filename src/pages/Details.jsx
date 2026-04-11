import { useParams, useNavigate } from 'react-router-dom'

function Details({ tasks }) {
    const { id } = useParams()
    const navigate = useNavigate()

    const task = tasks.find(t => t.id === Number(id))

    if (!task) {
        return (
            <div>
                <p>Task not found.</p>
                <button onClick={() => navigate('/list')}>Go Back</button>
            </div>
        )
    }

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

export default Details