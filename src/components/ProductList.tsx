import { Product } from "../types";
import ProductCard from "./ProductCard";
import { checkIsSelected } from "./utils/helpers";

interface Props {
    products: Product[];
    selectedProducts: Product[];
    onSelectProduct: (product: Product) => void;
}

export default function ProductsList({ products, onSelectProduct, selectedProducts }: Props) {
    return (
        <div className="flex  flex-wrap justify-center mt-0 mb-0 ml-20 mr-20 pb-12">
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onSelectProduct={onSelectProduct}
                    isSelected={checkIsSelected(selectedProducts, product)}
                />
            ))}
        </div>
    );
}