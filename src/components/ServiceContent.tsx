"use client";

type ServiceItem = {
    image: string;
    title: string;
    titleHighlight: string;
    description: string;
};

const services: ServiceItem[] = [
    {
        image: "/assets/img/service-img/Brass.jpg",
        title: "Brass",
        titleHighlight: "Scrap Collection",
        description:
            "We collect all types of brass scrap from homes, shops, and industrial units across Chennai. Our service is designed to make scrap selling simple and stress-free. We provide doorstep pickup at a time convenient for you. Accurate weighing is done using calibrated equipment to ensure transparency. Our pricing follows current market rates to give you the best value. Payments are processed quickly without unnecessary delays. We accept both small and bulk quantities of brass scrap. Our trained staff handles materials safely and professionally. All collected brass scrap is sent for proper recycling. We follow environmentally responsible practices to reduce waste and support sustainability.",
    },
    {
        image: "/assets/img/service-img/Copper-Cables-Wires.jpg",
        title: "Copper Cables &",
        titleHighlight: "Wires",
        description:
            "Jeni Traders purchases copper cables and wires of all grades, including insulated, bare, and mixed copper. We serve residential, commercial, and industrial clients. Our team ensures careful handling during collection and transport. We use transparent weighing methods for complete customer confidence. Prices are clearly communicated before pickup with no hidden charges. Pickup schedules are flexible to suit your availability. We handle both small quantities and large bulk orders efficiently. Payments are made promptly once the scrap is collected. Copper materials are processed responsibly through approved recycling channels. Our services help reduce environmental impact while delivering value to customers.",
    },
    {
        image: "/assets/img/service-img/Iron.jpg",
        title: "Iron",
        titleHighlight: "Scrap",
        description:
            "We offer dependable iron scrap collection services for homes, offices, factories, and construction sites. Our team is experienced in handling all types of iron scrap. From minor household scrap to bulk industrial materials, we manage it efficiently. We ensure proper sorting and accurate weight measurement. Our pricing is fair and based on real-time market rates. Pickup is arranged on time to avoid any inconvenience. Payments are settled quickly and transparently. Safety standards are followed during collection and transportation. Iron scrap is recycled responsibly to minimize waste. Our service supports sustainable recycling and resource conservation.",
    },
    {
        image: "/assets/img/service-img/Heavy-Metal-Steel.jpg",
        title: "Steel & Heavy",
        titleHighlight: "Metal Scrap",
        description:
            "We specialize in collecting steel and heavy metal scrap from factories, warehouses, and construction sites. Our team is equipped to handle large volumes safely and efficiently. We follow structured processes to ensure smooth collection operations. Accurate weighing is carried out using certified equipment. Competitive pricing is offered based on scrap quality and quantity. Pickup is scheduled to minimize disruption to your operations. Our staff ensures safe loading and transportation. Payments are made promptly after collection. All materials are processed through responsible recycling facilities. We are committed to eco-friendly practices and long-term sustainability.",
    },
];

const ServiceContent = () => {
    return (
        <section className="service-content section-padding">
            <div className="container">
                {/* Section Title */}
                <div className="section-title text-center mb-5">
                    <h2 className="mt-char-animation">
                        What <span>We Do</span>
                    </h2>
                    <p className="mt-3">
                        Jeni Traders provides professional scrap collection and recycling
                        services. We collect metal scrap from homes, offices, construction
                        sites, and industries with honest pricing, timely pickup, and
                        responsible recycling. Our experienced team ensures safe handling,
                        accurate weighing, and transparent transactions. We are committed to
                        environmental sustainability and delivering exceptional value to our
                        customers across Chennai.
                    </p>
                </div>

                {/* Zig-Zag Layout */}
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`row align-items-center mb-5 hover-box ${index % 2 !== 0 ? "flex-row-reverse" : ""
                            }`}
                    >
                        {/* Image */}
                        <div className="col-lg-6 mb-3 mb-lg-0">
                            <div className="service-image">
                                <img
                                    src={service.image}
                                    alt={`${service.title} ${service.titleHighlight}`}
                                    className="img-fluid rounded"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="col-lg-6">
                            <div className="service-text ">
                                <h3>
                                    {service.title}{" "}
                                    <span className="color-red">
                                        {service.titleHighlight}
                                    </span>
                                </h3>
                                <p className="mt-3 text-justify">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServiceContent;
