import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8081/gateway/';

class OperatorService {
    addOperator() {
      return new Promise((resolve, reject) => {
        return axios
        .post(API_URL + 'gws/addoperator',operator)
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
      getCity(){
        return new Promise((resolve, reject) => {
          return axios
          .get(API_URL + 'gws/getcity')
          .then(response => {
             resolve(response.data);
          }).catch(error =>{
            console.log(error);
            reject(error)
          }
          );
        });
        
      }
      getOperatorType(){
        return new Promise((resolve, reject) => {
          return axios
          .get(API_URL + 'gws/getcity')
          .then(response => {
             resolve(response.data);
          }).catch(error =>{
            console.log(error);
            reject(error)
          }
          );
        });
      }
      getRole(){
        return new Promise((resolve, reject) => {
          return axios
          .get(API_URL + 'gws/getrole')
          .then(response => {
             resolve(response.data);
          }).catch(error =>{
            console.log(error);
            reject(error)
          }
          );
        });
      }
     
}

export default new OperatorService();
