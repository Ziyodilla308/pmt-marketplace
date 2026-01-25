import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Label} from "@/components/ui/label";
import {Card, CardContent} from "@/components/ui/card";
import {Send, Sparkles, User, Phone, Mail, Building2, FileText} from "lucide-react";
import {useTranslation} from "react-i18next";
import {useFormStore} from "@/store/subscribe.ts";
import {useForm} from "react-hook-form";
import {formSchema, FormSchemaType} from "@/schema/subscribeFormSchema.ts";
import {zodResolver} from "@hookform/resolvers/zod";

const SubsCribe = () => {
    const {t} = useTranslation();


    const {submitForm, loading, success, error} = useFormStore();

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
    });

    const onFormSubmit = async (data: FormSchemaType) => {
        await submitForm(data);
        if (!error) reset();
    };

    return (
        <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-12 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-primary"/>
                        <span className="text-sm font-medium text-primary">{t("stayConnected")}</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
                        {t("subscribe")}
                        <span className="text-primary"> {t("amazing")}</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("subscribeText")}</p>
                </div>

                <Card className="border-1 border-gray-800 shadow-md bg-card/80 backdrop-blur-sm animate-scale-in">
                    <CardContent className="p-8 sm:p-10">
                        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2 group">
                                    <Label htmlFor="fullName"
                                           className="text-foreground font-medium flex items-center gap-2">
                                        <User className="w-4 h-4 text-primary"/>
                                        {t("fullName")}
                                    </Label>
                                    <Input
                                        id="fullName"
                                        {...register("fullName")}
                                        className="h-12 border-border/50 focus:border-primary transition-all duration-300 bg-background/50"
                                    />
                                    {errors.fullName &&
                                        <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
                                </div>


                                <div className="space-y-2 group">
                                    <Label htmlFor="phone"
                                           className="text-foreground font-medium flex items-center gap-2">
                                        <Phone className="w-4 h-4 text-primary"/>
                                        {t("phoneNumber")}
                                    </Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        {...register("phone")}

                                        className="h-12 border-border/50 focus:border-primary transition-all duration-300 bg-background/50"
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                                </div>


                                <div className="space-y-2 group">
                                    <Label htmlFor="email"
                                           className="text-foreground font-medium flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-primary"/>
                                        {t("email")}
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        {...register("email")}

                                        className="h-12 border-border/50 focus:border-primary transition-all duration-300 bg-background/50"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                                </div>


                                <div className="space-y-2 group">
                                    <Label htmlFor="company"
                                           className="text-foreground font-medium flex items-center gap-2">
                                        <Building2 className="w-4 h-4 text-primary"/>
                                        {t("companyName")}
                                    </Label>
                                    <Input
                                        id="company"
                                        {...register("company")}

                                        className="h-12 border-border/50 focus:border-primary transition-all duration-300 bg-background/50"
                                    />
                                    {errors.company && <p className="text-red-500 text-sm">{errors.company.message}</p>}
                                </div>
                            </div>

                
                            <div className="space-y-2">
                                <Label htmlFor="message"
                                       className="text-foreground font-medium flex items-center gap-2">
                                    <FileText className="w-4 h-4 text-primary"/>
                                    {t("tellUs")}
                                </Label>
                                <Textarea
                                    id="message"
                                    {...register("message")}

                                    className="min-h-[120px] border-border/50 focus:border-primary transition-all duration-300 bg-background/50 resize-none"
                                />
                                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                            </div>

                            {error && <p className="text-red-500 text-center">{error}</p>}
                            {success && <p className="text-green-500 text-center">Form submitted successfully!</p>}

                            <div className="pt-4">
                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full sm:w-auto px-8 h-14 text-base font-semibold bg-primary hover:bg-primary-hover text-primary-foreground shadow-button hover:shadow-button-hover transition-all duration-300 group"
                                >
                                    {t("subscribeBtn")}
                                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1"/>
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
