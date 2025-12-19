import {useTranslation} from "react-i18next";
import {Trash} from "lucide-react";

const Empty = () => {
    const {t} = useTranslation();
    return (
        <div
            className="col-span-full flex flex-col items-center justify-center py-20 px-6 bg-transparent rounded-xl text-center">
            {/* Creative illustration */}
            <Trash width={100} height={70} color={"#D64B3E"} />

            <h3 className="mt-4 text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                {t("noProductsFound")}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md">
                {t("noProductsDescription")}
            </p>
        </div>
    );
};

export default Empty;
