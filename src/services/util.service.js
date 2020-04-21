import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/gateway/';

class UtilService {
    getPublicContent() {
        return axios.get(API_URL + 'add');
      }
      getUserBoard() {
        return axios.get(API_URL + 'user', { headers: authHeader() });
      }
}

export default new UtilService();
