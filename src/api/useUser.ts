import { useQuery } from '@tanstack/react-query';

export const useUser = () => {
    const API_URL = import.meta.env.VITE_API_URL;
    
    // return useQuery({
    //     queryKey: ['user'],
    //     queryFn: async () => {
    //         const response = await fetch(`${API_URL}/api/me`, {
    //             credentials: 'include',
    //         });

    //         if (!response.ok) {
    //             throw new Error('Failed to fetch user data');
    //         }

    //         return response.json();
    //     },
    //     retry: false,
    // });

    return { data: null };
};