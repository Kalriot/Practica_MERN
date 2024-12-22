import {createPool} from 'mysql2/promise';

export const pool = createPool({
    host: 'localhost',
    port : '3310',
    user: 'root',
    password: 'Paquitosaurio',
    database: 'taskdb',
});