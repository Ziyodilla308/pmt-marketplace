import translationUZ from "./locales/uz.json";
import translationRU from "./locales/ru.json";
import translationEN from "./locales/en.json";
import {getLocalItem, setLocalItem} from "@/utils/persist-storage.ts";
import i18next from "i18next";
import backend from "i18next-http-backend";
import detector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";

const resources = {
    uz: {
        translation: translationUZ
    },
    ru: {
        translation: translationRU
    },
    en: {
        translation: translationEN
    },

}

const language = getLocalItem("LANGUAGE");

if (!language) {
    setLocalItem("LANGUAGE", "uz");
}

i18next
    .use(backend)
    .use(detector)
    .use(initReactI18next)
    .init({
        resources,
        lng: getLocalItem("LANGUAGE") || "uz",
        fallbackLng: "uz",
        keySeparator: false,
        debug: false,
        interpolation: {
            escapeValue: false
        },
    });

export default i18next;
