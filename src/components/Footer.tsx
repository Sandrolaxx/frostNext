import Image from 'next/image';
import Link from 'next/link';
import facebook from "../assets/icons/facebook.png"
import instagram from "../assets/icons/instagram.png"
import youtube from "../assets/icons/youtube.png"

interface footerProps{
    animate?: boolean;
}

export default function Footer(props: footerProps) {
    const animate = props.animate;

    return (
        <footer className={`
                bg-dark-color p-2 mt-auto 
                animate-${animate == true ? "fade-in-fast" : "none"}
            `} > 
            <div className="flex justify-center text-light-color text-sm">
                Siga-nos da redes sociais
            </div>
            <div className="flex justify-center mt-1">
                <div className="mr-3 cursor-pointer">
                    <Link href="https://facebook.com/">
                        <Image src={facebook} width={25} height={25} quality={100}/>
                    </Link>
                </div>
                <div className="mr-3 cursor-pointer" >
                    <Link href="https://youtube.com/">
                        <Image src={youtube} width={25} height={25} quality={100}/>
                    </Link>
                </div>
                <div className="mr-3 cursor-pointer">
                    <Link href="https://instagram.com/">
                        <Image src={instagram} width={25} height={25} quality={100}/>
                    </Link>
                </div>
            </div>
            <div className="flex justify-center text-light-color text-sm">
                Todos os direitos reservados. DonaFrost®
            </div>
        </footer>
    );
}