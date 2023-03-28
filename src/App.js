import React, { useState } from 'react';
import './App.css';
import AdminPage from "./AdminPage";
import UserPage from "./UserPage";

const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(username, password);
    };

    return (
        <div className="login-page">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

const App = () => {
    const [userRole, setUserRole] = useState(null);

    const handleLogin = (username, password) => {
        // Dummy authentication, replace this with your real authentication logic
        if (username === 'admin' && password === 'admin') {
            setUserRole('admin');
        } else {
            setUserRole('user');
        }
    };

    if (userRole === 'admin') {
        return <AdminPage />;
    } else if (userRole === 'user') {
        return <UserPage />;
    } else {
        return <LoginPage onLogin={handleLogin} />;
    }
};

export default App;