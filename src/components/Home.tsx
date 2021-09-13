import Link from "next/link";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animations/dona-frost.json";
import Button from "./Button";

export default function Home() {

    const [animation, setAnimation] = useState({
        isStopped: false, isPaused: false
    });

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="flex justify-around items-center">
            <div className="pl-12">
                <h1 className="font-semibold text-5xl text-gray-700 mb-2 animate-fade-down">
                    Comida de mãe <br />
                    direto no seu apê, <br />
                    faça seu pedido <br />
                    que entregamos <br />
                    para você!
                </h1>
                <h3 className="font-normal text-lg text-gray-600 mb-8 animate-fade-left">
                    Faça seu pedido e em poucos <br />
                    minutos levaremos em sua porta
                </h3>
                <Link href="/products" >
                    <Button color={"primary-color"} height={14} width={56} animate={true} >
                        FAZER PEDIDO
                    </Button>
                </Link>
            </div>

            <div className="mt-10 animate-fade-in">
                <Lottie options={defaultOptions}
                    height={600}
                    style={{ cursor: "default" }}
                    width={600}
                    speed={0.8}
                    isStopped={animation.isStopped}
                    isPaused={animation.isPaused} />
            </div>
        </div>
    );
}