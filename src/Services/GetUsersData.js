import axios from 'axios';

const getDataUrl = 'http://demo9197058.mockable.io/users';

// For Getting Data
export const getUsers = ()=>{
return axios({
    url:getDataUrl,
    method:'GET'
});
}