import { useState, useEffect } from "react";
import { Product } from "../types";
import ProductsList from "./ProductList";
import StepsHeader from "./StepsHeader";
import { checkIsSelected } from "./utils/helpers";
import { fetchProducts } from "./utils/restClient";

export default function Order() {

    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(() => console.log("Deu ruim!"));
    },[]);

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
            <ProductsList
                products={products}
                onSelectProduct={handleSelectProduct}
                selectedProducts={selectedProducts}
            />
        </div >
    );
}