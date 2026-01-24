import {Star} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {useTranslation} from "react-i18next";

interface ProductHeaderProps {
    name: string;

    subtitle?: string;
}

export const ProductHeader = ({name, subtitle}: ProductHeaderProps) => {
    const {t} = useTranslation();
    return (
        <div className="space-y-4">
            <Badge variant="secondary" className="text-xs font-medium tracking-wider uppercase">
                {t("newArrival")}
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {name}
            </h1>
        </div>
    );
};
