import Script from "next/script";

export default function LocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Scrap Buyers Chennai",
        url: "https://www.mychennaiscrapbuyers.com/",
        telephone: "+917639582802",
        email: "juantraders24@gmail.com",
        priceRange: "₹₹",

        address: {
            "@type": "PostalAddress",
            streetAddress:
                "Pl No.08, Door No.17, Thiruvalluvar Street, Ullagaram",
            addressLocality: "Chennai",
            postalCode: "600091",
            addressRegion: "TN",
            addressCountry: "IN",
        },

        geo: {
            "@type": "GeoCoordinates",
            latitude: "12.9606",
            longitude: "80.1967",
        },

        openingHours: "Mo-Su 08:00-20:00",
        areaServed: "Chennai",


        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Scrap Buying Services",
            itemListElement: [
                { "@type": "Service", name: "Metal Scrap Buyers" },
                { "@type": "Service", name: "Electronic Scrap Buyers" },
                { "@type": "Service", name: "Old Scrap Buyers" },
                { "@type": "Service", name: "Battery Scrap Buyers" },
            ],
        },
    };

    return (
        <Script
            id="local-business-schema"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
            }}
        />
    );
}
