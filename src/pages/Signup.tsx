import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';

const Signup = () => {
    const navigate = useNavigate();
    const { login } = useStore();
    const [username, setUsername] = useState('');

    const handleSignup = () => {
        if (!username) return alert('Enter a username');
        const user = { username, savedRecipes: [] };
        login(user); // auto-login after signup
        navigate('/');
    };

    return (
        <Box sx={{ maxWidth: 400, mx: 'auto' }}>
            <Typography variant="h5" mb={2}>Signup</Typography>
            <TextField
                label="Username"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{ mb: 2 }}
            />
            <Button fullWidth variant="contained" onClick={handleSignup}>Signup</Button>
        </Box>
    );
};

export default Signup;
