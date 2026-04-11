import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function AddTask({ onAdd, tasks, onUpdate }) {
    const navigate = useNavigate()
    const { id } = useParams()

    const existing = id ? tasks.find(t => t.id === Number(id)) : null

    const [title, setTitle] = useState(existing ? existing.title : '')
    const [description, setDescription] = useState(existing ? existing.description : '')
    const [priority, setPriority] = useState(existing ? existing.priority : 'medium')
    const [due, setDue] = useState(existing ? existing.due : '')
    const [errors, setErrors] = useState({})

    function handleSubmit() {
        const newErrors = {}
        if (!title.trim()) newErrors.title = 'Title is required'
        if (!due) newErrors.due = 'Due date is required'

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        if (existing) {
            onUpdate(existing.id, { title, description, priority, due })
        } else {
            onAdd({ title, description, priority, due })
        }

        navigate('/list')
    }

    return (
        <div>
            <button onClick={() => navigate('/list')}>Back</button>
            <h2>{existing ? 'Edit Task' : 'Add New Task'}</h2>

            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                {errors.title && <p>{errors.title}</p>}
            </div>

            <div>
                <label>Description</label>
                <textarea
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </div>

            <div>
                <label>Priority</label>
                <select value={priority} onChange={e => setPriority(e.target.value)}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>

            <div>
                <label>Due Date</label>
                <input
                    type="date"
                    value={due}
                    onChange={e => setDue(e.target.value)}
                />
                {errors.due && <p>{errors.due}</p>}
            </div>

            <button onClick={handleSubmit}>
                {existing ? 'Save Changes' : 'Add Task'}
            </button>
        </div>
    )
}

export default AddTask