import {useParams} from "react-router-dom";

import {ProductHeader} from "@/pages/productDetails/ProductHeader.tsx";
import {ProductDescription} from "@/pages/productDetails/ProductDescription.tsx";
import {ImageGallery} from "@/pages/productDetails/ImageGallery.tsx";
import {ActionButtons} from "@/pages/productDetails/ActionButtons.tsx";
import {TechnicalSpecs} from "@/pages/productDetails/TechnicalSpecs.tsx";
import {RecommendedProducts} from "@/pages/productDetails/RecommendedProducts.tsx";
import {motion} from "framer-motion";
import {toast} from "sonner";
import {pmtProducts} from "@/data/mock/pmtProducts.ts";
import {useTranslation} from "react-i18next";

const Detail = () => {
    const { t } = useTranslation();
    const {category, id} = useParams<{ category: string; id: string }>();

    const product = pmtProducts.find(
        (p) => p.category === category && p.id === Number(id)
    );

    if (!product) {
        return <div className="p-8 text-center">Product not found</div>;
    }
    const productImages = product.image
        ? [product.image, product.image, product.image]
        : ["/placeholder.png", "/placeholder.png", "/placeholder.png"];


    const specifications = [
        {feature: "Motor Power", value: "100W", highlight: true},
        {feature: "Maximum Speed", value: "850 SPM", highlight: true},
        {feature: "Weight", value: "7.2 kg"},
        {feature: "Dimensions", value: "45 × 22 × 35 cm"},
        {feature: "Built-in Stitches", value: "200+"},
        {feature: "Needle Positions", value: "Variable"},
        {feature: "Bobbin System", value: "Drop-in"},
        {feature: "Free Arm", value: "Yes"},
        {feature: "Automatic Threader", value: "Yes"},
        {feature: "LED Lighting", value: "Dual LED"},
        {feature: "Warranty", value: "2 Years"},
    ];

    const recommendedProducts = pmtProducts
        .filter((p) => p.category === category && p.id !== product.id)
        .slice(0, 4);

    const handleSubscribe = () => {
        toast.success("Subscription request received!", {
            description: "We'll notify you about exclusive deals and updates.",
        });
    };

    return (
        <div className="min-h-screen bg-background">

            <section className="py-8 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

                        <motion.div
                            initial={{opacity: 0, x: -30}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6}}
                        >
                            <ImageGallery images={productImages} productName={product.name}/>
                        </motion.div>

                        <div className="space-y-8 lg:sticky lg:top-8">
                            <ProductHeader
                                name={t(product.name)}
                                subtitle={`Category: ${product.categoryHeader}`}
                            />

                            <ProductDescription
                                description={`${t(product.name)}.`}
                            />

                            <ActionButtons onSubscribe={handleSubscribe}/>
                        </div>
                    </div>
                </div>
            </section>

            {/*<TechnicalSpecs specifications={specifications}/>*/}

            {/*<RecommendedProducts products={recommendedProducts}/>*/}
        </div>
    );
};

export default Detail;
