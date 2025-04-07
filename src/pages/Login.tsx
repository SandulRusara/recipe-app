// import { Box, Button, TextField, Typography } from '@mui/material';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useStore } from '../store/useStore';
//
// const Login = () => {
//     const navigate = useNavigate();
//     const { login } = useStore();
//     const [username, setUsername] = useState('');
//
//     const handleLogin = () => {
//         if (!username) return alert('Enter a username');
//         const user = { username, savedRecipes: [] };
//         login(user);
//         navigate('/');
//     };
//
//     return (
//         <Box sx={{ maxWidth: 400, mx: 'auto' }}>
//             <Typography variant="h5" mb={2}>Login</Typography>
//             <TextField
//                 label="Username"
//                 fullWidth
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 sx={{ mb: 2 }}
//             />
//             <Button fullWidth variant="contained" onClick={handleLogin}>Login</Button>
//         </Box>
//     );
// };
//
// export default Login;



import { Box, Button, TextField, Typography, Paper, Grid, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { styled } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// You'll need to provide the actual path to your background image
const backgroundImage = '/images/food-background.jpg'; // Replace with your image path

const theme = createTheme({
    palette: {
        primary: {
            main: '#8BC34A', // A light green similar to the button
        },
        secondary: {
            main: '#f44336', // Example red for "Sign up"
        },
        background: {
            default: '#f9fbe7', // A very light yellow/greenish background
        },
        text: {
            secondary: '#757575', // Gray for "Ai uitat parola?" and "Nu ai un cont?"
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h5: {
            fontWeight: 700,
            marginBottom: 2,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '5px',
                    textTransform: 'none',
                    fontWeight: 600,
                },
                containedPrimary: {
                    color: '#fff',
                },
                outlined: {
                    borderColor: '#e0e0e0',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '5px',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: '10px',
                    padding: '32px',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
                },
            },
        },
    },
});

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'left center', // Adjust as needed
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'flex-end', // Push form to the right
    alignItems: 'center',
    paddingRight: '64px', // Add some right padding
    backgroundColor: theme.palette.background.default, // Fallback color if image fails
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
    maxWidth: '360px',
    width: '100%',
}));

const Login = () => {
    const navigate = useNavigate();
    const { login } = useStore();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!email || !password) {
            alert('Please enter your email and password.');
            return;
        }
        const user = { email, savedRecipes: [] }; // Adjust user object as needed
        login(user);
        navigate('/');
    };

    return (
        <ThemeProvider theme={theme}>
            <StyledBox>
                <StyledPaper>
                    <Typography variant="h5" gutterBottom>
                        Bine ai revenit!
                    </Typography>
                    <TextField
                        label="E-mail"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        margin="normal"
                        variant="outlined"
                        size="small"
                    />
                    <TextField
                        label="Parola"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        margin="normal"
                        variant="outlined"
                        size="small"
                        type="password" // Adjust if you want password visibility toggle
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                        <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer' }}>
                            Ai uitat parola?
                        </Typography>
                    </Box>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleLogin}
                        sx={{ mt: 2, py: 1.5 }}
                    >
                        Login
                    </Button>
                    <Box sx={{ display: 'flex', alignItems: 'center', my: 2, justifyContent: 'center' }}>
                        <hr style={{ flexGrow: 1, border: 'none', borderTop: '1px solid #e0e0e0' }} />
                        <Typography variant="body2" color="text.secondary" sx={{ mx: 1 }}>
                            Sau
                        </Typography>
                        <hr style={{ flexGrow: 1, border: 'none', borderTop: '1px solid #e0e0e0' }} />
                    </Box>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={6}>
                            <Button
                                fullWidth
                                variant="outlined"
                                startIcon={<GoogleIcon />}
                                sx={{ color: '#4285F4' }}
                            >
                                Google
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                fullWidth
                                variant="outlined"
                                startIcon={<FacebookIcon />}
                                sx={{ color: '#1877F2' }}
                            >
                                Facebook
                            </Button>
                        </Grid>
                    </Grid>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 3, textAlign: 'center' }}>
                        Nu ai un cont existent? <Typography color="primary" component="span" sx={{ fontWeight: 600, cursor: 'pointer' }}>Înscrie-te</Typography>
                    </Typography>
                </StyledPaper>
            </StyledBox>
        </ThemeProvider>
    );
};

export default Login;