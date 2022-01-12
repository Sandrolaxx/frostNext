import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import sorryFrost from "../assets/images/sorryFrost.svg";
import { OrderLocationData, Product } from "../types";
import { checkIsSelected, validateOrder } from "../utils/helpers";
import { fetchProducts, saveOrder } from "../utils/restClient";
import OrderLocation from "./OrderLocation";
import OrderSummary from "./OrderSummary";
import ProductsList from "./ProductList";
import StepsHeader from "./StepsHeader";

export default function Order() {

    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [producstsFetched, setProducstsFetched] = useState<boolean | null>(null);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    const totalPrice = selectedProducts.reduce((sum, item) => {
        return sum + item.price;
    }, 0)

    useEffect(() => {
        toast.promise(
            fetchProducts(),
            {
                pending: 'Buscando Produtos...🔥',
                success: 'Sucesso ao buscar Produtos⚡',
                error: 'Erro ao buscar produtos 🤯'
            }
        )
        .then(res => {
            setProducts(res.data)
            setProducstsFetched(true);
        })
        .catch(() => {
            toast.warn("Erro na comunicação com serviços externos, por favor recarregue a paǵina.")
            setProducstsFetched(false);
        });
    }, []);

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);

        if (isAlreadySelected) {
            const selected = selectedProducts.filter(item => item.id !== product.id);
            setSelectedProducts(selected);
        } else {
            setSelectedProducts(previous => [...previous, product]);
        }
    }

    const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
            ...orderLocation!,
            products: productsIds,
            total: totalPrice
        }

        saveOrder(payload)
            .then((response) => {
                if (validateOrder(payload.total, payload.address) === '') {
                    toast.success(`Pedido enviado com sucesso!`);
                    setSelectedProducts([]);
                } else {
                    toast.error(validateOrder(payload.total, payload.address))
                }
            })
            .catch(() => {
                toast.warning('Erro ao enviar pedido');
            })
    }

    return (
        <>
            <StepsHeader />
            {producstsFetched != null && producstsFetched ?
                <>
                    <ProductsList
                        products={products}
                        onSelectProduct={handleSelectProduct}
                        selectedProducts={selectedProducts}
                    />
                    <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
                    <OrderSummary
                        amount={selectedProducts.length}
                        totalPrice={totalPrice}
                        onSubmit={handleSubmit}
                    />
                </>
                : producstsFetched != null && !producstsFetched ?
                    <>
                        <section className="flex items-center m-auto animate-fade-in" >
                            <Image src={sorryFrost} alt="DonaFrost Sorry"
                                width={500} height={500} quality={100} />
                        </section>
                    </> : false
            };
        </>
    );
}