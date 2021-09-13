import { Product } from "../types";
import { formatPrice } from "./utils/helpers";
import Image from "next/image";
import { CheckedIcon } from "./utils/IconsComponents/Icons";
import { useState } from "react";

interface Props {
    product: Product;
    onSelectProduct: (product: Product) => void;
    isSelected: boolean;
}

export default function ProductCard({ product, onSelectProduct, isSelected }: Props) {

    const [selectPlateSize, setSelectPlateSize] = useState(true);

    function handlePlateSize() {

        if (selectPlateSize == false) {
            setSelectPlateSize(true);
            product.plateSize = "INDIVIDUAL";
            product.price -= 3;
        } else {
            setSelectPlateSize(false);
            product.plateSize = "TRHE_PEOPLE";
            product.price += 3;
        }

    }

    return (

        <div className={`
                p-4 flex flex-auto ${isSelected ? "border-4 border-blue-300" : ""}
                max-w-md max-h-64 rounded-3xl shadow-2xl cursor-pointer m-5
                bg-secondary-light-color
            `}
            onClick={() => onSelectProduct(product)}
        >
            <div className="flex items-start justify-center">
                <div className="mr-4">
                    <h1 className="font-bold text-2xl leading-6 text-secondary-color">
                        {product.name}
                    </h1>
                    <Image src={product.imageUri}
                        width={350}
                        height={350}
                        quality={100}
                        alt={product.name} />
                </div>
                <div className="flex flex-col h-full">
                    <p className="text-gray-700">
                        {product.description}
                    </p>


                    <label className="flex items-center m-1 text-secondary-color text-base">
                        <span className="w-7 h-7 mr-2 rounded-full border border-grey cursor-pointer"
                            onClick={handlePlateSize}>
                            {selectPlateSize ? (
                                false
                            ) : <>{CheckedIcon}</>}
                        </span>
                        G(3 Pessoas) - 350g
                    </label>
                    <label className="flex items-center m-1 text-secondary-color text-base">
                        <span className="w-7 h-7 mr-2 rounded-full border border-grey cursor-pointer"
                            onClick={handlePlateSize}>
                            {selectPlateSize ? (
                                <>{CheckedIcon}</>
                            ) : false}
                        </span>
                        P(Individual) - 100g

                    </label>

                    <span className="font-bold text-2xl leading-6 text-primary-color mt-auto">
                        {formatPrice(product.price)}
                    </span>
                </div>
            </div>
        </div>
    );
}