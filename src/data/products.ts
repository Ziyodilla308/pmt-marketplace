import product1 from '/public/23.webp';
import product2 from '/public/12.webp';
import product3 from '/public/18.webp';
import product4 from '/public/1000112.webp';
import product5 from '/public/100113.jpg';
import product6 from '/public/2.webp';
import product7 from '/public/pless_machine_no_bg.png';
import product8 from '/public/19.webp';
import {Product, TProducts} from "@/utils/types.ts";

export const featuredProducts: TProducts[] = [
    {
        id: 1,
        name: 'Плоскошовный интерлок',
        category: 'shingling',
        price: '$2,999',
        image: product1,
        navigateType: "out",
        navigate: "https://shingling.com.tw/en/product-category/sl-700-series/"
    },
    {
        id: 2,
        name: 'Интерлок машины',
        category: 'shingling',
        price: '$4,499',
        image: product2,
        navigateType: "out",
        navigate: "https://shingling.com.tw/en/product-tag/interlock-machine-en/"
    },
    {
        id: 3,
        name: 'Закрепочная пуговичная машины',
        category: 'shingling',
        price: '$3,799',
        image: product3,
        navigateType: "out",
        navigate: "https://shingling.com.tw/en/product-category/sl-1900-series/"
    },
    {
        id: 4,
        name: 'Петельная машина',
        category: 'shingling',
        price: '$2,999',
        image: product4,
        navigateType: "out",
        navigate: "https://shingling.com.tw/en/product-category/sl-1790s-series/"
    },
    {
        id: 5,
        name: 'Двойная функция',
        category: 'shingling',
        price: '$4,499',
        image: product5,
        navigateType: "out",
        navigate: "https://shingling.com.tw/en/product-category/sl-1905a-series/"
    },
    {
        id: 6,
        name: 'Закрепочная пуговичная машины',
        category: 'shingling',
        price: '$3,799',
        image: product6,
        navigateType: "out",
        navigate: "https://shingling.com.tw/en/product-category/sl-898-series/"
    },
    {
        id: 7,
        name: 'Плессировочная машина',
        category: 'shingling',
        price: '$4,499',
        image: product7,
        navigateType: "out",
        navigate: "https://shingling.com.tw/en/product-category/sl-8800n-series/"
    },
    {
        id: 8,
        name: 'Закрепочная пуговичная машины',
        category: 'shingling',
        price: '$3,799',
        image: product8,
        navigateType: "out",
        navigate: "https://shingling.com.tw/en/product-category/sl-900-ii-series/"
    },
    {
        id: 9,
        name: 'УТЮГ С ПАРАГЕНЕРАТОРОМ',
        category: 'pmt',
        price: '$3,799',
        image: product8,
        navigateType: "in",
        navigate: "/categories/ironing_equipment"
    },
    {
        id: 10,
        name: 'PMT-T911',
        category: 'pmt',
        price: '$3,799',
        // image: product8,
        navigateType: "in",
        navigate: "/categories/cutting_machines"
    },
    {
        id: 11,
        name: 'Вертикальный нож для кройных работ PMT-T103-10',
        category: 'pmt',
        price: '$3,799',
        // image: product8,
        navigateType: "in",
        navigate: "/categories/cutting_machines"
    },
    {
        id: 12,
        name: 'Машина для распределения нитей PMT-T10S',
        category: 'pmt',
        price: '$3,799',
        // image: product8,
        navigateType: "in",
        navigate: "/categories/auxiliary_machines"
    },
    {
        id: 13,
        name: 'УТЮГ - PMT-0010',
        category: 'pmt',
        price: '$3,799',
        // image: product8,
        navigateType: "in",
        navigate: "/categories/accessories_and_spare_parts"
    },
    {
        id: 14,
        name: 'УТЮГ - PMT-1000',
        category: 'pmt',
        price: '$3,799',
        // image: product8,
        navigateType: "in",
        navigate: "/categories/accessories_and_spare_parts"
    },
    {
        id: 15,
        name: 'УТЮГ - PMT-0001',
        category: 'pmt',
        price: '$3,799',
        // image: product8,
        navigateType: "in",
        navigate: "/categories/accessories_and_spare_parts"
    },
    {
        id: 16,
        name: 'УТЮГ - PMT-B-200',
        category: 'pmt',
        price: '$3,799',
        // image: product8,
        navigateType: "in",
        navigate: "/categories/accessories_and_spare_parts"
    }
];



export const allProducts: Product[] = [
    {
        id: 1,
        name: 'PMT Industrial Pro',
        category: 'industrial',
        price: 2999,
        features: ['heavy-duty', 'automatic'],
        image: product1,
    },
    {
        id: 2,
        name: 'PMT Embroidery Master',
        category: 'embroidery',
        price: 4499,
        features: ['multi-head', 'computerized'],
        image: product2,
    },
    {
        id: 3,
        name: 'PMT Heavy Duty',
        category: 'industrial',
        price: 3799,
        features: ['heavy-duty'],
        image: product3,
    },
    {
        id: 4,
        name: 'PMT Standard Plus',
        category: 'industrial',
        price: 1999,
        features: ['automatic'],
        image: product1,
    },
    {
        id: 5,
        name: 'PMT Embroidery Lite',
        category: 'embroidery',
        price: 2999,
        features: ['computerized'],
        image: product2,
    },
    {
        id: 6,
        name: 'PMT Accessories Kit',
        category: 'accessories',
        price: 299,
        features: [],
        image: product3,
    },
];
