import { Routes, Route } from 'react-router-dom';
// import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
// import RecipeDetails from '../pages/RecipeDetails';
// import Dashboard from '../pages/Dashboard';
// import AddRecipe from '../pages/AddRecipe';
// import EditRecipe from '../pages/EditRecipe';

export default function AppRoutes() {
    return (
        <Routes>
            {/*<Route path="/" element={<Home />} />*/}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/*<Route path="/recipe/:id" element={<RecipeDetails />} />*/}
            {/*<Route path="/dashboard" element={<Dashboard />} />*/}
            {/*<Route path="/add" element={<AddRecipe />} />*/}
            {/*<Route path="/edit/:id" element={<EditRecipe />} />*/}
        </Routes>
    );
}
