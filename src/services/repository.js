import Axios from 'axios';

class Repository {
  constructor(options) {
    //  token will use for login page
    this.token = localStorage.getItem('_token') || sessionStorage.getItem('_token');
    this.createInstance(options);
  }

  createInstance(options = {}) {
    const headers = { Authorization: this.token };
    let defaultOptions = {
      responseType: 'json',
      timeout: 60000,
      headers,
    };

    defaultOptions = Object.assign(defaultOptions, options);
    const instance = Axios.create(defaultOptions);

    instance.interceptors.response.use((response) => {
      if (response.data.error) {
        console.error(response.data.message);
        return Promise.reject(response.data);
      }
      return response;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    });

    this.instance = instance;
    return instance;
  }

  async get(url, params = null, rawData = false) {
    const response = await this.instance.get(url, { params, headers: { Authorization: localStorage.getItem('_token') } });
    return rawData ? response : response.data;
  }

  async post(url, payload) {
    const response = await this.instance.post(url, payload, { headers: { Authorization: localStorage.getItem('_token') } });
    return response.data;
  }

  async put(url, payload) {
    const response = await this.instance.put(url, payload, { headers: { Authorization: localStorage.getItem('_token') } });
    return response.data;
  }

  async delete(url, payload = {}) {
    const response = await this.instance.delete(url, { data: payload, headers: { Authorization: localStorage.getItem('_token') } });
    return response.data;
  }
}

export default Repository;
