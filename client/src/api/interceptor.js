import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json';

// Add a request interceptor 
axios.interceptors.request.use(function (config) {
  // Do something before request is sent 
  return config;
}, function (error) {
  // Do something with request error 
  return Promise.reject(error);
});

// Add a response interceptor 
axios.interceptors.response.use(function (response) {
  // Do something with response data 
  return response;
}, function (error) {
  // Do something with response error 
  const response = error.response
  const status = response.status
  if(status === 401) {
    jumpToLogin()
  }
  
  return Promise.reject(error);
});
