import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useStore();
    const [username, setUsername] = useState('');

    const handleLogin = () => {
        if (!username) return alert('Enter a username');
        const user = { username, savedRecipes: [] };
        login(user);
        navigate('/');
    };

    return (
        <Box sx={{ maxWidth: 400, mx: 'auto' }}>
            <Typography variant="h5" mb={2}>Login</Typography>
            <TextField
                label="Username"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{ mb: 2 }}
            />
            <Button fullWidth variant="contained" onClick={handleLogin}>Login</Button>
        </Box>
    );
};

export default Login;
