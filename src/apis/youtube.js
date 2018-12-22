import axios from 'axios';

const KEY = 'AIzaSyA6Q3zKzA-AdOuvwTYqggcWaGrd0i4OE8w';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})