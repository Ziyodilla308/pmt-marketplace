import { Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-secondary border-t mt-20">
            <div className="container mx-auto px-4 py-10">

                {/* top part */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

                    {/* LEFT SIDE */}
                    <div className="flex flex-col gap-4 max-w-md">
                        <img
                            src="/pmt_logo_no_bg.png"
                            alt="footer_logo"
                            className="w-[150px]"
                        />

                        <p className="text-sm text-muted-foreground">
                            {t("footerDesc")}
                        </p>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            +998 93 184 83 25
                        </div>

                        <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            mac_erdogan@yahoo.com
                        </div>
                    </div>
                </div>

                {/* bottom copyright */}
                <div className="border-t mt-8 pt-6 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} PMT Machines. All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;
