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
        code: 6,
        category: "auxiliary_machines",
        name: "ВСПОМОГАТЕЛЬНЫЕ МАШИНЫ"
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
        code: 3,
        category: "accessories_and_spare_parts",
        name: "АКСЕССУАРЫ И ЗАПАСНЫЕ ЧАСТИ"
    },
    {
        code: 4,
        category: "auto_machine",
        name: "Auto Machine"
    },
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
        category: "auto_machine",
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
        category: "generator_iron",
        categoryHeader: "ironing-equipment",
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
        categoryHeader: "auto-machine"
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
]
