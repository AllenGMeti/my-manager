// Importing React hooks and router utilities, plus login API service
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../services/api'

// Login component: handles user authentication and navigation
function Login({ setToken }) {
    const navigate = useNavigate() // Hook for navigation
    const [email, setEmail] = useState('')       // State for email input
    const [password, setPassword] = useState('') // State for password input
    const [error, setError] = useState('')       // State for error messages

    // Handle form submission: validate inputs, call login API, store token, navigate
    async function handleSubmit() {
        if (!email || !password) {
            setError('All fields are required')
            return
        }
        try {
            const res = await login({ email, password })
            localStorage.setItem('token', res.data.token)     // Save JWT token
            localStorage.setItem('username', res.data.username) // Save username
            setToken(res.data.token)                          // Update app state
            navigate('/home')                                 // Redirect to home
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed')
        }
    }

    // Render login form UI with error handling and navigation to register page
    return (
        <div className="page">
            <h2>My-Manager</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <label>Email</label>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button onClick={handleSubmit}>Login</button>
            <p style={{ marginTop: '12px' }}>
                No account?{' '}
                <span style={{ cursor: 'pointer', color: '#888' }} onClick={() => navigate('/register')}>
                    Register
                </span>
            </p>
        </div>
    )
}

// Exporting Login so it can be used in routing
export default Login
