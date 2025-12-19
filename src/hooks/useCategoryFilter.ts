import { useState } from "react";
import {TOnlyPmtProducts} from "@/utils/types.ts";

export const useCategoryFilter = (products: TOnlyPmtProducts[], categoryHeader: string) => {
    const [selectedType, setSelectedType] = useState<string | null>(null);

    const filteredProducts = selectedType
        ? products.filter(p => p.category === selectedType)
        : products.filter(p => p.categoryHeader === categoryHeader);

    return {
        filteredProducts,
        selectedType,
        setSelectedType
    };
};
