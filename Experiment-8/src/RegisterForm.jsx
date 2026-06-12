//RegisterForm.jsx


import React, { useState } from 'react'

function RegisterForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState(false)
    const [users, setUsers] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (name && email && password) {
            const newUser = { name, email }
            setUsers([...users, newUser])
            setSuccess(true)

            // reset fields
            setName('')
            setEmail('')
            setPassword('')
        } else {
            setSuccess(false)
            alert('Please fill all fields!')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>

            {success && (
                <p style={{ color: 'green', marginTop: '10px' }}>
                    Registration Successful!
                </p>
            )}

            {users.length > 0 && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Registered Users</h3>
                    <ul>
                        {users.map((user, index) => (
                            <li key={index}>
                                {user.name} - {user.email}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default RegisterForm