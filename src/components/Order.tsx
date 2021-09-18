import { useState } from "react";
import { Product } from "../types";
import ProductsList from "./ProductList";
import StepsHeader from "./StepsHeader";
import { checkIsSelected } from "./utils/helpers";
import fakeDataJson from "./fakeData.json";

export default function Order() {

    const [products, setProducts] = useState<Product[]>(fakeDataJson);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

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