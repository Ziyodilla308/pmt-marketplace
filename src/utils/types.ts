export type LanguageCode = "uz" | "ru" | "en";

export type DropdownItem = {
    name: string;
    code: LanguageCode;
}

export const languages: DropdownItem[] = [
    {name: "Uzbek", code: "uz"},
    {name: "Русскый", code: "ru"},
    {name: "English", code: "en"},
];

export type TClients = {
    name: string;
    logo: string;
}

export type TNews = {
    id: number | string;
    title: string;
    thumbnail: string;
    date: string;
    category: string;
    description: string;
    author?: {
        name: string;
    };
    hashTag: string;
}

export type TPartners = {
    name: string;
    logo: string;
    category: string;
}

export type TProducts = {
    id: number;
    name: string;
    category: string;
    price: string;
    image?: string;
    navigateType: "in" | "out";
    navigate?: string;
}

export type Product = {
    id: number;
    name: string;
    category: string;
    price: number;
    features: string[];
    image: string;
};

export type TPmtCategories = {
    code: number;
    category: string;
    name: string;
}

export type TPmtCategoriesFilter = {
    name: string;
    category: string;
    type: string;
    navigate?: string;
}

export type TOnlyPmtProducts = {
    id: number;
    name: string;
    category: string;
    categoryHeader: string;
    image?: string;
}
