import {TOnlyPmtProducts, TPmtCategories, TPmtCategoriesFilter} from "@/utils/types.ts";

export const pmtCategories: TPmtCategories[] = [
    {
        code: 1,
        category: "ironing_equipment",
        name: "ГЛАДИЛЬНОЕ ОБОРУДОВАНИЕ"
    },
    {
        code: 2,
        category: "computerized_laser_machines",
        name: "КОМПЬЮТЕРИЗИРОВАННЫЕ ЛАЗЕРНЫЕ МАШИНЫ"
    },
    {
        code: 5,
        category: "automated_design",
        name: "АВТОМАТИЗИРОВАННОЕ ПРОЕКТИРОВАНИЕ"
    },
    {
        code: 7,
        category: "cutting_machines",
        name: "РАСКРОЙНЫЕ МАШИНЫ"
    },
    {
        code: 7,
        category: "press",
        name: "ПРЕС"
    },
    {
        code: 6,
        category: "auxiliary_machines",
        name: "ВСПОМОГАТЕЛЬНЫЕ МАШИНЫ"
    },
    {
        code: 3,
        category: "accessories_and_spare_parts",
        name: "АКСЕССУАРЫ И ЗАПАСНЫЕ ЧАСТИ"
    }
];

export const pmtCategoriesFilter: TPmtCategoriesFilter[] = [
    {
        name: "УТЮГ С ПАРАГЕНЕРАТОРОМ",
        category: "ironing_equipment",
        type: "generator_iron"
    },
    {
        name: "PMT-G3-13085L",
        category: "computerized_laser_machines",
        type: "PMT-G3-13085L"
    },
    {
        name: "PMT-TP-DM1812",
        category: "computerized_laser_machines",
        type: "PMT-TP-DM1812"
    },
    {
        name: "PMT-X7-10060SK-L-SJ",
        category: "computerized_laser_machines",
        type: "PMT-X7-10060SK-L-SJ"
    },
    {
        name: "УТЮГ",
        category: "accessories_and_spare_parts",
        type: "iron"
    },
    {
        name: "PMT-DN7",
        category: "automated_design",
        type: "PMT-DN7"
    },
    {
        name: "WS-230/G2S",
        category: "automated_design",
        type: "WS-230/G2S"
    },
    {
        name: "WS-230B",
        category: "automated_design",
        type: "WS-230B"
    },
    {
        name: "GETONAGAIN CAD SYSTEM",
        category: "automated_design",
        type: "GETONAGAIN CAD SYSTEM",
        navigate: "https://www.raiseagaintech.com/Application/Automotive/Interior_Others/&id=109"
    },
    {
        name: "MAX-SQ1",
        category: "auxiliary_machines",
        type: "MAX-SQ1"
    },
    {
        name: "PMT-T20S",
        category: "auxiliary_machines",
        type: "PMT-T20S"
    },
    {
        name: "PMT-10S",
        category: "auxiliary_machines",
        type: "PMT-10S"
    },
    {
        name: "MAX-100EZ",
        category: "auxiliary_machines",
        type: "MAX-100EZ"
    },
    {
        name: "MAX-900A/B",
        category: "cutting_machines",
        type: "MAX-900A/B"
    },
    {
        name: "MAX-980-QD",
        category: "cutting_machines",
        type: "MAX-980-QD"
    },
    {
        name: "MAX-980D",
        category: "cutting_machines",
        type: "MAX-980D"
    },
    {
        name: "PMT-T911",
        category: "cutting_machines",
        type: "PMT-T911"
    },
    {
        name: "PMT-T103-10/750w",
        category: "cutting_machines",
        type: "PMT-T103-10/750w"
    },
    {
        name: "Прямострочка",
        category: "accessories_and_spare_parts",
        type: "straight_stitch"
    },
    {
        name: "Оверлог",
        category: "accessories_and_spare_parts",
        type: "overlock"
    },
    {
        name: "Каттер",
        category: "accessories_and_spare_parts",
        type: "cutting"
    }
]

