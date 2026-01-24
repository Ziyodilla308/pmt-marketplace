import {Card, CardContent, CardFooter} from '@/components/ui/card';
import {TOnlyPmtProducts} from "@/utils/types.ts";
import {Link, useParams} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";

interface Props {
    products: TOnlyPmtProducts[];
}

const ProductsGrid = ({products}: Props) => {
    const {lang} = useParams();
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
                <Card
                    key={product.id}
                    className="group h-full overflow-hidden rounded-xl border bg-background
                               transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="p-0">
                        <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                            <img
                                loading="lazy"
                                src={product.image}
                                alt={product.name}

                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/40
                                               via-black/10 to-transparent opacity-0
                                               transition-opacity duration-300 group-hover:opacity-100"
                            />
                        </div>
                        <div className="flex flex-col justify-between p-6">
                            <h3
                                className="text-lg font-semibold leading-tight
                                               transition-colors duration-300 group-hover:text-primary"
                            >
                                {product.name}
                            </h3>
                        </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                        <Button variant="default" className="w-full" asChild>
                            <Link to={`/${lang}/categories/${product.category}/detail/${product.id}`}>
                                View Details
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
};

export default ProductsGrid;
