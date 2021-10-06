import axios from 'axios';
import { OrderPayload, UserData } from '../../types';

const base_url_products = process.env.QUARKUS_BASE_PRODUCTS;
const base_url_user = process.env.QUARKUS_BASE_USER;
const base_url_marketplace = process.env.QUARKUS_BASE_MARKETPLACE;
const url_authentication = process.env.QUARKUS_AUTHENTICATION;
const mapboxToken = process.env.NEXT_APP_KEY_MAPBOX;
const username = process.env.QUARKUS_USERNAME;
const password = process.env.QUARKUS_PASSWORD;
const auth = process.env.QUARKUS_AUTH;

const qs = require("querystring");
const api = axios.create({
    baseURL: url_authentication,
});

export async function  fetchProducts() {
    const token = await generateToken();

    console.log(token.data)
    console.log(base_url_products)

    return axios({
        method: "GET",
        url: `${base_url_products}/dona-frost/v1/product`,
        withCredentials: false
    });
}

export function fetchLocalMapBox(local: string) {
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

export function saveOrder(payload: OrderPayload) {
    return axios.post(`${base_url_marketplace}/orders`, payload);
}

export async function userRegister(newUser: UserData) {
    const token = await generateToken();

    return axios.post(`${base_url_user}/dona-frost/v1/user`, newUser, {
        headers: {
            authorization: `Bearer ${token}`,
        }
    });
}

async function authApi(username: string | undefined, password: string | undefined, auth: string | undefined) {
    const https = require('https');

    const authDataBankAPi = await api.post('/openid-connect/token',
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
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    }).then((res) => res.data).catch(console.log);

    return authDataBankAPi;
}

function generateToken() {
    return authApi(username, password, auth);
}