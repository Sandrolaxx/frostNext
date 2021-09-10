import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/icons/logo.png';
import Button from './Button';

export default function Header() {
  return (
    <nav className={`
        flex items-center justify-between 
        h-20 bg-primary-color
    `}>
      <div className="h-20 ml-20 flex items-center">
        <Link href='/' >
          <Image src={logo} alt="DonaFrost Logo" className="cursor-pointer"
            width={40} height={40} />
        </Link>
        <Link href='/' >
          <div className={`
              ml-4 font-semibold cursor-pointer 
              text-2xl text-light-color tracking-tight 
          `} >
            DonaFrost
          </div>
        </Link>
      </div>
      <div className="flex h-20 mr-20 items-center flex-row">
        <Link href='/register'  >
          <Button textColor="primary-color-hover" color="light-color" >
            CADASTRAR-SE
          </Button>
        </Link>
        <Link href='/sign' >
          <div className={`
              ml-4 font-semibold cursor-pointer text-lg
              text-light-color  tracking-tight 
              hover:text-primary-color-hover
          `}>
            ENTRAR
          </div>
        </Link>
      </div>
    </nav>
  );
}
