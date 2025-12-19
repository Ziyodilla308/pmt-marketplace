import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import {Card, CardContent} from "@/components/ui/card";
import {pmtCategoriesFilter} from "@/data/pmtProducts";
import {useTranslation} from "react-i18next";

type Props = {
    category: string;
    onFilterChange: (type: string | null) => void;
};
const CategoryFilters = ({category, onFilterChange}: Props) => {
    const { t } = useTranslation();
    const filters = pmtCategoriesFilter.filter(f => f.category === category);

    if (!filters.length) return null;

    return (
        <Card>
            <CardContent className="p-6">
                <h3 className="font-semibold mb-4">{t("category")}</h3>

                <div>
                    {filters.map((f) => (
                        <div key={f.type} className="flex items-center space-x-2 mb-6">
                            <Checkbox
                                className="size-5"
                                id={f.type}
                                onCheckedChange={(checked) => onFilterChange(checked ? f.type : null)}
                            />
                            <Label htmlFor={f.type}>{f.name}</Label>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default CategoryFilters;
