import axios from 'axios';
import { OrderPayload, Product, UserData } from '../types';

const mapboxToken = process.env.NEXT_PUBLIC_KEY_MAPBOX;
const defaultUsername = process.env.NEXT_PUBLIC_QUARKUS_USERNAME;
const defaultpassword = process.env.NEXT_PUBLIC_QUARKUS_PASSWORD;
const auth = process.env.NEXT_PUBLIC_QUARKUS_AUTH;
const url_authentication = process.env.NEXT_PUBLIC_QUARKUS_AUTHENTICATION;
const base_url_products = process.env.NEXT_PUBLIC_QUARKUS_BASE_PRODUCTS;
const base_url_user = process.env.NEXT_PUBLIC_QUARKUS_BASE_USER;
const base_url_marketplace = process.env.NEXT_PUBLIC_QUARKUS_BASE_MARKETPLACE;

export async function fetchProducts() {
    
    const token: string = await generateToken(defaultUsername!, defaultpassword!);
    const api = axios.create({baseURL: base_url_products});
    
    return await api.get("/dona-frost/v1/product", {
        headers: {
            authorization: `Bearer ${token!}`,
        }
    })
    .then(res => res);

}

export function fetchLocalMapBox(local: string) {
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`);
}

export function saveOrder(payload: OrderPayload) {
    return axios.post(`/orders`, payload);
}

export async function userRegister(newUser: UserData) {
    
    const token: string = await generateToken(defaultUsername!, defaultpassword!);
    const api = axios.create({baseURL: base_url_user});
    
    console.log(newUser);

    return await api.post("/dona-frost/v1/user", newUser, {
        headers: {
            authorization: `Bearer ${token!}`,
        }
    })
    .then(res => res.status)
    .catch(console.log);
    
}

export async function generateToken(username: string, password: string) {

    const qs = require("querystring");
    const api = axios.create({baseURL: url_authentication});

    let token: string;

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
    .catch(() => token = "Erro ao gerar token de autenticação! Tente novamente.");

    return token!;

}

async function generateTokenWithRefresh(refreshToken: string) {

    const qs = require("querystring");
    const api = axios.create({baseURL: url_authentication});

    let token: string;

    await api.post('/openid-connect/token',
        qs.stringify({
            grant_type: 'refresh_token',
            refresh_token: refreshToken,

        }), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            authorization: `Basic ${auth}`,
        },
        withCredentials: false,
    })
    .then(res => token = res.data.access_token)
    .catch(() => token = "Erro ao gerar token de autenticação! Tente novamente.");

    return token!;

}