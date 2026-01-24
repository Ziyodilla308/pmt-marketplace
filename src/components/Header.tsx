import {useEffect, useRef, useState} from 'react';
import {Link, useLocation, useNavigate, useParams} from 'react-router-dom';
import {Menu, ChevronDown} from 'lucide-react';
import {Button} from './ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';
import {Sheet, SheetContent, SheetTrigger} from './ui/sheet';
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectValue} from './ui/select';
import {SelectTrigger} from "@/components/ui/select.tsx";
import {LanguageCode, languages} from "@/utils/types.ts";
import {getLocalItem, setLocalItem} from "@/utils/persist-storage.ts";
import i18n from "@/i18n.ts";
import {ThemeSwitcher} from "@/components/elements/ThemeSwitcher.tsx";
import {useTranslation} from "react-i18next";
import {pmtCategories} from "@/data/pmtProducts.ts";


const Header = () => {
    const savedLang = getLocalItem("LANGUAGE");

    const initialLang: LanguageCode =
        savedLang === "ru" || savedLang === "uz" || savedLang === "en"
            ? savedLang
            : "ru";

    
    const {t} = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const {lang} = useParams<{ lang: LanguageCode }>();
    const navigate = useNavigate();
    const pathname = useLocation();
    const l = pathname.pathname.split("/")[1];
    const [selectedLanguageCode, setSelectedLanguageCode] =
        useState<LanguageCode>(initialLang);

    const handleLanguageSelect = (langCode: LanguageCode) => {
        setSelectedLanguageCode(langCode);
        i18n.changeLanguage(langCode);
        setLocalItem("LANGUAGE", langCode);
        navigate(`/${langCode}`);
    };

    useEffect(() => {
        if (!lang) return;

        if (lang !== i18n.language) {
            i18n.changeLanguage(lang);
            setSelectedLanguageCode(lang);
            setLocalItem("LANGUAGE", lang);
        }
    }, [lang]);

    useEffect(() => {
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    return (
        <header className="border-b bg-card sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex items-center space-x-2">
                        <img src="/pmt_logo_no_bg.png" alt="PMT logo" width={150} height={100}/>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link
                            to={`/${l}`}
                            className="text-foreground hover:text-primary transition-colors"
                        >
                            {t("home")}
                        </Link>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="gap-1">
                                    {t("catalog")} <ChevronDown className="h-4 w-4"/>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-64 bg-popover z-50">
                                {pmtCategories.map((category) => (
                                    <DropdownMenuItem key={category.category} asChild>
                                        <Link to={`/${l}/categories/${category.category}`} className="cursor-pointer">
                                            {category.name}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/*<Link*/}
                        {/*    to={`/${l}/products`}*/}
                        {/*    className="text-foreground hover:text-primary transition-colors"*/}
                        {/*>*/}
                        {/*    {t("products")}*/}
                        {/*</Link>*/}
                        <Link
                            to={`/${l}/contact`}
                            className="text-foreground hover:text-primary transition-colors"
                        >
                            {t("contact")}
                        </Link>
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <Select
                            value={selectedLanguageCode}
                            onValueChange={(v) => handleLanguageSelect(v as LanguageCode)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Languages"/>
                            </SelectTrigger>

                            <SelectContent>
                                <SelectGroup>
                                    {languages.map((l) => (
                                        <SelectItem
                                            key={l.code}
                                            value={l.code}
                                        >
                                            {l.name}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <ThemeSwitcher/>
                    </div>

                    {/* Mobile Menu */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6"/>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-80">
                            <nav className="flex flex-col space-y-4 mt-8">
                                <Link
                                    to="/"
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                >
                                    Home
                                </Link>
                                <div className="space-y-2">
                                    <p className="font-semibold text-sm text-muted-foreground">Categories</p>
                                    {pmtCategories.map((category) => (
                                        <Link
                                            key={category.name}
                                            to={`/${l}/categories/${category.category}`}
                                            onClick={() => setIsOpen(false)}
                                            className="block text-sm hover:text-primary transition-colors pl-2"
                                        >
                                            {category.name}
                                        </Link>
                                    ))}
                                </div>
                                <Link
                                    to="/products"
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                >
                                    Products
                                </Link>
                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                >
                                    Contact
                                </Link>
                                <div className="pt-4 space-y-2">

                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Header;
