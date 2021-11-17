import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import logo from "../assets/icons/logoBlue.png";
import { UserAddress, UserData } from "../types";
import Button from "./Button";
import { userRegister } from "./utils/restClient";

export default function Register() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [document, setDocument] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [numberAp, setNumberAp] = useState("");

    const active = true;
    const main = true;

    function handleRegister() {

        let address: UserAddress = {
            state,
            city,
            district,
            street,
            number,
            numberAp,
            active,
            main
        }

        let newUser: UserData = {
            name,
            password,
            email,
            whatsapp,
            document,
            address,
            active
        }

        try {
            userRegister(newUser);

        } catch (err) {
            alert("Erro no cadastro, tente novamente!")
        }
    }

    return (
        <div className="flex items-center m-auto bg-secondary-light-color rounded-xl shadow-2xl animate-fade-in">
            <div className="flex space-x-16 items-center w-full p-8">
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
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            className="max-h-10 p-4"
                            placeholder="Senha"
                            value={password}
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <input
                        className="mt-4 max-h-10 p-4"
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <div className="flex space-x-4 mt-4">
                        <input
                            className="max-h-10 p-4"
                            placeholder="WhatsApp"
                            value={whatsapp}
                            onChange={e => setWhatsapp(e.target.value)}
                        />
                        <input
                            className="max-h-10 p-4"
                            placeholder="CPF"
                            value={document}
                            onChange={e => setDocument(e.target.value)}
                        />
                    </div>

                    <div className="flex space-x-4 mt-4">
                        <input
                            className="max-h-10 w-36 p-4"
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input
                            className="max-h-10 w-16 p-4"
                            placeholder="UF"
                            value={state}
                            onChange={e => setState(e.target.value)}
                        />
                        <input
                            className="max-h-10 p-4"
                            placeholder="Bairro"
                            value={district}
                            onChange={e => setDistrict(e.target.value)}
                        />
                    </div>

                    <div className="flex space-x-4 mt-4">
                        <input
                            className="max-h-10 w-56 p-4"
                            placeholder="Rua"
                            value={street}
                            onChange={e => setStreet(e.target.value)}
                        />
                        <input
                            className="max-h-10 w-14 p-4"
                            placeholder="Nº"
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

                    <Link href="/register">
                        <Button color="secondary-color" width={96} height={12} >
                            CADASTRE-SE
                        </Button>
                    </Link>

                    <Link href="/login">
                        <div className="flex flex-row cursor-pointer items-center mt-4">
                            <p>Já tenho cadastro</p>
                            <FiArrowRight size={20} color={"#4EA8DE"} />
                        </div>
                    </Link>
                </form>
            </div>
        </div>
    )
}