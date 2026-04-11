import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Task Manager</h1>
            <p>Manage your tasks easily. Add, edit, complete and delete tasks.</p>
            <button onClick={() => navigate('/list')}>View Tasks</button>
            <button onClick={() => navigate('/add')}>Add Task</button>
        </div>
    )
}

export default Home