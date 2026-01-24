import {Link, useLocation, useParams} from 'react-router-dom';
import {Button} from '@/components/ui/button.tsx';
import {Card, CardContent, CardFooter} from '@/components/ui/card.tsx';
import {ArrowRight, CheckCircle2} from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel.tsx';

import {useTranslation} from "react-i18next";
import {partners} from "@/data/mock/partners.ts";
import {featuredProducts} from "@/data/mock/products.ts";
import {clients} from "@/data/mock/clients.ts";
import {news} from "@/data/mock/news.ts";
import {useState} from "react";
import Empty from "@/components/elements/Empty.tsx";
import HeroSlider from "@/components/HeroSlider.tsx";
import LinkWrapper from "@/components/elements/LinkWrapper.tsx";
import Subscribe from "@/pages/home/Subscribe.tsx";


const Home = () => {
    const {pathname} = useLocation();
    const lang = pathname.split("/")[1];
    const {t} = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const filteredProducts = selectedCategory ? featuredProducts.filter(p => p.category === selectedCategory) : featuredProducts;



    return (
        <div className="w-full">
            <HeroSlider t={t} lang={lang}/>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
                        {t("ourPartners")}
                    </h2>

                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full max-w-6xl mx-auto"
                    >
                        <CarouselContent>
                            {partners.map((partner, index) => {
                                const isActive = selectedCategory === partner.category;

                                return (
                                    <CarouselItem
                                        key={index}
                                        className="md:basis-1/3 lg:basis-1/5"
                                    >
                                        <div className="p-3">
                                            <button
                                                onClick={() =>
                                                    setSelectedCategory(partner.category || null)
                                                }
                                                className={`
                                        group relative w-full h-full rounded-2xl border bg-card p-6
                                        transition-all duration-300 ease-out
                                        hover:-translate-y-1 hover:shadow-xl
                                        focus:outline-none
                                        ${
                                                    isActive
                                                        ? "border-primary shadow-lg ring-2 ring-primary/30"
                                                        : "border-border"
                                                }
                                    `}
                                            >
                                                {isActive && (
                                                    <div className="absolute inset-0 rounded-2xl bg-primary/5 blur-xl"></div>
                                                )}

                                                <div className="relative z-10 flex items-center justify-center h-[70px]">
                                                    <img
                                                        src={partner.logo}
                                                        alt="partner logo"
                                                        className={`
                                                max-h-full object-contain transition-all duration-300
                                                group-hover:scale-105
                                                ${
                                                            isActive
                                                                ? "opacity-100"
                                                                : "opacity-70 group-hover:opacity-100"
                                                        }
                                            `}
                                                    />
                                                </div>
                                            </button>
                                        </div>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>

                        <CarouselPrevious className="hidden md:flex" />
                        <CarouselNext className="hidden md:flex" />
                    </Carousel>
                </div>
            </section>


            {/* Featured Products */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-3xl font-bold">{t("featuredProducts")}</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {selectedCategory ? (
                            filteredProducts.length > 0 ? (
                                filteredProducts.map((product) => (
                                    <Card
                                        key={product.id}
                                        className="group h-full overflow-hidden rounded-xl border bg-background
                               transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                    >
                                        <CardContent className="p-0 h-full">
                                            <LinkWrapper
                                                navigateType={product.navigateType}
                                                navigate={product.navigate}
                                                lang={lang}
                                            >
                                                {/* IMAGE */}
                                                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                                                    <img
                                                        loading="lazy"
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="h-full w-full object-cover transition-transform duration-500
                                               group-hover:scale-110"
                                                    />

                                                    {/* gradient overlay */}
                                                    <div
                                                        className="absolute inset-0 bg-gradient-to-t from-black/40
                                               via-black/10 to-transparent opacity-0
                                               transition-opacity duration-300 group-hover:opacity-100"
                                                    />
                                                </div>

                                                {/* CONTENT */}
                                                <div className="flex flex-col justify-between p-6">
                                                    <h3
                                                        className="text-lg font-semibold leading-tight
                                               transition-colors duration-300 group-hover:text-primary"
                                                    >
                                                        {product.name}
                                                    </h3>
                                                </div>
                                            </LinkWrapper>
                                        </CardContent>
                                    </Card>
                                ))
                            ) : (
                                <p className="col-span-full text-center text-muted-foreground">
                                    No products available for this partner.
                                </p>
                            )
                        ) : (
                            <Empty />
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

            <section className="py-16" id="subscribe-section">
                <Subscribe />
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
                                    <h3 className="font-semibold text-lg mb-3">{article.description}</h3>

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
