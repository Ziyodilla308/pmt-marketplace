import {Card, CardContent} from "@/components/ui/card";
import {pmtCategoriesFilter} from "@/data/mock/pmtProducts.ts";
import {useTranslation} from "react-i18next";

type Props = {
    category: string;
    selectedFilter: string | null;
    onFilterChange: (type: string | null) => void;
};

const CategoryFilters = ({category, selectedFilter, onFilterChange}: Props) => {
    const { t } = useTranslation();
    const filters = pmtCategoriesFilter.filter(f => f.category === category);

    if (!filters.length) return null;

    return (
        <Card className="shadow-lg border border-gray-200 rounded-2xl">
            <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-5 text-gray-800">{t("category")}</h3>

                <div className="flex flex-col space-y-4">
                    {filters.map((f) => (
                        <label
                            key={f.type}
                            className={`
                                flex items-center justify-between p-3 border rounded-xl cursor-pointer transition-all
                                hover:bg-red-50
                                ${selectedFilter === f.type ? "border-red-300 bg-red-100 shadow-md" : "border-gray-300"}
                            `}
                        >
                            <span className="text-gray-800 font-medium">{t(f.name)}</span>
                            <div
                                className={`
                                    w-5 h-5 rounded-full border-2 flex items-center justify-center
                                    ${selectedFilter === f.type ? "border-red-500 bg-red-500" : "border-gray-400 bg-white"}
                                    transition-all
                                `}
                            >
                                {selectedFilter === f.type && (
                                    <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                                )}
                            </div>
                            <input
                                type="radio"
                                name={`category-${category}`}
                                checked={selectedFilter === f.type}
                                onChange={() => onFilterChange(f.type)}
                                className="hidden"
                            />
                        </label>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default CategoryFilters;
