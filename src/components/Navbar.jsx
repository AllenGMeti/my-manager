// Importing NavLink from react-router-dom for navigation links
import { NavLink } from 'react-router-dom'

// Navbar component: displays app name, navigation links, username, and logout button
function Navbar({ onLogout }) {
    // Retrieve the logged-in username from localStorage
    const username = localStorage.getItem('username')

    return (
        <nav>
            {/* App name on the left */}
            <span>Task Manager</span>

            {/* Navigation links to different pages */}
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/list">Tasks</NavLink>
            <NavLink to="/add">Add Task</NavLink>

            {/* Display logged-in username on the right */}
            <span style={{ marginLeft: 'auto', color: '#888', fontSize: '14px' }}>
                {username}
            </span>

            {/* Logout button that triggers onLogout function */}
            <button onClick={onLogout} style={{ marginLeft: '12px' }}>
                Logout
            </button>
        </nav>
    )
}

// Exporting Navbar so it can be used in other components
export default Navbar
