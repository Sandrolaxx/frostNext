import Button from "./Button";
import { formatPrice } from "../utils/helpers";

interface Props {
    amount: number,
    totalPrice: number
    onSubmit: () => void;
}

function OrderSummary({ amount, totalPrice, onSubmit }: Props) {
    return (
        <div className="flex justify-center mt-12 mb-12 text-light-color">
            <div className="w-3/4 h-18 p-4 flex justify-between items-center 
            text-xl bg-secondary-color rounded-2xl shadow-2xl">
                <div className="flex flex-col">
                    <span>
                        <strong>{amount} </strong>
                        PRODUTOS SELECIONADOS
                    </span>
                    <span>
                        <strong>{formatPrice(totalPrice)} </strong>
                        VALOR TOTAL
                    </span>
                </div>
                <Button color={"light-color"} textColor="primary-color" height={14} width={56} >
                    FAZER PEDIDO
                </Button>
            </div>
        </div>
    );
}

export default OrderSummary;
