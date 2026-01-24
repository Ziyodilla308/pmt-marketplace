import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Sparkles, User, Phone, Mail, Building2, FileText } from "lucide-react";
import {useTranslation} from "react-i18next";

const SubsCribe = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        company: "",
        description: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setFormData({ name: "", phone: "", email: "", company: "", description: "" });
        }, 1500);
    };

    return (
        <section className="min-h-screen  py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

            <div className="absolute top-1/2 right-10 w-4 h-4 bg-primary rounded-full animate-pulse" />
            <div className="absolute top-1/4 left-10 w-3 h-3 bg-primary/60 rounded-full animate-pulse delay-300" />

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-12 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">{t("stayConnected")}</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
                        {t("subscribe")}
                        <span className="text-primary"> {t("amazing")}</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        {t("subscribeText")}
                    </p>
                </div>

                <Card className="border-1 border-gray-800 shadow-md bg-card/80 backdrop-blur-sm animate-scale-in">
                    <CardContent className="p-8 sm:p-10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2 group">
                                    <Label htmlFor="name" className="text-foreground font-medium flex items-center gap-2">
                                        <User className="w-4 h-4 text-primary" />
                                        {t("fullName")}
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="h-12 border-border/50 focus:border-primary transition-all duration-300 bg-background/50"
                                        required
                                    />
                                </div>

                                <div className="space-y-2 group">
                                    <Label htmlFor="phone" className="text-foreground font-medium flex items-center gap-2">
                                        <Phone className="w-4 h-4 text-primary" />
                                        {t("phoneNumber")}
                                    </Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 (555) 000-0000"
                                        className="h-12 border-border/50 focus:border-primary transition-all duration-300 bg-background/50"
                                        required
                                    />
                                </div>

                                <div className="space-y-2 group">
                                    <Label htmlFor="email" className="text-foreground font-medium flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-primary" />
                                        {t("email")}
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="h-12 border-border/50 focus:border-primary transition-all duration-300 bg-background/50"
                                        required
                                    />
                                </div>

                                <div className="space-y-2 group">
                                    <Label htmlFor="company" className="text-foreground font-medium flex items-center gap-2">
                                        <Building2 className="w-4 h-4 text-primary" />
                                        {t("companyName")}
                                    </Label>
                                    <Input
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Acme Inc."
                                        className="h-12 border-border/50 focus:border-primary transition-all duration-300 bg-background/50"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description" className="text-foreground font-medium flex items-center gap-2">
                                    <FileText className="w-4 h-4 text-primary" />
                                    {t("tellUs")}
                                </Label>
                                <Textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="What are you interested in? How can we help you?"
                                    className="min-h-[120px] border-border/50 focus:border-primary transition-all duration-300 bg-background/50 resize-none"
                                    rows={4}
                                />
                            </div>

                            <div className="pt-4">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full sm:w-auto px-8 h-14 text-base font-semibold bg-primary hover:bg-primary-hover text-primary-foreground shadow-button hover:shadow-button-hover transition-all duration-300 group"
                                >
                                    {t("subscribeBtn")}
                                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default SubsCribe;
