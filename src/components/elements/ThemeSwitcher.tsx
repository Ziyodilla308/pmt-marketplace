import {Switch} from "@/components/ui/switch";
import {useTheme} from "next-themes";

export const ThemeSwitcher = () => {
    const {theme, setTheme} = useTheme();

    return (
        <div className="flex items-center space-x-2">
            <Switch
                checked={theme === "dark"}
                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
            />
        </div>
    );
};
