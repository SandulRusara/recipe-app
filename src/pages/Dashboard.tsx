import { useStore } from '../store/useStore';
import { Typography, Box, Button, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from "react";

const Dashboard = () => {
    const { user } = useStore();
    const navigate = useNavigate();

    if (!user) return <Typography>Please log in</Typography>;

    return (
        <Box>
            <Typography variant="h4" gutterBottom>Welcome, {user.username}</Typography>

            <Button variant="contained" onClick={() => navigate('/add')} sx={{ mb: 2 }}>
                Add New Recipe
            </Button>

            <Typography variant="h6" mt={2}>Favorite Recipes</Typography>
            <List>
                {user.savedRecipes.map((id) => (
                    <ListItemText primary={`Recipe ID: ${id}`} />
                ))}
            </List>
        </Box>
    );
};

export default Dashboard;
