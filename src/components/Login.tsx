import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import frostLove from "../assets/images/dona-frost-login.svg";
import Button from "./Button";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const active = true;
    const main = true;

    function handleRegister() {


        try {
            // login(newUser);
        } catch (err) {
            alert("Erro no cadastro, tente novamente!")
        }
    }

    return (
        <div className="flex flex-col items-center m-auto bg-secondary-light-color rounded-xl shadow-2xl animate-fade-in">
            <p className="text-3xl m-4 text-gray-600 font-bold">
                Prove DonaFrost e se apaixone.
            </p>
            <div className="flex space-x-16 items-center w-full p-2">
                <form className="max-w-sm m-4" onSubmit={e => {
                    e.preventDefault();
                    handleRegister()
                }}>
                    <div className="flex flex-col">
                        <input
                            className="max-h-10 p-4"
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            className="max-h-10 p-4 mt-4 mb-12"
                            placeholder="Senha"
                            value={password}
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <Link href="/products">
                        <Button color="secondary-color" width={96} height={12} >
                            ENTRAR
                        </Button>
                    </Link>
                </form>
                <section className="max-w-sm items-center text-center" >
                    <Image src={frostLove} alt="DonaFrost Logo" className="cursor-pointer"
                        width={800} height={800} quality={100} />
                </section>
            </div>
            <div>
                <Link href="/sign">
                    <div className="flex flex-row cursor-pointer items-center m-4">
                        <p>Não possui uma conta?</p>
                        <strong> Cadastre-se</strong>
                        <p className="mx-5">|</p>
                        <p className="underline">Esqueci minha senha</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}