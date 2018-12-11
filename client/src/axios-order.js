import axios from 'axios';


const instance = axios.create({
    baseURL:'https://homegrownkids-8620b.firebaseio.com/'
})

export default instance;

