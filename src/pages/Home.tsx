import React, { useEffect, useState } from 'react';
import API from '../services/api';
import { Card, CardContent, CardMedia, Typography, Grid, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';

interface Recipe {
    id: number;
    title: string;
    description: string;
    image: string;
}

const Home = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const navigate = useNavigate();
    const { user, toggleFavorite } = useStore();

    useEffect(() => {
        API.get('/recipes').then(res => setRecipes(res.data));
    }, []);

    return (
        <Grid container spacing={4}>
            {recipes.map((recipe) => (
                <Card>
                    <CardMedia
                        component="img"
                        height="200"
                        image={recipe.image}
                        alt={recipe.title}
                        onClick={() => navigate(`/recipe/${recipe.id}`)}
                        sx={{ cursor: 'pointer' }}
                    />
                    <CardContent>
                        <Typography variant="h6">{recipe.title}</Typography>
                        <Typography variant="body2">{recipe.description}</Typography>
                        {user && (
                            <IconButton
                                onClick={() => toggleFavorite(recipe.id)}
                                color={user.savedRecipes.includes(recipe.id) ? 'error' : 'default'}
                            >
                                <FavoriteIcon />
                            </IconButton>
                        )}
                    </CardContent>
                </Card>
            ))}
        </Grid>
    );
};

export default Home;
