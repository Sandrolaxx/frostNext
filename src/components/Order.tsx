import { useEffect, useState } from "react";
import { OrderLocationData, Product } from "../types";
import OrderLocation from "./OrderLocation";
import OrderSummary from "./OrderSummary";
import ProductsList from "./ProductList";
import StepsHeader from "./StepsHeader";
import { checkIsSelected, validateOrder } from "../utils/helpers";
import { fetchProducts, saveOrder } from "../utils/restClient";

export default function Order() {

    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    const totalPrice = selectedProducts.reduce((sum, item) => {
        return sum + item.price;
    }, 0)

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response!))
            .catch(() => console.log("Deu ruim!"));
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
                    //   toast.success(`Pedido enviado com sucesso! Nº ${response.data.id}`);
                    setSelectedProducts([]);
                } else {
                    //   toast.error(validateOrder(payload.total, payload.address))
                }

            })
            .catch(() => {
                // toast.warning('Erro ao enviar pedido');
            })
    }

    return (
        <div>
            <StepsHeader />
            {products.length != 0 ? (
                <ProductsList
                    products={products}
                    onSelectProduct={handleSelectProduct}
                    selectedProducts={selectedProducts}
                />
            ) : (<h1>Carregando</h1>)}
            <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
            <OrderSummary
                amount={selectedProducts.length}
                totalPrice={totalPrice}
                onSubmit={handleSubmit}
            />
        </div >
    );
}