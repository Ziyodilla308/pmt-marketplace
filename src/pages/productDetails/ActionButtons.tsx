import {motion} from "framer-motion";
import {Button} from "@/components/ui/button";
import {Heart, Share2, ShoppingCart} from "lucide-react";

interface ActionButtonsProps {
    price: string;
    originalPrice?: string;
    onSubscribe: () => void;
}

export const ActionButtons = ({price, originalPrice, onSubscribe}: ActionButtonsProps) => {
    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.4}}
            className="space-y-6"
        >
            {/* Price */}
            <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-foreground">{price}</span>
                {originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">{originalPrice}</span>
                )}
                {originalPrice && (
                    <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
            Save 20%
          </span>
                )}
            </div>

            {/* Primary Actions */}
            <div className="flex flex-col gap-3">
                <Button
                    variant="default"
                    size="lg"
                    onClick={onSubscribe}
                    className="w-full group"
                >
                    <ShoppingCart className="w-5 h-5 mr-2 transition-transform group-hover:scale-110"/>
                    Subscribe Now
                </Button>

                <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                >
                    Add to Cart
                </Button>
            </div>

            {/* Secondary Actions */}
            <div className="flex gap-3">
                <Button variant="ghost" size="default" className="flex-1">
                    <Heart className="w-5 h-5 mr-2"/>
                    Save
                </Button>
                <Button variant="ghost" size="default" className="flex-1">
                    <Share2 className="w-5 h-5 mr-2"/>
                    Share
                </Button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 pt-4 border-t border-border">
                <div className="text-center">
                    <div className="text-sm font-medium text-foreground">Free Shipping</div>
                    <div className="text-xs text-muted-foreground">On orders $99+</div>
                </div>
                <div className="h-8 w-px bg-border"/>
                <div className="text-center">
                    <div className="text-sm font-medium text-foreground">2 Year Warranty</div>
                    <div className="text-xs text-muted-foreground">Full coverage</div>
                </div>
                <div className="h-8 w-px bg-border"/>
                <div className="text-center">
                    <div className="text-sm font-medium text-foreground">30-Day Returns</div>
                    <div className="text-xs text-muted-foreground">No questions asked</div>
                </div>
            </div>
        </motion.div>
    );
};
