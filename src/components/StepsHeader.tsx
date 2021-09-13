
export default function StepsHeader() {
    return (
        <header className='flex justify-center mb-7'>
            <div className='flex pt-12 pb-4 w-2/3'>
                <h1 className='font-bold text-4xl tracking-tight 
                    text-secondary-color mr-20'>
                    SIGA AS <br />
                    ETAPAS
                </h1>
                <ul className="p-1">
                    <li>
                        <span className='font-medium text-lg leading-snug mr-2'>1</span>
                        Selecione os produtos e localização.
                    </li>
                    <li>
                        <span className='font-medium text-lg leading-snug mr-2'>2</span>
                        Depois clique em <strong>"FAZER PEDIDO"</strong>.
                    </li>
                    <li>
                        <span className='font-medium text-lg leading-snug mr-2'>3</span>
                        Faça o checkout do pedido e aguarde alguns minutos até 
                        entregarmos sua deliciosa refeição.
                    </li>
                </ul>
            </div>
        </header>
    );
}