// MAX-980-QD
// MAX-980D
// PMT-T911
// PMT-T103-10/750w
export const pmtProducts: TOnlyPmtProducts[] = [
    {
        id: 1,
        name: "Утюг с паровым генератором PMT-2035",
        category: "generator_iron", // pmtCategoriesFilter.type teng
        categoryHeader: "ironing-equipment", // pmtCategoriesFilter.category teng
        image: "/ironing_equipment_1.jpg"
    },
    {
        id: 2,
        name: "Парогенратор с двумя утюгами PMT-BK02/03/04",
        category: "generator_iron",
        categoryHeader: "ironing-equipment"
    },
    {
        id: 3,
        name: "Автоматический парогенратор PMT-BK20/30/40/60/80/100",
        category: "generator_iron",
        categoryHeader: "ironing-equipment"
    },
    {
        id: 4,
        name: "PMT-G3-13085L",
        category: "PMT-G3-13085L",
        categoryHeader: "computerized-laser-machines"
    },
    {
        id: 5,
        name: "PMT-TP-DM1812",
        category: "PMT-TP-DM1812",
        categoryHeader: "computerized-laser-machines"
    },
    {
        id: 6,
        name: "PMT-X7-10060SK-L-SJ",
        category: "PMT-X7-10060SK-L-SJ",
        categoryHeader: "computerized-laser-machines"
    },
    {
        id: 7,
        name: "PMT-0010",
        category: "iron",
        categoryHeader: "accessories-and-spare-parts"
    },
    {
        id: 8,
        name: "PMT-1000",
        category: "iron",
        categoryHeader: "accessories-and-spare-parts"
    },
    {
        id: 9,
        name: "PMT-0001",
        category: "iron",
        categoryHeader: "accessories-and-spare-parts"
    },
    {
        id: 10,
        name: "PMT-B-200",
        category: "iron",
        categoryHeader: "accessories-and-spare-parts"
    },
    {
        id: 11,
        name: "PMT-DN-7",
        category: "PMT-DN7",
        categoryHeader: "automated_design"
    },
    {
        id: 12,
        name: "MAX-SQ1",
        category: "MAX-SQ1",
        categoryHeader: "auxiliary-machines"
    },
    {
        id: 13,
        name: "PMT-T20S",
        category: "PMT-T20S",
        categoryHeader: "auxiliary-machines"
    },
    {
        id: 14,
        name: "PMT-10S",
        category: "PMT-10S",
        categoryHeader: "auxiliary-machines"
    },
    {
        id: 15,
        name: "MAX-100EZ",
        category: "MAX-100EZ",
        categoryHeader: "auxiliary-machines"
    },
    {
        id: 16,
        name: "MAX-900A/B",
        category: "MAX-900A/B",
        categoryHeader: "cutting-machines"
    },
    {
        id: 17,
        name: "MAX-980-QD",
        category: "MAX-980-QD",
        categoryHeader: "cutting-machines"
    },
    {
        id: 18,
        name: "MAX-980D",
        category: "MAX-980D",
        categoryHeader: "cutting-machines"
    },
    {
        id: 19,
        name: "PMT-T911",
        category: "PMT-T911",
        categoryHeader: "cutting-machines"
    },
    {
        id: 20,
        name: "PMT-T103-10/750w",
        category: "PMT-T103-10/750w",
        categoryHeader: "cutting-machines"
    },
    {
        id: 21,
        name: "1",
        category: "straight_stitch",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/1.png"
    },
    {
        id: 22,
        name: "2",
        category: "straight_stitch",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/2.png"
    },
    {
        id: 23,
        name: "3",
        category: "straight_stitch",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/3.png"
    },
    {
        id: 24,
        name: "4",
        category: "straight_stitch",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/4.png"
    },
    {
        id: 25,
        name: "5",
        category: "straight_stitch",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/5.png"
    },
    {
        id: 26,
        name: "6",
        category: "straight_stitch",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/6.png"
    },
    {
        id: 27,
        name: "12",
        category: "straight_stitch",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/12.png"
    },
    {
        id: 28,
        name: "16",
        category: "straight_stitch",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/16.png"
    },
    {
        id: 29,
        name: "17",
        category: "straight_stitch",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/17.png"
    },
    {
        id: 30,
        name: "11",
        category: "overlock",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/11.png"
    },
    {
        id: 31,
        name: "15",
        category: "overlock",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/15.png"
    },
    {
        id: 32,
        name: "13",
        category: "overlock",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/13.png"
    },
    {
        id: 33,
        name: "8",
        category: "cutting",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/8.png"
    },
    {
        id: 34,
        name: "10",
        category: "cutting",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/10.png"
    },
    {
        id: 35,
        name: "18",
        category: "cutting",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/18.png"
    },
    {
        id: 36,
        name: "20",
        category: "cutting",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/20.png"
    },
    {
        id: 37,
        name: "25",
        category: "cutting",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/25.png"
    },
    {
        id: 38,
        name: "28",
        category: "cutting",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/28.png"
    },
    {
        id: 39,
        name: "9",
        category: "cutting",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/9.png"
    },
    {
        id: 40,
        name: "19",
        category: "cutting",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/19.png"
    },
    {
        id: 41,
        name: "21",
        category: "cutting",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/21.png"
    },
    {
        id: 42,
        name: "22",
        category: "cutting",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/22.png"
    },
    {
        id: 43,
        name: "23",
        category: "cutting",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/23.png"
    },
    {
        id: 44,
        name: "26",
        category: "cutting",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/26.png"
    },
]
