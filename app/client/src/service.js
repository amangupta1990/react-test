import axios from 'axios';
import config from './config';


const Service = {
    login: function(creds){
        return axios.post(config.apiPath+'/user/login', creds)
    },
    register: function(creds){
        return axios.post(config.apiPath+'/user/register', creds)
    }
}

export default Service;