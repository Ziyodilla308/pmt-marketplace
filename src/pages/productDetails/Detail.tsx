import {TechnicalSpecs} from "@/pages/productDetails/TechnicalSpecs.tsx";
import {RecommendedProducts} from "@/pages/productDetails/RecommendedProducts.tsx";
import {motion} from "framer-motion";
import {toast} from "sonner";

import {ProductHeader} from "@/pages/productDetails/ProductHeader.tsx";
import {ProductDescription} from "@/pages/productDetails/ProductDescription.tsx";
import {ImageGallery} from "@/pages/productDetails/ImageGallery.tsx";
import {ActionButtons} from "@/pages/productDetails/ActionButtons.tsx";

const productImages = [];


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

const recommendedProducts = [
    {
        id: "1",
        name: "CloudStitch Lightweight",
        image: "",
        price: "$299",
        rating: 4.5,
        reviewCount: 234,
    },
    {
        id: "2",
        name: "RoseThread Mini",
        image: "",
        price: "$149",
        rating: 4.8,
        reviewCount: 512,
    },
    {
        id: "3",
        name: "IronForge Industrial",
        image: "",
        price: "$899",
        rating: 4.9,
        reviewCount: 89,
    },
    {
        id: "4",
        name: "Heritage Classic",
        image: "",
        price: "$549",
        rating: 4.7,
        reviewCount: 156,
    },
];

const Detail = () => {
    const handleSubscribe = () => {
        toast.success("Subscription request received!", {
            description: "We'll notify you about exclusive deals and updates.",
        });
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="py-8 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                        {/* Left: Image Gallery */}
                        <motion.div
                            initial={{opacity: 0, x: -30}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6}}
                        >
                            <ImageGallery
                                images={productImages}
                                productName="StitchMaster Pro X850"
                            />
                        </motion.div>

                        {/* Right: Product Info */}
                        <div className="space-y-8 lg:sticky lg:top-8">
                            <ProductHeader
                                name="StitchMaster Pro X850"
                                subtitle="Professional Computerized Sewing Machine"
                                rating={4.8}
                                reviewCount={1247}
                            />

                            <ProductDescription
                                description="Experience the perfect blend of power and precision with the StitchMaster Pro X850. Designed for both passionate hobbyists and professional seamstresses, this machine delivers exceptional stitch quality with whisper-quiet operation. The intuitive touchscreen interface makes selecting from over 200 built-in stitches effortless."
                            />

                            <ActionButtons
                                price="$499"
                                originalPrice="$629"
                                onSubscribe={handleSubscribe}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <TechnicalSpecs specifications={specifications}/>

            <RecommendedProducts products={recommendedProducts}/>


        </div>
    );
};

export default Detail;