import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';

const Navbar = () => {
    const navigate = useNavigate();
    const { user, logout } = useStore();

    return (
        <AppBar position="static">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h6" onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
                    Flavor Exchange
                </Typography>
                <Box>
                    {user ? (
                        <>
                            <Button color="inherit" onClick={() => navigate('/dashboard')}>Dashboard</Button>
                            <Button color="inherit" onClick={logout}>Logout</Button>
                        </>
                    ) : (
                        <>
                            <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
                            <Button color="inherit" onClick={() => navigate('/signup')}>Signup</Button>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
