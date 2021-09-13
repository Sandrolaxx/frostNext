import Image from "next/image";
import Link from "next/link";
import logo from "../assets/icons/logo.png";
import Button from "./Button";

interface headerProps{
    animate?: boolean;
}

export default function Header(props: headerProps) {
    const animate = props.animate;
    
    return (
        <header className={`
            flex items-center justify-between 
            bg-primary-color h-20 animate-${animate ? "fade-down" : "none"}
        `}>
            <div className="p-20 pl-24 flex items-center">
                <Link href="/" >
                    <Image src={logo} alt="DonaFrost Logo" className="cursor-pointer"
                        width={45} height={45} quality={100} />
                </Link>
                <Link href="/" >
                    <div className={`
                        ml-2 font-semibold cursor-pointer 
                        text-2xl text-light-color tracking-tight 
                    `} >
                        DonaFrost
                    </div>
                </Link>
            </div>
            <div className="flex h-20 mr-20 items-center flex-row">
                <Link href="/register"  >
                    <Button textColor="secondary-color" color="light-color" >
                        CADASTRAR-SE
                    </Button>
                </Link>
                <Link href="/sign" >
                    <div className={`
                        ml-4 font-medium cursor-pointer text-xl
                      text-light-color  tracking-tight 
                      hover:text-secondary-color
                    `}>
                        ENTRAR
                    </div>
                </Link>
            </div>
        </header>
    );
}
