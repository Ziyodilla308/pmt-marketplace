import {Card, CardContent, CardFooter} from '@/components/ui/card';
import {TOnlyPmtProducts} from "@/utils/types.ts";
import {Link, useParams} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import {useTranslation} from "react-i18next";

interface Props {
    products: TOnlyPmtProducts[];
}

const ProductsGrid = ({products}: Props) => {
    const {t} = useTranslation();
    const {lang} = useParams();
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
                <Card
                    key={product.id}
                    className="group h-full overflow-hidden rounded-xl border bg-background
             transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
                >
                    <CardContent className="p-0 flex-1 flex flex-col">

                        <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                            <img
                                loading="lazy"
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/40
                   via-black/10 to-transparent opacity-0
                   transition-opacity duration-300 group-hover:opacity-100"
                            />
                        </div>


                        <div className="flex-1 flex flex-col justify-between p-6">
                            <h3
                                className="text-lg font-semibold leading-tight
                   transition-colors duration-300 group-hover:text-primary"
                            >
                                {t(product.name)}
                            </h3>
                        </div>
                    </CardContent>

                    <CardFooter className="p-4 pt-0">
                        <Button variant="default" className="w-full" asChild>
                            <Link to={`/${lang}/categories/${product.category}/detail/${product.id}`}>
                                {t("viewDetails")}
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>

            ))}
        </div>
    );
};

export default ProductsGrid;
