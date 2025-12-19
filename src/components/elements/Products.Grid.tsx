import {Card, CardContent} from '@/components/ui/card';
import {TOnlyPmtProducts} from "@/utils/types.ts";
import {Link, useParams} from "react-router-dom";

interface Props {
    products: TOnlyPmtProducts[];
}

const ProductsGrid = ({products}: Props) => {
    const {lang} = useParams();
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
                <Link to={`/${lang}/categories/${product.category}/detail/${product.id}`}>
                    <Card key={product.id} className="w-full group hover:shadow-lg transition-shadow">
                        <CardContent className="p-0">
                            <div className="aspect-square overflow-hidden rounded-t-lg bg-secondary">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"

                                />
                            </div>
                            <div className="p-6">
                                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                            </div>
                        </CardContent>

                    </Card>
                </Link>
            ))}
        </div>
    );
};

export default ProductsGrid;
