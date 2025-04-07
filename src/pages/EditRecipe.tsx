import { Box, Button, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API from '../services/api';

const EditRecipe = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        API.get(`/recipes/${id}`).then((res) => {
            const r = res.data;
            setTitle(r.title);
            setDescription(r.description);
            setImage(r.image);
        });
    }, [id]);

    const handleUpdate = async () => {
        await API.put(`/recipes/${id}`, { title, description, image });
        navigate(`/recipe/${id}`);
    };

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto' }}>
            <Typography variant="h5" mb={2}>Edit Recipe</Typography>
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
            <Button variant="contained" onClick={handleUpdate}>Update</Button>
        </Box>
    );
};

export default EditRecipe;
