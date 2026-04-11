import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../services/api'

function Register() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    async function handleSubmit() {
        if (!username || !email || !password) {
            setError('All fields are required')
            return
        }
        try {
            await register({ username, email, password })
            navigate('/login')
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed')
        }
    }

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

export default Register