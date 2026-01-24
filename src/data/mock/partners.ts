import gersan from "../../../public/gersan_remove_bg.png"
import pmtAutomation from "../../../public/pmt_remove_bg.png"
import shingLing from "../../../public/shingling_remove_bg.png"
import spartak from "../../../public/spartak_no_bg.png"
import spreadSystem from "../../../public/spread_system.jpg"
import {TPartners} from "@/utils/types.ts";
import pmt from "../../../public/pmt_logo_no_bg.png"

export const partners: TPartners[] = [
    {name: 'shingling', logo: shingLing, category: "shingling"},
    {name: "pmt", logo: pmt, category: "pmt"},
    {name: 'pmt_automation', logo: pmtAutomation, category: ""},
    {name: 'gersan', logo: gersan, category: ""},
    {name: 'spartak', logo: spartak, category: ""},
    {name: 'spreadsystem', logo: spreadSystem, category: ""},
];
