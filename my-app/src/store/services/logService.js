import axios from 'axios';
import {action_log_url} from '../actions/constants';

const formUrlEncoded = x =>
   Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')

const logService = (state) => {
    return new Promise((resolve, reject) => {
        // const channels = localStorage.getItem('user');
        // const { socket, source_channel_id } = state;
        // const isAuthenticated = !!localStorage.getItem('access_token');
        // const user = JSON.parse(localStorage.getItem('user'));
        const payload = {
          user_id : "2",
          action_id : state.action_id,
          channel_id : "1231234",
          action_type : "user_click",
          params : "1",
          subcriber_id : "12124"
        }
        axios({
            method: "post",
            url: action_log_url,
            data: formUrlEncoded(payload),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          })
            .then(function (response) {
              resolve(response.data)
            })
            .catch(function (error) {
              reject(error)
            });
    })
}
export  default  logService;