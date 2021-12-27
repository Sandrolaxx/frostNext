import axios from 'axios';
import { OrderPayload, Product, UserData } from '../types';

const mapboxToken = process.env.NEXT_PUBLIC_KEY_MAPBOX;
const username = process.env.NEXT_PUBLIC_QUARKUS_USERNAME;
const password = process.env.NEXT_PUBLIC_QUARKUS_PASSWORD;
const auth = process.env.NEXT_PUBLIC_QUARKUS_AUTH;
const url_authentication = process.env.NEXT_PUBLIC_QUARKUS_AUTHENTICATION;
const base_url_products = process.env.NEXT_PUBLIC_QUARKUS_BASE_PRODUCTS;
const base_url_user = process.env.NEXT_PUBLIC_QUARKUS_BASE_USER;
const base_url_marketplace = process.env.NEXT_PUBLIC_QUARKUS_BASE_MARKETPLACE;

export async function fetchProducts() {

    const token: string = await generateToken();
    let products: any;

    const api = axios.create({
        baseURL: base_url_products
    });

    return await api.get("/dona-frost/v1/product", {
        
        headers: {
            authorization: `Bearer ${token!}`,
        }
    })
    .then(res => products = res.data)
    .catch(console.log);

}

export function fetchLocalMapBox(local: string): any {
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

export function saveOrder(payload: OrderPayload) {
    return axios.post(`/orders`, payload);
}

export async function userRegister(newUser: UserData) {
    // const token = await generateToken();

    return axios.post(`http://localhost:8080/dona-frost/v1/user`, newUser);
}

async function generateToken() {

    const qs = require("querystring");
    let token: string | any;

    const api = axios.create({
        baseURL: url_authentication
    });

    await api.post('/openid-connect/token',
        qs.stringify({
            grant_type: 'password',
            username: username,
            password: password,

        }), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            authorization: `Basic ${auth}`,
        },
        withCredentials: false,
    })
    .then(res => token = res.data.access_token)
    .catch(console.log);

    return token;

}