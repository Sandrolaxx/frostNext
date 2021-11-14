import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from '../../types';

const base_url_products = process.env.QUARKUS_BASE_PRODUCTS;
const base_url_user = process.env.QUARKUS_BASE_USER;
const base_url_marketplace = process.env.QUARKUS_BASE_MARKETPLACE;
const mapboxToken = process.env.NEXT_APP_KEY_MAPBOX;

type Data = {
    products: Product[] | any;
}

export default async function listProducts(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const base_url_products = process.env.QUARKUS_BASE_PRODUCTS;
    const token: string = await generateToken();
    let products: any;

    const api = axios.create({
        baseURL: base_url_products
    });

    await api.get("/dona-frost/v1/product", {
        headers: {
            authorization: `Bearer ${token!}`,
        }
    }).then(res => products = res.data).catch(console.log);

    res.status(200).json(products);

}

async function generateToken() {

    const qs = require("querystring");
    const username = process.env.QUARKUS_USERNAME;
    const password = process.env.QUARKUS_PASSWORD;
    const auth = process.env.QUARKUS_AUTH;
    const url_authentication = process.env.QUARKUS_AUTHENTICATION;
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
    }).then(res => token = res.data.access_token)
        .catch(console.log);

    return token;

}
