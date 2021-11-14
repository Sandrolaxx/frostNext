import { useEffect, useState } from "react";
import { OrderLocationData, Product } from "../types";
import OrderLocation from "./OrderLocation";
import ProductsList from "./ProductList";
import StepsHeader from "./StepsHeader";
import { checkIsSelected } from "./utils/helpers";
import { fetchProducts } from "./utils/restClient";

export default function Order() {

    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

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

    return (
        <div>
            <StepsHeader />
            {products.length != 0 ? (
                <ProductsList
                    products={products}
                    onSelectProduct={handleSelectProduct}
                    selectedProducts={selectedProducts}
                />
            ) : (<h1>{products.length}</h1>)}
            <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
            {/* <OrderSummary
                amount={selectedProducts.length}
                totalPrice={totalPrice}
                onSubmit={handleSubmit}
            /> */}
        </div >
    );
}