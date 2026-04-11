import TaskCard from '../components/TaskCard'

function List({ tasks, onDelete, onToggle }) {
    return (
        <div>
            <h2>All Tasks</h2>
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

export default List