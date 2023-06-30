import { useAuthContext } from './useAuthContext';
import { useTasksContext } from './useTasksContext'

export const useLogout = () => {
    const { dispatch : dispatchUser } = useAuthContext();
    const { dispatch : dispatchTasks  } = useTasksContext();

    const logout = () => {
        localStorage.removeItem('user');
        dispatchUser({ type: 'LOGOUT' });
        dispatchTasks({ type: 'SET_TASKS', payload: null });
    }

    return { logout };
};