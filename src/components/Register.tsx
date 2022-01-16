import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { toast } from "react-toastify";
import logo from "../assets/icons/logoBlue.png";
import { UserAddress, UserData } from "../types";
import { validateUserData } from "../utils/helpers";
import { fetchLocalMapBox, userRegister } from "../utils/restClient";
import Button from "./Button";

export default function Register() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [document, setDocument] = useState("");
    const [phone, setPhone] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [numberAp, setNumberAp] = useState("");
    let longitude: any;
    let latitude: any;

    const active = true;
    const main = true;

    async function handleRegister() {

        let address: UserAddress = {
            state,
            city,
            district,
            street,
            number,
            numberAp,
            active,
            main,
            latitude,
            longitude
        }

        let newUser: UserData = {
            name,
            password,
            email,
            phone,
            document,
            address,
            active
        }

        let validationError = validateUserData(newUser);

        if (validationError != null) {
            toast.error(validationError);
            return;
        }

        const responseAddres: any = await fetchLocalMapBox(street + ", " + number + "," + city)
            .then(res => res)
            .catch(() => toast.error("Erro no cadastro, não foi possível encontrar o seu endereço!"));

        newUser.address.latitude = responseAddres.data.features[0].center[1];
        newUser.address.longitude = responseAddres.data.features[0].center[0];

        if (newUser.address.numberAp != null
            && newUser.address.numberAp.match("")) {
            newUser.address.numberAp = null;
        }
        const response: any = userRegister(newUser);

        if (response == 201) {
            toast.success("Cadastrado com sucesso!");
        } else {
            toast.error("Tente novamente! Ocorreu um erro ao realizar cadastro😓");
        }
    }

    return (
        <div className="flex items-center m-auto bg-secondary-light-color rounded-xl shadow-2xl animate-fade-in w-1/2 h-2/4">
            <div className="flex space-x-16 items-center p-8">
                <section className="max-w-sm items-center text-center" >
                    <Image src={logo} alt="DonaFrost Logo" className="cursor-pointer"
                        width={160} height={160} quality={100} />
                    <h1 className="mt-8 text-2xl">Cadastro</h1>
                    <p className="text-base text-dark-color font-medium">
                        Faça seu cadastro e prove da melhor comida caseira da cidade.
                    </p>
                </section>

                <form className="max-w-sm m-4" onSubmit={e => {
                    e.preventDefault();
                    handleRegister()
                }}>
                    <div className="flex space-x-4">
                        <input
                            className="max-h-10 p-4"
                            placeholder="Nome"
                            value={name}
                            required
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            className="max-h-10 p-4"
                            placeholder="Senha"
                            value={password}
                            type="password"
                            required
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <input
                        className="mt-4 max-h-10 p-4"
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        autoComplete="email"
                        required
                        onChange={e => setEmail(e.target.value)}
                    />

                    <div className="flex space-x-4 mt-4">
                        <input
                            className="max-h-10 p-4"
                            placeholder="WhatsApp"
                            value={phone}
                            required
                            onChange={e => setPhone(e.target.value)}
                        />
                        <input
                            className="max-h-10 p-4"
                            placeholder="CPF"
                            value={document}
                            required
                            onChange={e => setDocument(e.target.value)}
                        />
                    </div>

                    <div className="flex space-x-4 mt-4">
                        <input
                            className="max-h-10 w-36 p-4"
                            placeholder="Cidade"
                            value={city}
                            required
                            onChange={e => setCity(e.target.value)}
                        />
                        <input
                            className="max-h-10 w-16 p-4"
                            value={state}
                            onChange={e => setState(e.target.value)}
                            placeholder="UF"
                            list="UF"
                            required
                        />
                        <datalist id="UF">
                            <option>PR</option>
                            <option>RS</option>
                        </datalist>
                        <input
                            className="max-h-10 p-4"
                            placeholder="Bairro"
                            value={district}
                            required
                            onChange={e => setDistrict(e.target.value)}
                        />
                    </div>

                    <div className="flex space-x-4 mt-4">
                        <input
                            className="max-h-10 w-56 p-4"
                            placeholder="Rua"
                            required
                            value={street}
                            onChange={e => setStreet(e.target.value)}
                        />
                        <input
                            className="max-h-10 w-14 p-4"
                            placeholder="Nº"
                            required
                            value={number}
                            onChange={e => setNumber(e.target.value)}
                        />
                        <input
                            className="max-h-10 p-3 mb-4"
                            placeholder="Nº Ap."
                            value={numberAp}
                            onChange={e => setNumberAp(e.target.value)}
                        />
                    </div>

                    <Button color="secondary-color" width={96} height={12} >
                        CADASTRE-SE
                    </Button>

                    <Link href="/login">
                        <div className="flex flex-row cursor-pointer items-center mt-4 w-2/5">
                            <p>Já tenho cadastro</p>
                            <FiArrowRight size={20} color={"#4EA8DE"} />
                        </div>
                    </Link>
                </form>
            </div>
        </div>
    )
}