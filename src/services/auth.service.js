import axios from 'axios';

const API_URL = 'http://localhost:8081/gateway/';
class AuthService {

  login(operator) {
    return new Promise((resolve, reject) => {
      return axios
      .post(API_URL + 'gw/authenticate',operator)
      .then(response => {
        console.log(" Set Item"+response.data.accessToken);
        if (response.data.accessToken) {
        
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        resolve(response.data);
      }).catch(error =>{
        console.log(error);
        reject(error)
      }
      );
    });
  
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
     /* let headers= {" Autorisation:"asbs"",}
    let headers = {
      "Authorization" : "Bearer wdsdsfsdfsdfs",
      "Content-type"
    }*/
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });


  }
}

export default new AuthService();
