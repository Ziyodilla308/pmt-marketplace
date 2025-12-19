import {useState} from "react"
import {Star} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Card} from "@/components/ui/card"

const product = {
    id: "1",
    name: "Industrial Pump Model X500",
    category: "Pumps",
    brand: "PMT Group",
    model: "X500",
    rating: 4,
    description:
        "High performance industrial pump designed for heavy duty operations in manufacturing and water treatment plants.",

    image: "/products/pump-main.png",
    images: [
        "/products/pump-1.png",
        "/products/pump-2.png",
        "/products/pump-3.png",
        "/products/pump-4.png",
    ],

    schematics: [
        "/products/schema-1.png",
        "/products/schema-2.png",
        "/products/schema-3.png",
        "/products/schema-4.png",
    ]
}

const ProductDetail = () => {
    const [activeImage, setActiveImage] = useState<string>(
        product.images?.[0] || product.image
    )

    const [activeSchema, setActiveSchema] = useState<string>(
        product.schematics?.[0]
    )

    const images = product.images?.length ? product.images : [product.image]
    const schematics = product.schematics || []

    return (
        <div className="min-h-screen bg-background py-12">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">

                {/* LEFT - IMAGES */}
                <div className="flex gap-6">
                    {/* Thumbnails */}
                    <div className="flex flex-col gap-3">
                        {images.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                onClick={() => setActiveImage(img)}
                                className={`w-20 h-20 object-contain cursor-pointer border rounded-md p-1 
                  ${img === activeImage ? "border-primary" : "border-muted"}`}
                            />
                        ))}
                    </div>

                    {/* Main Image */}
                    <div className="flex-1 flex items-center justify-center">
                        <img
                            src={activeImage}
                            className="max-h-[500px] w-full object-contain"
                        />
                    </div>
                </div>

                {/* RIGHT - INFO */}
                <div>
                    <h1 className="text-4xl font-bold mb-4">
                        {product.name}
                    </h1>

                    {/* Rating */}
                    <div className="flex items-center gap-1 text-yellow-500 mb-4">
                        {Array.from({length: 5}).map((_, i) => (
                            <Star
                                key={i}
                                className={
                                    i < (product.rating || 4)
                                        ? "fill-yellow-500"
                                        : ""
                                }
                            />
                        ))}
                        <span className="text-muted-foreground ml-2">
              ({product.rating}.0)
            </span>
                    </div>

                    <p className="text-muted-foreground text-lg mb-6">
                        {product.description}
                    </p>

                    <div className="space-y-2 mb-6">
                        <p><b>Category:</b> {product.category}</p>
                        <p><b>Brand:</b> {product.brand}</p>
                        <p><b>Model:</b> {product.model}</p>
                    </div>

                    <div className="flex gap-4">
                        <Button size="lg">Buy now</Button>
                        <Button size="lg" variant="outline">Contact</Button>
                    </div>
                </div>

            </div>

            {/* ================= SCHEMATICS BLOCK ================= */}

            <div className="container mx-auto px-4 mt-20">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    Technical Schematics
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {schematics.map((schema, i) => (
                        <Card
                            key={i}
                            onClick={() => setActiveSchema(schema)}
                            className={`p-4 cursor-pointer transition border
                ${activeSchema === schema
                                ? "border-primary shadow-lg"
                                : "border-muted"
                            }`}
                        >
                            <img
                                src={schema}
                                className="hover:scale-105 transition object-contain h-48 w-full"
                            />
                        </Card>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default ProductDetail
