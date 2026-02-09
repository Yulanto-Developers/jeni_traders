import {Metadata} from "next";

const SITE_URL = "https://www.mychennaiscrapbuyers.com";
const SITE_NAME = "My Chennai Scrap Buyers";

type SEOProps = {
    title: string;
    description: string;
    path: string;
    images: string;
}

export function generateSeo({ title, description, path, images }: SEOProps): Metadata {
    const url = `${SITE_URL}${path}`;
    return {
        title: title,
        description: description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: title,
            description: description,
            url: url,
            siteName: SITE_NAME,
            type: "website",
            locale: "en_IN",
            images: [
                {
                    url: SITE_URL + images,
                    width: 1200,
                    height: 630,
                    alt: title,
                }],
        },
        twitter: {
            card: "summary_large_image",
            title: title,
            description: description,
            images: [SITE_URL + images],
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}