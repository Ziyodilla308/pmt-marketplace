import { useEffect } from "react";

declare global {
    interface Window {
        adsbygoogle: unknown[];
    }
}

const AdBanner = () => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error(e);
        }
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{ display: "block", margin: "20px 0" }}
            data-ad-client="ca-pub-7890092751997289"
            data-ad-slot="XXXXXXXXXX"
            data-ad-format="auto"
            data-full-width-responsive="true"
        />
    );
};

export default AdBanner;