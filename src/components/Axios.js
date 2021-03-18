import axios from 'axios';

export const  firebase = axios.create({
    baseURL: 'https://game-15-8e365-default-rtdb.firebaseio.com/game-15.json'
})

