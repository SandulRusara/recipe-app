import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

const AddRecipe = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (!title || !description || !image) return alert("Fill all fields");

        await API.post('/recipes', { title, description, image });
        navigate('/');
    };

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto' }}>
            <Typography variant="h5" mb={2}>Add New Recipe</Typography>
            <TextField
                label="Title"
                fullWidth
                sx={{ mb: 2 }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
                label="Description"
                fullWidth
                sx={{ mb: 2 }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
                label="Image URL"
                fullWidth
                sx={{ mb: 2 }}
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </Box>
    );
};

export default AddRecipe;
