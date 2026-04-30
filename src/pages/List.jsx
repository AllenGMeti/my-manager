// Importing TaskCard component to display individual tasks
import TaskCard from '../components/TaskCard'

// List component: shows all tasks or a fallback message if none exist
function List({ tasks, onDelete, onToggle }) {
    return (
        <div>
            {/* Heading for the task list */}
            <h2>All Tasks</h2>

            {/* Conditional rendering:
                - If no tasks, show message
                - Otherwise, map through tasks and render TaskCard for each */}
            {tasks.length === 0 ? (
                <p>No tasks yet. Add one!</p>
            ) : (
                tasks.map(task => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onToggle={onToggle}
                    />
                ))
            )}
        </div>
    )
}

// Exporting List so it can be used in routing or parent components
export default List
