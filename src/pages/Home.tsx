import {Link, useLocation, useParams} from 'react-router-dom';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardFooter} from '@/components/ui/card';
import {ArrowRight, CheckCircle2} from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

import {useTranslation} from "react-i18next";
import {partners} from "@/data/partners.ts";
import {featuredProducts} from "@/data/products.ts";
import {clients} from "@/data/clients.ts";
import {news} from "@/data/news.ts";
import {useState} from "react";
import Empty from "@/components/elements/Empty.tsx";
import HeroSlider from "@/components/HeroSlider.tsx";
import LinkWrapper from "@/components/elements/LinkWrapper.tsx";


const Home = () => {
    const {pathname} = useLocation();
    const lang = pathname.split("/")[1];
    const {t} = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const filteredProducts = selectedCategory ? featuredProducts.filter(p => p.category === selectedCategory) : featuredProducts;

    return (
        <div className="w-full">
            <HeroSlider t={t} lang={lang}/>

            <section className="py-16 bg-secondary">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">{t("ourPartners")}</h2>
                    <Carousel
                        opts={{
                            align: 'start',
                            loop: true,
                        }}
                        className="w-full max-w-5xl mx-auto"
                    >
                        <CarouselContent>
                            {partners.map((partner, index) => (
                                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
                                    <div className="p-2">
                                        <div
                                            className={`flex items-center justify-center p-6 bg-card rounded-lg border hover:shadow-md transition-shadow cursor-pointer h-auto
                                            ${selectedCategory === partner.category ? "border-primary" : ""}`}
                                            onClick={() => setSelectedCategory(partner.category || null)}
                                        >
                                            <div className="w-[250px] h-[70px] flex items-center justify-center">
                                                <img
                                                    src={partner.logo}
                                                    alt="partner logo"
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious/>
                        <CarouselNext/>
                    </Carousel>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-3xl font-bold">{t("featuredProducts")}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {selectedCategory ? (
                        filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                                    <CardContent className="p-0">
                                        <LinkWrapper
                                            navigateType={product.navigateType}
                                            navigate={product.navigate}
                                            lang={lang}
                                        >
                                            <div
                                                className="overflow-hidden rounded-t-lg bg-secondary">
                                                <img
                                                    width={600}
                                                    loading={"lazy"}
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="p-6">
                                                {/*<p className="text-sm text-muted-foreground mb-2">{product.category}</p>*/}
                                                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                                                {/*<p className="text-2xl font-bold text-primary">{product.price}</p>*/}
                                            </div>
                                        </LinkWrapper>
                                    </CardContent>

                                </Card>
                            ))
                        ) : (
                            <p className="text-center col-span-full text-muted-foreground">No products available for
                                this partner.</p>
                        )
                    ) : (
                        <Empty/>
                    )}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-secondary">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">{t("whyChoose")}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <CheckCircle2 className="h-12 w-12 text-primary mb-4"/>
                            <h3 className="font-semibold text-xl mb-2">{t("premiumQualityTitle")}</h3>
                            <p className="text-muted-foreground">
                                {t("premiumQualityDesc")}
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <CheckCircle2 className="h-12 w-12 text-primary mb-4"/>
                            <h3 className="font-semibold text-xl mb-2">{t("globalSupportTitle")}</h3>
                            <p className="text-muted-foreground">
                                {t("globalSupportDesc")}
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <CheckCircle2 className="h-12 w-12 text-primary mb-4"/>
                            <h3 className="font-semibold text-xl mb-2">{t("innovationTitle")}</h3>
                            <p className="text-muted-foreground">
                                {t("innovationDesc")}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">{t("ourClients")}</h2>
                    <Carousel
                        opts={{
                            align: 'start',
                            loop: true,
                        }}
                        className="w-full max-w-5xl mx-auto"
                    >
                        <CarouselContent>
                            {clients.map((client, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                                    <div className="p-2">
                                        <div
                                            className="flex flex-col items-center justify-center p-8 bg-card rounded-lg border">
                                            <div
                                                className="w-100 h-100 rounded-full flex items-center justify-center">
                                                <img src={client.logo} alt="pmt partner logos"/>
                                            </div>

                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious/>
                        <CarouselNext/>
                    </Carousel>
                </div>
            </section>


            <section className="py-16 bg-secondary">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">{t("latestNews")}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {news.map((article) => (
                            <Card key={article.id}>
                                <CardContent className="p-6">
                                    <video
                                        src={article.thumbnail}
                                        muted
                                        playsInline
                                        loop
                                        autoPlay
                                        className="w-full h-56 object-cover rounded-xl mb-6"
                                    />

                                    <p className="text-sm text-muted-foreground mb-2">{article.date}</p>
                                    <h3 className="font-semibold text-lg mb-3">{article.title}</h3>

                                </CardContent>
                                <CardFooter className="p-6 pt-0">
                                    <span className="text-gray-500">{article.hashTag}</span>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
