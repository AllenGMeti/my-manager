import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import List from './pages/List'
import Details from './pages/Details'
import AddTask from './pages/AddTask'
import Login from './pages/Login'
import Register from './pages/Register'
import { getTasks, addTask, updateTask, deleteTask } from './services/api'
import './App.css'

function App() {
    const [tasks, setTasks] = useState([])
    const [token, setToken] = useState(localStorage.getItem('token'))

    useEffect(() => {
        if (token) {
            getTasks()
                .then(res => setTasks(res.data))
                .catch(err => console.log(err))
        }
    }, [token])

    async function handleAddTask(taskData) {
        try {
            await addTask(taskData)
            const res = await getTasks()
            setTasks(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    async function handleDeleteTask(id) {
        try {
            await deleteTask(id)
            setTasks(tasks.filter(task => task.id !== id))
        } catch (err) {
            console.log(err)
        }
    }

    async function handleToggleTask(id) {
        const task = tasks.find(t => t.id === id)
        try {
            await updateTask(id, { ...task, done: !task.done })
            const res = await getTasks()
            setTasks(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    async function handleUpdateTask(id, taskData) {
        try {
            await updateTask(id, taskData)
            const res = await getTasks()
            setTasks(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    function handleLogout() {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        window.location.href = '/login'
    }

    return (
        <BrowserRouter>
            {token && <Navbar onLogout={handleLogout} />}
            <Routes>
                <Route path="/" element={<Navigate to={token ? '/home' : '/login'} />} />
                <Route path="/login" element={!token ? <Login setToken={setToken} /> : <Navigate to="/home" />} />
                <Route path="/register" element={!token ? <Register /> : <Navigate to="/home" />} />
                <Route path="/home" element={token ? <Home tasks={tasks} /> : <Navigate to="/login" />} />
                <Route path="/list" element={token ? <List tasks={tasks} onDelete={handleDeleteTask} onToggle={handleToggleTask} /> : <Navigate to="/login" />} />
                <Route path="/details/:id" element={token ? <Details tasks={tasks} /> : <Navigate to="/login" />} />
                <Route path="/add" element={token ? <AddTask onAdd={handleAddTask} /> : <Navigate to="/login" />} />
                <Route path="/edit/:id" element={token ? <AddTask tasks={tasks} onUpdate={handleUpdateTask} /> : <Navigate to="/login" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App