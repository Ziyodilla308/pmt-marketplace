import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {ChevronLeft, ChevronRight, ZoomIn} from "lucide-react";

interface ImageGalleryProps {
    images: string[];
    productName: string;
}

export const ImageGallery = ({images, productName}: ImageGalleryProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);

    const nextImage = () => {
        setSelectedIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div
                className="relative aspect-square bg-gradient-subtle rounded-2xl overflow-hidden shadow-card group cursor-zoom-in"
                onClick={() => setIsZoomed(!isZoomed)}
            >
                <AnimatePresence mode="wait">
                    <motion.img
                        key={selectedIndex}
                        src={images[selectedIndex]}
                        alt={`${productName} - View ${selectedIndex + 1}`}
                        initial={{opacity: 0, scale: 0.95}}
                        animate={{
                            opacity: 1,
                            scale: isZoomed ? 1.5 : 1,
                        }}
                        exit={{opacity: 0, scale: 0.95}}
                        transition={{duration: 0.3}}
                        className="w-full h-full object-contain p-8 transition-transform duration-500"
                    />
                </AnimatePresence>

                {/* Zoom indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-background/80 backdrop-blur-sm rounded-full p-2 shadow-soft">
                        <ZoomIn className="w-5 h-5 text-foreground"/>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 shadow-soft opacity-0 group-hover:opacity-100 transition-all hover:bg-background hover:scale-110"
                >
                    <ChevronLeft className="w-5 h-5 text-foreground"/>
                </button>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 shadow-soft opacity-0 group-hover:opacity-100 transition-all hover:bg-background hover:scale-110"
                >
                    <ChevronRight className="w-5 h-5 text-foreground"/>
                </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-3 justify-center">
                {images.map((image, index) => (
                    <motion.button
                        key={index}
                        onClick={() => setSelectedIndex(index)}
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        className={`relative w-20 h-20 rounded-xl overflow-hidden transition-all duration-200 ${
                            index === selectedIndex
                                ? "ring-2 ring-primary ring-offset-2 shadow-card"
                                : "opacity-60 hover:opacity-100 shadow-soft"
                        }`}
                    >
                        <img
                            src={image}
                            alt={`${productName} thumbnail ${index + 1}`}
                            className="w-full h-full object-cover bg-muted"
                        />
                    </motion.button>
                ))}
            </div>
        </div>
    );
};
