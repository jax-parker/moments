import axios from "axios";

axios.defaults.baseURL = "https://moments-711-a96b892a549b.herokuapp.com/"
axios.defaults.headers.post['Content-Type']='mulitpart/form-data'
axios.defaults.withCredentials=true
