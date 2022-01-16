import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import frostLove from "../assets/images/dona-frost-login.svg";
import Button from "./Button";
import { generateToken } from "../utils/restClient";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const inputRef = useRef(null);

    const active = true;
    const main = true;

    async function handleRegister() {
        try {
            const token = await generateToken(email, password);

            localStorage.setItem("token", token);
        } catch (err) {
            toast.error("Erro no cadastro, tente novamente!")
        }
    }

    return (
        <div className={`flex flex-col items-center m-auto 
                        bg-secondary-light-color rounded-xl 
                        shadow-2xl animate-fade-in w-1/2 h-2/4`}
            ref={inputRef}>
            <p className="text-3xl m-6 -mb-16 text-gray-600 font-bold">
                Prove DonaFrost e se apaixone.
            </p>
            <div className="flex items-center w-full p-2 ml-24">
                <form className="m-4" onSubmit={e => {
                    e.preventDefault();
                    handleRegister();
                }}>
                    <section className="w-full" >
                        <Image src={frostLove} alt="DonaFrost Logo"
                            width={860} height={500} quality={100} />
                    </section>
                    <div className="flex flex-col relative">
                        <input
                            className="h-10 w-96 p-4 absolute -top-96"
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            className="h-10 w-96 p-4 absolute -top-96 mt-16"
                            placeholder="Senha"
                            value={password}
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        <div className="absolute -top-60">
                            <Button color="secondary-color" width={96} height={12} >
                                ENTRAR
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="flex flex-row items-center absolute top-2/3 -mt-14">
                <p>Não possui uma conta?</p>
                <Link href="/register">
                    <div className="cursor-pointer">
                        <strong className="ml-1">Cadastre-se</strong>
                    </div>
                </Link>
                <p className="mx-5">|</p>
                <p className="underline">Esqueci minha senha</p>
            </div>
        </div>
    )
}