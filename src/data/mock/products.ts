import product1 from '/public/23.webp';
import product2 from '/public/12.webp';
import product3 from '/public/18.webp';
import product4 from '/public/1000112.webp';
import product5 from '/public/100113.jpg';
import product6 from '/public/2.webp';
import product7 from '/public/pless_machine_no_bg.png';
import product8 from '/public/5.webp';
import product9 from '/public/Cutting.png';
import product10 from '/public/PMT-DN7.png';
import product11 from '/public/MAX-900A_B.png';
import product12 from '/public/MAX-Y4060.png';
import product13 from '/public/PMT-T10S.png';
import product14 from '/public/PMT-0010.png';
import {TProducts} from "@/utils/types.ts";

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
        name: 'Оверлоки',
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
        name: 'Примострочная машины',
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
        name: 'КОМПЬЮТЕРИЗИРОВАННЫЕ ЛАЗЕРНЫЕ МАШИНЫ',
        category: 'pmt',
        price: '$3,799',
        image: product9,
        navigateType: "in",
        navigate: "/categories/computerized_laser_machines"
    },
    {
        id: 11,
        name: 'АВТОМАТИЗИРОВАННОЕ ПРОЕКТИРОВАНИЕ',
        category: 'pmt',
        price: '$3,799',
        image: product10,
        navigateType: "in",
        navigate: "/categories/automated_design"
    },
    {
        id: 12,
        name: 'РАСКРОЙНЫЕ МАШИНЫ',
        category: 'pmt',
        price: '$3,799',
        image: product11,
        navigateType: "in",
        navigate: "/categories/cutting_machines"
    },
    {
        id: 13,
        name: 'ПРЕС',
        category: 'pmt',
        price: '$3,799',
        image: product12,
        navigateType: "in",
        navigate: "/categories/press"
    },
    {
        id: 14,
        name: 'ВСПОМОГАТЕЛЬНЫЕ МАШИНЫ',
        category: 'pmt',
        price: '$3,799',
        image: product13,
        navigateType: "in",
        navigate: "/categories/auxiliary_machines"
    },
    {
        id: 15,
        name: 'АКСЕССУАРЫ И ЗАПАСНЫЕ ЧАСТИ',
        category: 'pmt',
        price: '$3,799',
        image: product14,
        navigateType: "in",
        navigate: "/categories/accessories_and_spare_parts"
    }
];
