import axios from 'axios';
import { OrderPayload } from '../../types';

export async function fetchProducts() {
    return await axios.get('http://localhost:3000/api/products')
    .then(response => response.data).catch(console.log);
}

export function fetchLocalMapBox(local: string): any {
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=pk.eyJ1Ijoic2FuZHJvLXJhbW9zIiwiYSI6ImNranJwcmQ4ODlkOG0yeXFqbGlrY29hYTEifQ.vrrN2qGbcrhQWPgwdFZyLg`)
}

// export function saveOrder(payload: OrderPayload) {
//     return axios.post(`${base_url_marketplace}/orders`, payload);
// }

// export async function userRegister(newUser: UserData) {
//     const token = await generateToken();

//     return axios.post(`${base_url_user}/dona-frost/v1/user`, newUser, {
//         headers: {
//             authorization: `Bearer ${token}`,
//         }
//     });
// }