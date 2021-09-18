import { Product } from "../types";
import { formatPrice } from "./utils/helpers";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
    product: Product;
    onSelectProduct: (product: Product) => void;
    plateSize: "INDIVIDUAL" | "THREE_PEOPLE";
    isSelected: boolean;
}

export default function ProductCard({ product, onSelectProduct,
    isSelected, plateSize }: Props) {

    const isPlateSizeIndividual = plateSize === "INDIVIDUAL";

    return (
        <>
            <motion.div
                initial={{ rotateY: isPlateSizeIndividual ? 180 : 0 }}
                animate={{ rotateY: isPlateSizeIndividual ? 0 : 180 }}
                transition={{ duration: 0.500 }}
                className={`
                    p-4 flex flex-auto ${isSelected ? "border-blue-300 m-4" : "border-transparent"}
                    max-w-md max-h-64 rounded-3xl shadow-2xl cursor-pointer m-5 border-4
                    bg-secondary-light-color ${isPlateSizeIndividual ? "animate-fade-in-fast" : "hidden"}
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
                        <span className="font-bold text-2xl leading-6 text-primary-color mt-auto">
                            {formatPrice(product.price)}
                        </span>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ rotateY: isPlateSizeIndividual ? 0 : 180 }}
                animate={{ rotateY: isPlateSizeIndividual ? 180 : 0 }}
                transition={{ duration: 0.500 }}
                className={`
                    p-4 flex flex-auto ${isSelected ? "border-blue-300 m-4" : "border-transparent"}
                    max-w-md max-h-64 rounded-3xl shadow-2xl cursor-pointer m-5 border-4
                    bg-secondary-light-color ${isPlateSizeIndividual ? "hidden" : "animate-fade-in-fast"}
                    `}
                onClick={() => onSelectProduct(product)}
            >
                <div className={"flex items-start justify-center"}>
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
                        <span className="font-bold text-2xl leading-6 text-primary-color mt-auto">
                            {formatPrice(product.price)}
                        </span>
                    </div>
                </div>
            </motion.div>
        </>
    );
}