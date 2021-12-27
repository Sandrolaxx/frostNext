import { useState } from "react";
import { PlateSize, Product } from "../types";
import ProductCard from "./ProductCard";
import { checkIsSelected } from "../utils/helpers";

interface Props {
    products: Product[];
    selectedProducts: Product[];
    onSelectProduct: (product: Product) => void;
}

export default function ProductsList({ products, onSelectProduct, selectedProducts }: Props) {
    const [plateSize, setPlateSize] = useState<PlateSize>(PlateSize.INDIVIDUAL);
    const isPlateSizeIndividual = plateSize === PlateSize.INDIVIDUAL;

    function handlePlateSize() {
        isPlateSizeIndividual ? setPlateSize(PlateSize.THREE_PEOPLE) : setPlateSize(PlateSize.INDIVIDUAL);
    }

    return (
        <>
            <div className="flex m-2 ml-64">
                <span className="text-gray-400 font-medium">
                    Individual
                </span>
                <div className="relative inline-block w-10 mr-2 ml-2 align-middle">
                    <input type="checkbox" onChange={handlePlateSize} name="toggle" id="Blue"
                        className={`${isPlateSizeIndividual ? "bg-primary-color right-4" : "bg-secondary-color right-0"} appearance-none
                        outline-none focus:outline-none duration-200 ease-in absolute block w-6 h-6 rounded-full  border-4  cursor-pointer`} />
                    <label htmlFor="Blue" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                    </label>
                </div>
                <span className="text-gray-400 font-medium">
                    3 Pessoas
                </span>
            </div>

            <div className="flex  flex-wrap justify-center mt-0 mb-0 ml-20 mr-20 pb-12">
                {products.filter(isPlateSizeIndividual ? p => p.plateSize === PlateSize.INDIVIDUAL 
                                    : p => p.plateSize === PlateSize.THREE_PEOPLE)
                    .map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onSelectProduct={onSelectProduct}
                            plateSize={plateSize}
                            isSelected={checkIsSelected(selectedProducts, product)}
                        />
                    ))}
            </div>
        </>
    );
}