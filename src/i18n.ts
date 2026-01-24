import translationUZ from "./locales/uz.json";
import translationRU from "./locales/ru.json";
import translationEN from "./locales/en.json";
import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import {getLocalItem, setLocalItem} from "@/utils/persist-storage";

const resources = {
    ru: {translation: translationRU},
    uz: {translation: translationUZ},
    en: {translation: translationEN},
};


const DEFAULT_LANG = "ru";

const savedLang = getLocalItem("LANGUAGE") || DEFAULT_LANG;
setLocalItem("LANGUAGE", savedLang);

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: savedLang,
        fallbackLng: "ru",
        debug: false,
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18next;
