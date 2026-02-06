"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function GoogleAnalytics() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const url =
            pathname + (searchParams.toString() ? `?${searchParams}` : "");

        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("config", "G-ZZVM9Q3B5F", {
                page_path: url,
            });
        }
    }, [pathname, searchParams]);

    return null;
}
