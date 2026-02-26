import {TOnlyPmtProducts, TPmtCategories, TPmtCategoriesFilter} from "@/utils/types.ts";

export const pmtCategories: TPmtCategories[] = [
    {
        code: 1,
        category: "ironing_equipment",
        name: "header.name1"
    },
    {
        code: 2,
        category: "computerized_laser_machines",
        name: "header.name2"
    },
    {
        code: 5,
        category: "automated_design",
        name: "header.name3"
    },
    {
        code: 7,
        category: "cutting_machines",
        name: "header.name4"
    },
    {
        code: 7,
        category: "press",
        name: "header.name5"
    },
    {
        code: 6,
        category: "auxiliary_machines",
        name: "header.name6"
    },
    {
        code: 3,
        category: "accessories_and_spare_parts",
        name: "header.name7"
    }
];

export const pmtCategoriesFilter: TPmtCategoriesFilter[] = [
    {
        name: "category_tr.name1",
        category: "ironing_equipment",
        type: "generator_iron"
    },
    {
        name: "category_tr.name2",
        category: "computerized_laser_machines",
        type: "PMT-G3-13085L"
    },
    {
        name: "category_tr.name3",
        category: "computerized_laser_machines",
        type: "PMT-TP-DM1812"
    },
    {
        name: "category_tr.name4",
        category: "computerized_laser_machines",
        type: "PMT-X7-10060SK-L-SJ"
    },
    {
        name: "category_tr.name5",
        category: "accessories_and_spare_parts",
        type: "iron"
    },
    {
        name: "category_tr.name6",
        category: "automated_design",
        type: "PMT-DN7"
    },
    {
        name: "category_tr.name7",
        category: "automated_design",
        type: "WS-230/G2S"
    },
    {
        name: "category_tr.name8",
        category: "automated_design",
        type: "WS-230B"
    },
    {
        name: "category_tr.name9",
        category: "automated_design",
        type: "GETONAGAIN CAD SYSTEM",
        navigate: "https://www.raiseagaintech.com/Application/Automotive/Interior_Others/&id=109"
    },
    {
        name: "category_tr.name10",
        category: "press",
        type: "MAX-F600"
    },
    {
        name: "category_tr.name11",
        category: "press",
        type: "MAX-Y4060-2"
    },
    {
        name: "category_tr.name12",
        category: "auxiliary_machines",
        type: "MAX-SQ1"
    },
    {
        name: "category_tr.name13",
        category: "auxiliary_machines",
        type: "PMT-T20S"
    },
    {
        name: "category_tr.name14",
        category: "auxiliary_machines",
        type: "PMT-10S"
    },
    {
        name: "category_tr.name15",
        category: "auxiliary_machines",
        type: "MAX-100EZ"
    },
    {
        name: "category_tr.name16",
        category: "cutting_machines",
        type: "MAX-900A/B"
    },
    {
        name: "category_tr.name17",
        category: "cutting_machines",
        type: "MAX-980-QD"
    },
    {
        name: "category_tr.name18",
        category: "cutting_machines",
        type: "PMT-T911"
    },
    {
        name: "category_tr.name19",
        category: "cutting_machines",
        type: "PMT-T103-10/750w"
    },
    {
        name: "category_tr.name20",
        category: "accessories_and_spare_parts",
        type: "straight_stitch"
    },
    {
        name: "category_tr.name21",
        category: "accessories_and_spare_parts",
        type: "overlock"
    },
    {
        name: "category_tr.name22",
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
        name: "iron.product1",
        category: "generator_iron", // pmtCategoriesFilter.type teng
        categoryHeader: "ironing-equipment", // pmtCategoriesFilter.category teng
        image: "/ironing_equipment_1.jpg"
    },
    {
        id: 2,
        name: "iron.product2",
        category: "generator_iron",
        categoryHeader: "ironing-equipment",
        image: "/ironing_equipment/iron1.jpg"
    },
    {
        id: 3,
        name: "iron.product3",
        category: "generator_iron",
        categoryHeader: "ironing-equipment",
        image: "/ironing_equipment/iron2.jpg"
    },
    {
        id: 111,
        name: "iron.product4",
        category: "generator_iron", // pmtCategoriesFilter.type teng
        categoryHeader: "ironing-equipment", // pmtCategoriesFilter.category teng
        image: "/ironing_equipment/iron3.jpg"
    },
    {
        id: 222,
        name: "iron.product5",
        category: "generator_iron",
        categoryHeader: "ironing-equipment",
        image: "/ironing_equipment/iron4.jpg"
    },
    {
        id: 333,
        name: "iron.product6",
        category: "generator_iron",
        categoryHeader: "ironing-equipment",
        image: "/ironing_equipment/iron5.jpg"
    },
    {
        id: 4,
        name: "iron.product7",
        category: "PMT-G3-13085L",
        categoryHeader: "computerized-laser-machines"
    },
    {
        id: 5,
        name: "iron.product8",
        category: "PMT-TP-DM1812",
        categoryHeader: "computerized-laser-machines"
    },
    {
        id: 6,
        name: "iron.product9",
        category: "PMT-X7-10060SK-L-SJ",
        categoryHeader: "computerized-laser-machines",
        image: "/laser/laser1.jpg"
    },
    {
        id: 7,
        name: "iron.product10",
        category: "iron",
        categoryHeader: "accessories-and-spare-parts",
        image: "/accessories/PMT-0010.png"
    },
    {
        id: 8,
        name: "iron.product11",
        category: "iron",
        categoryHeader: "accessories-and-spare-parts"
    },
    {
        id: 9,
        name: "iron.product12",
        category: "iron",
        categoryHeader: "accessories-and-spare-parts"
    },
    {
        id: 10,
        name: "iron.product13",
        category: "iron",
        categoryHeader: "accessories-and-spare-parts"
    },
    {
        id: 11,
        name: "iron.product14",
        category: "PMT-DN7",
        categoryHeader: "automated_design",
        image: "/automated/automated1.jpg"
    },
    {
        id: 4141,
        name: "iron.product15",
        category: "WS-230/G2S",
        categoryHeader: "automated_design",
        image: "/automated/automated2.jpg"
    },
    {
        id: 4242,
        name: "iron.product16",
        category: "WS-230B",
        categoryHeader: "automated_design",
        image: "/automated/automated3.png"
    },
    {
        id: 12,
        name: "iron.product17",
        category: "MAX-SQ1",
        categoryHeader: "auxiliary-machines",
        image: "/auxiliary/aux1.jpg"
    },
    {
        id: 13,
        name: "iron.product18",
        category: "PMT-T20S",
        categoryHeader: "auxiliary-machines",
        image: "/auxiliary/aux2.jpg"
    },
    {
        id: 14,
        name: "iron.product19",
        category: "PMT-10S",
        categoryHeader: "auxiliary-machines",
        image: "/auxiliary/aux3.jpg"
    },
    {
        id: 16,
        name: "iron.product20",
        category: "MAX-900A/B",
        categoryHeader: "cutting-machines",
        image: "/cutting/cutting1.jpg"
    },
    {
        id: 17,
        name: "iron.product21",
        category: "MAX-980-QD",
        categoryHeader: "cutting-machines",
        image: "/cutting/cutting2.jpg"
    },
    {
        id: 19,
        name: "iron.product22",
        category: "PMT-T911",
        categoryHeader: "cutting-machines",
        image: "/cutting/cutting3.jpg"
    },
    {
        id: 20,
        name: "iron.product23",
        category: "PMT-T103-10/750w",
        categoryHeader: "cutting-machines",
        image: "/cutting/cutting4.jpg"
    },
    {
        id: 21,
        name: "iron.product24",
        category: "straight_stitch",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/1.png"
    },
    {
        id: 22,
        name: "iron.product25",
        category: "straight_stitch",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/2.png"
    },
    {
        id: 23,
        name: "iron.product26",
        category: "straight_stitch",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/3.png"
    },
    {
        id: 24,
        name: "iron.product27",
        category: "straight_stitch",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/4.png"
    },
    {
        id: 25,
        name: "iron.product28",
        category: "straight_stitch",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/5.png"
    },
    {
        id: 26,
        name: "iron.product29",
        category: "straight_stitch",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/6.png"
    },
    {
        id: 27,
        name: "iron.product30",
        category: "straight_stitch",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/12.png"
    },
    {
        id: 28,
        name: "iron.product31",
        category: "straight_stitch",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/16.png"
    },
    {
        id: 29,
        name: "iron.product32",
        category: "straight_stitch",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/17.png"
    },
    {
        id: 30,
        name: "iron.product33",
        category: "overlock",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/11.png"
    },
    {
        id: 31,
        name: "iron.product34",
        category: "overlock",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/15.png"
    },
    {
        id: 32,
        name: "iron.product35",
        category: "overlock",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/13.png"
    },
    {
        id: 33,
        name: "iron.product36",
        category: "cutting",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/8.png"
    },
    {
        id: 34,
        name: "iron.product37",
        category: "cutting",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/10.png"
    },
    {
        id: 35,
        name: "iron.product38",
        category: "cutting",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/18.png"
    },
    {
        id: 36,
        name: "iron.product39",
        category: "cutting",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/20.png"
    },
    {
        id: 37,
        name: "iron.product40",
        category: "cutting",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/25.png"
    },
    {
        id: 38,
        name: "iron.product41",
        category: "cutting",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/28.png"
    },
    {
        id: 39,
        name: "iron.product42",
        category: "cutting",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/9.png"
    },
    {
        id: 40,
        name: "iron.product43",
        category: "cutting",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/19.png"
    },
    {
        id: 41,
        name: "iron.product44",
        category: "cutting",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/21.png"
    },
    {
        id: 42,
        name: "iron.product45",
        category: "cutting",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/22.png"
    },
    {
        id: 43,
        name: "iron.product46",
        category: "cutting",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/23.png"
    },
    {
        id: 44,
        name: "iron.product47",
        category: "cutting",
        categoryHeader: "accessories_and_spare_parts",
        image: "/accessories/26.png"
    },
    {
        id: 46,
        name: "iron.product48",
        category: "MAX-F600",
        categoryHeader: "press",
        image: "/press/press1.jpg"
    },
    {
        id: 47,
        name: "iron.product49",
        category: "MAX-Y4060-2",
        categoryHeader: "press",
        image: "/press/press2.png"
    },
]
