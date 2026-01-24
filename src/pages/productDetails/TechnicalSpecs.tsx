import { motion } from "framer-motion";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface Specification {
    feature: string;
    value: string;
    highlight?: boolean;
}

interface TechnicalSpecsProps {
    specifications: Specification[];
}

export const TechnicalSpecs = ({ specifications }: TechnicalSpecsProps) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="py-16"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                        Technical Specifications
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Every detail engineered for perfection
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-card rounded-2xl shadow-card overflow-hidden border border-border">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-muted/50">
                                    <TableHead className="text-foreground font-semibold text-base py-4">Feature</TableHead>
                                    <TableHead className="text-foreground font-semibold text-base py-4 text-right">Specification</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {specifications.map((spec, index) => (
                                    <TableRow
                                        key={index}
                                        className={`transition-colors hover:bg-muted/30 ${
                                            spec.highlight ? "bg-primary/5" : ""
                                        }`}
                                    >
                                        <TableCell className="font-medium text-foreground py-4">
                                            {spec.feature}
                                        </TableCell>
                                        <TableCell className={`text-right py-4 ${
                                            spec.highlight
                                                ? "text-primary font-semibold"
                                                : "text-muted-foreground"
                                        }`}>
                                            {spec.value}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};
