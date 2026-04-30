// Importing useNavigate from react-router-dom for programmatic navigation
import { useNavigate } from 'react-router-dom'

// Home component: serves as the landing page with quick navigation options
function Home() {
    const navigate = useNavigate() // Hook for navigation between routes

    return (
        <div>
            {/* App title and description */}
            <h1>Task Manager</h1>
            <p>Manage your tasks easily. Add, edit, complete and delete tasks.</p>

            {/* Navigation buttons to task list and add task form */}
            <button onClick={() => navigate('/list')}>View Tasks</button>
            <button onClick={() => navigate('/add')}>Add Task</button>
        </div>
    )
}

// Exporting Home so it can be used in routing
export default Home
