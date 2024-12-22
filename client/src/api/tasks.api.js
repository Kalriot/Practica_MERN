import axios from 'axios';

export const createTaskRequest= async (task) => {
    return await axios.post(`http://localhost:3000/tasks`, task);
}

export const getTasksRequest = async () => {
    return await axios.get(`http://localhost:3000/tasks`);
} 

export const deleteTaskRequest = async (id) => {
    return await axios.delete(`http://localhost:3000/tasks/${id}`);
}