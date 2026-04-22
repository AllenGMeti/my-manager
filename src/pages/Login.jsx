import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../services/api'

function Login({ setToken }) {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    async function handleSubmit() {
        if (!email || !password) {
            setError('All fields are required')
            return
        }
        try {
            const res = await login({ email, password })
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('username', res.data.username)
            setToken(res.data.token)
            navigate('/home')
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed')
        }
    }

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

export default Login