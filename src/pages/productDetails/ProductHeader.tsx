import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProductHeaderProps {
    name: string;
    rating: number;
    reviewCount: number;
    subtitle?: string;
}

export const ProductHeader = ({ name, rating, reviewCount, subtitle }: ProductHeaderProps) => {
    return (
        <div className="space-y-4">
            <Badge variant="secondary" className="text-xs font-medium tracking-wider uppercase">
                New Arrival
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {name}
            </h1>

            {subtitle && (
                <p className="text-xl text-muted-foreground font-light">
                    {subtitle}
                </p>
            )}

            <div className="flex items-center gap-3 pt-2">
                <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                            key={i}
                            className={`w-5 h-5 ${
                                i < Math.floor(rating)
                                    ? "fill-primary text-primary"
                                    : i < rating
                                        ? "fill-primary/50 text-primary"
                                        : "fill-muted text-muted"
                            }`}
                        />
                    ))}
                </div>
                <span className="text-lg font-semibold text-foreground">{rating.toFixed(1)}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{reviewCount.toLocaleString()} reviews</span>
            </div>
        </div>
    );
};
