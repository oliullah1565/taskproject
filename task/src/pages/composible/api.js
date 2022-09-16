import Axios from 'axios';
const RESOURCE_NAME = 'http://127.0.0.1:8000/api';

export default{
      getCheck() {
        return Axios.get(`${RESOURCE_NAME}/check`);
      },

      login(data) {
        return Axios.post(`${RESOURCE_NAME}/login`, data);
      },

      register(data) {
        return Axios.post(`${RESOURCE_NAME}/register`, data);
      },

      productall() {
        return Axios.get(`${RESOURCE_NAME}/product`);
      },
      product(data) {
        return Axios.post(`${RESOURCE_NAME}/product`, data);
      },



      productdetails(id) {
        return Axios.post(`${RESOURCE_NAME}/productdetails/${id}`);
      },
      
}
