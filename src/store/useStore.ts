import { create } from 'zustand';

interface User {
    username: string;
    savedRecipes: number[];
}

interface StoreState {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
    toggleFavorite: (id: number) => void;
}

export const useStore = create<StoreState>((set, get) => ({
    user: JSON.parse(localStorage.getItem('user') || 'null'),
    login: (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        set({ user });
    },
    logout: () => {
        localStorage.removeItem('user');
        set({ user: null });
    },
    toggleFavorite: (id: number) => {
        const user = get().user;
        if (!user) return;

        const updatedFavorites = user.savedRecipes.includes(id)
            ? user.savedRecipes.filter((r) => r !== id)
            : [...user.savedRecipes, id];

        const updatedUser = { ...user, savedRecipes: updatedFavorites };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        set({ user: updatedUser });
    }
}));
