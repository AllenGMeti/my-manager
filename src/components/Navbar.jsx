import { NavLink } from 'react-router-dom'

function Navbar({ onLogout }) {
    const username = localStorage.getItem('username')

    return (
        <nav>
            <span>Task Manager</span>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/list">Tasks</NavLink>
            <NavLink to="/add">Add Task</NavLink>
            <span style={{ marginLeft: 'auto', color: '#888', fontSize: '14px' }}>
                {username}
            </span>
            <button onClick={onLogout} style={{ marginLeft: '12px' }}>
                Logout
            </button>
        </nav>
    )
}

export default Navbar