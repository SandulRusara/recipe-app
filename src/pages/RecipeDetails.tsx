import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import API from '../services/api';
import { useStore } from '../store/useStore';

interface Recipe {
    id: number;
    title: string;
    description: string;
    image: string;
}

const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const navigate = useNavigate();
    const { user } = useStore();

    useEffect(() => {
        API.get(`/recipes/${id}`).then((res) => setRecipe(res.data));
    }, [id]);

    if (!recipe) return <Typography>Loading...</Typography>;

    return (
        <Box>
            <img src={recipe.image} alt={recipe.title} style={{ width: '100%', borderRadius: 8 }} />
            <Typography variant="h4" mt={2}>{recipe.title}</Typography>
            <Typography mt={1}>{recipe.description}</Typography>

            {user && (
                <Box mt={2}>
                    <Button variant="contained" onClick={() => navigate(`/edit/${recipe.id}`)}>Edit</Button>
                </Box>
            )}
        </Box>
    );
};

export default RecipeDetails;
