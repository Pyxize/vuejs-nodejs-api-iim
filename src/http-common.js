import axios from "axios";
import store from '../src/store/index'


const token = store.state.user.token

//console.log('yes', store.state.user.token)

export default axios.create({
    baseURL: "http://localhost:4000",
    headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
});
//instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
