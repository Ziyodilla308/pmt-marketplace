import {motion} from "framer-motion";
import {Check} from "lucide-react";

interface ProductDescriptionProps {
    description: string;
}

export const ProductDescription = ({description}: ProductDescriptionProps) => {
    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.2}}
            className="space-y-6"
        >
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">About This Machine</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                    {description}
                </p>
            </div>

        </motion.div>
    );
};
