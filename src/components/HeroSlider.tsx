import {useState, useEffect, useCallback} from "react"
import {motion, AnimatePresence} from "framer-motion"
import {Link} from "react-router-dom"
import {ArrowRight, ChevronLeft, ChevronRight} from "lucide-react"
import {Button} from "@/components/ui/button.tsx"
import first from '../../public/2.webp';

const HeroSlider = ({t, lang}) => {
    const slides = [
        {
            title: t("sl89"),
            highlight: t("pmt"),
            description: t("heroDescriptionOne"),
            image: first,
            video: "/vistavka.mp4",
        },
        {
            title: t("sl83"),
            highlight: t("pmt"),
            description: t("heroDescriptionTwo"),
            image: "/5.webp",
            video: "/vistavka-2.mp4",
        },
        {
            title: t("sl008"),
            highlight: t("pmt"),
            description: t("heroDescriptionThree"),
            image: "/1000005661.webp",
            video: "/vistavka-3.mp4",
        },
    ]

    const [current, setCurrent] = useState(0)

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length)
    }, [slides.length])

    const prevSlide = useCallback(() => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    }, [slides.length])

    const scrollSubscribeSection = () => {
        const el = document.getElementById("subscribe-section");
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    }


    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 10000)

        return () => clearInterval(interval)
    }, [nextSlide])


    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "ArrowRight") nextSlide()
            if (e.key === "ArrowLeft") prevSlide()
        }

        window.addEventListener("keydown", handleKey)
        return () => window.removeEventListener("keydown", handleKey)
    }, [nextSlide, prevSlide])

    const slide = slides[current]

    return (
        <section className="relative h-[900px] w-full overflow-hidden">
            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-background/60 backdrop-blur-lg p-4 hover:bg-background transition"
            >
                <ChevronLeft size={28}/>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-background/60 backdrop-blur-lg p-4 hover:bg-background transition"
            >
                <ChevronRight size={28}/>
            </button>

            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -50}}
                    transition={{duration: 0.8}}
                    className="absolute inset-0 w-full h-full flex items-center justify-center"
                >

                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src={slide.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                    />

                    <div
                        className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40"/>

                    <div
                        className="relative z-10 w-full max-w-6xl mx-auto px-6 flex items-center justify-between gap-10">
                        <div className="max-w-xl">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                                {slide.title}
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8">
                                {slide.description}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Button size="lg" onClick={scrollSubscribeSection}>
                                        {t("subscribeBtn")}
                                        <ArrowRight className="ml-2 h-5 w-5"/>
                                </Button>

                                <Button size="lg" variant="outline" asChild>
                                    <Link to={`/${lang}/contact`}>
                                        {t("heroContact")}
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <img
                            src={slide.image}
                            alt="Hero Visual"
                            className="w-[420px] h-auto object-contain"
                        />
                    </div>
                </motion.div>
            </AnimatePresence>
        </section>
    )
}

export default HeroSlider
