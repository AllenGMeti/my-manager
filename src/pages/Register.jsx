// Importing React hooks, router utilities, and register API service
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../services/api'

// Register component: handles user sign-up and navigation
function Register() {
    const navigate = useNavigate() // Hook for navigation
    const [username, setUsername] = useState('') // State for username input
    const [email, setEmail] = useState('')       // State for email input
    const [password, setPassword] = useState('') // State for password input
    const [error, setError] = useState('')       // State for error messages

    // Handle form submission: validate inputs, call register API, navigate to login
    async function handleSubmit() {
        if (!username || !email || !password) {
            setError('All fields are required')
            return
        }
        try {
            await register({ username, email, password }) // Call backend API
            navigate('/login')                            // Redirect to login page
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed')
        }
    }

    // Render registration form UI with error handling and navigation to login page
    return (
        <div className="page">
            <h2>Register</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <label>Username</label>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Email</label>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button onClick={handleSubmit}>Register</button>
            <p style={{ marginTop: '12px' }}>
                Already have an account?{' '}
                <span style={{ cursor: 'pointer', color: '#888' }} onClick={() => navigate('/login')}>
                    Login
                </span>
            </p>
        </div>
    )
}

// Exporting Register so it can be used in routing
export default Register
