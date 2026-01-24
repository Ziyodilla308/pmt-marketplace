import {motion} from "framer-motion";
import {Star} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardFooter} from "@/components/ui/card";

interface RecommendedProduct {
    id: string;
    name: string;
    image: string;
    price: string;
    rating: number;
    reviewCount: number;
}

interface RecommendedProductsProps {
    products: RecommendedProduct[];
}

export const RecommendedProducts = ({products}: RecommendedProductsProps) => {
    return (
        <motion.section
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="py-16 bg-gradient-subtle"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                        You Might Also Like
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Explore more sewing machines in our collection
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.4, delay: index * 0.1}}
                        >
                            <Card
                                className="group h-full bg-card border-border hover:shadow-hover transition-all duration-300 overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="aspect-square bg-muted/30 overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-4 space-y-2">
                                        <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                                            {product.name}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-0.5">
                                                {Array.from({length: 5}).map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-4 h-4 ${
                                                            i < Math.floor(product.rating)
                                                                ? "fill-primary text-primary"
                                                                : "fill-muted text-muted"
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-sm text-muted-foreground">
                        ({product.reviewCount})
                      </span>
                                        </div>
                                        <div className="text-xl font-bold text-foreground">
                                            {product.price}
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="p-4 pt-0">
                                    <Button variant="default" className="w-full">
                                        View Details
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};
