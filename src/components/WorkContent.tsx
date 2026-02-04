"use client";

import { Nav, Tab } from "react-bootstrap";

const tabs = [
    { key: "all", label: "All" },
    { key: "ewaste", label: "E-Waste" },
    { key: "plastic", label: "Plastic Waste" },
    { key: "metal", label: "Metal Waste" },

];

const galleryItems: Record<
    string,
    { id: number; image: string; title: string }[]
> = {
    all: [
        { id: 1, image: "/assets/img/waste-images/electrical-waste/img- (1).jpg", title: "E-Waste Collection" },
        { id: 2, image: "/assets/img/waste-images/electrical-waste/img- (2).jpg", title: "Electrical Waste Item 2" },
        { id: 3, image: "/assets/img/waste-images/electrical-waste/img- (3).jpg", title: "Electrical Waste Item 3" },
        { id: 4, image: "/assets/img/waste-images/electrical-waste/img- (4).jpg", title: "Electrical Waste Item 4" },
        { id: 5, image: "/assets/img/waste-images/electrical-waste/img- (5).jpg", title: "Electrical Waste Item 5" },
        { id: 6, image: "/assets/img/waste-images/electrical-waste/img- (6).jpg", title: "Electrical Waste Item 6" },
        { id: 7, image: "/assets/img/waste-images/electrical-waste/img- (7).jpg", title: "Electrical Waste Item 7" },
        { id: 8, image: "/assets/img/waste-images/electrical-waste/img- (8).jpg", title: "Electrical Waste Item 8" },
        { id: 9, image: "/assets/img/waste-images/electrical-waste/img- (9).jpg", title: "Electrical Waste Item 9" },
        { id: 28, image: "/assets/img/waste-images/electrical-waste/img- (10).jpg", title: "Electrical Waste Item 10" },
        { id: 29, image: "/assets/img/waste-images/electrical-waste/img- (11).jpg", title: "Electrical Waste Item 11" },
        { id: 30, image: "/assets/img/waste-images/electrical-waste/img- (12).jpg", title: "Electrical Waste Item 12" },
        { id: 31, image: "/assets/img/waste-images/plastic waste/img-1.jpg", title: "Plastic Waste Recycling" },
        { id: 32, image: "/assets/img/waste-images/plastic waste/img-2.jpg", title: "Plastic Waste Item 2" },
        { id: 33, image: "/assets/img/waste-images/plastic waste/img-3.jpg", title: "Plastic Waste Item 3" },
        { id: 34, image: "/assets/img/waste-images/plastic waste/img-4.jpg", title: "Plastic Waste Item 4" },
        { id: 35, image: "/assets/img/waste-images/plastic waste/img-5.jpg", title: "Plastic Waste Item 5" },
        { id: 36, image: "/assets/img/waste-images/plastic waste/img-6.jpg", title: "Plastic Waste Item 6" },
        { id: 11, image: "/assets/img/waste-images/plastic waste/img-7.jpg", title: "Plastic Waste Item 6" },
        { id: 12, image: "/assets/img/waste-images/plastic waste/img-8.jpg", title: "Plastic Waste Item 6" },
        { id: 13, image: "/assets/img/waste-images/metal-waste/img-1.jpg", title: "Metal Waste Recycling" },
        { id: 14, image: "/assets/img/waste-images/metal-waste/img-2.jpg", title: "Metal Waste Item 2" },
        { id: 15, image: "/assets/img/waste-images/metal-waste/img-3.jpg", title: "Metal Waste Item 3" },
        { id: 16, image: "/assets/img/waste-images/metal-waste/img-4.jpg", title: "Metal Waste Item 4" },
        { id: 17, image: "/assets/img/waste-images/metal-waste/img-5.jpg", title: "Metal Waste Item 5" },
        { id: 18, image: "/assets/img/waste-images/metal-waste/img-6.jpg", title: "Metal Waste Item 6" },
        { id: 19, image: "/assets/img/waste-images/metal-waste/img-7.jpg", title: "Metal Waste Item 7" },
        { id: 20, image: "/assets/img/waste-images/metal-waste/img-8.jpg", title: "Metal Waste Item 8" },
        { id: 21, image: "/assets/img/waste-images/metal-waste/img-9.jpg", title: "Metal Waste Item 9" },
        { id: 22, image: "/assets/img/waste-images/metal-waste/img-10.jpg", title: "Metal Waste Item 10" },
        { id: 23, image: "/assets/img/waste-images/metal-waste/img-11.jpg", title: "Metal Waste Item 11" },
        { id: 24, image: "/assets/img/waste-images/metal-waste/img-13.jpg", title: "Metal Waste Item 12" },
        { id: 25, image: "/assets/img/waste-images/metal-waste/img-14.jpg", title: "Metal Waste Item 13" },
        { id: 26, image: "/assets/img/waste-images/metal-waste/img-12.jpg", title: "Metal Waste Item 14" },
        { id: 27, image: "/assets/img/waste-images/metal-waste/img-15.jpg", title: "Metal Waste Item 15" },
    ],
    ewaste: [
        { id: 1, image: "/assets/img/waste-images/electrical-waste/img- (1).jpg", title: "E-Waste Collection" },
        { id: 2, image: "/assets/img/waste-images/electrical-waste/img- (2).jpg", title: "Electrical Waste Item 2" },
        { id: 3, image: "/assets/img/waste-images/electrical-waste/img- (3).jpg", title: "Electrical Waste Item 3" },
        { id: 4, image: "/assets/img/waste-images/electrical-waste/img- (4).jpg", title: "Electrical Waste Item 4" },
        { id: 5, image: "/assets/img/waste-images/electrical-waste/img- (5).jpg", title: "Electrical Waste Item 5" },
        { id: 6, image: "/assets/img/waste-images/electrical-waste/img- (6).jpg", title: "Electrical Waste Item 6" },
        { id: 7, image: "/assets/img/waste-images/electrical-waste/img- (7).jpg", title: "Electrical Waste Item 7" },
        { id: 8, image: "/assets/img/waste-images/electrical-waste/img- (8).jpg", title: "Electrical Waste Item 8" },
        { id: 9, image: "/assets/img/waste-images/electrical-waste/img- (9).jpg", title: "Electrical Waste Item 9" },
        { id: 10, image: "/assets/img/waste-images/electrical-waste/img- (10).jpg", title: "Electrical Waste Item 10" },
        { id: 11, image: "/assets/img/waste-images/electrical-waste/img- (11).jpg", title: "Electrical Waste Item 11" },
        { id: 12, image: "/assets/img/waste-images/electrical-waste/img- (12).jpg", title: "Electrical Waste Item 12" },
    ],
    plastic: [
        { id: 7, image: "/assets/img/waste-images/plastic waste/img-1.jpg", title: "Plastic Waste Recycling" },
        { id: 8, image: "/assets/img/waste-images/plastic waste/img-2.jpg", title: "Plastic Waste Item 2" },
        { id: 9, image: "/assets/img/waste-images/plastic waste/img-3.jpg", title: "Plastic Waste Item 3" },
        { id: 10, image: "/assets/img/waste-images/plastic waste/img-4.jpg", title: "Plastic Waste Item 4" },
        { id: 11, image: "/assets/img/waste-images/plastic waste/img-5.jpg", title: "Plastic Waste Item 5" },
        { id: 12, image: "/assets/img/waste-images/plastic waste/img-6.jpg", title: "Plastic Waste Item 6" },
        { id: 13, image: "/assets/img/waste-images/plastic waste/img-7.jpg", title: "Plastic Waste Item 6" },
        { id: 14, image: "/assets/img/waste-images/plastic waste/img-8.jpg", title: "Plastic Waste Item 6" },
    ],
    metal: [
        { id: 13, image: "/assets/img/waste-images/metal-waste/img-1.jpg", title: "Metal Waste Recycling" },
        { id: 14, image: "/assets/img/waste-images/metal-waste/img-2.jpg", title: "Metal Waste Item 2" },
        { id: 15, image: "/assets/img/waste-images/metal-waste/img-3.jpg", title: "Metal Waste Item 3" },
        { id: 16, image: "/assets/img/waste-images/metal-waste/img-4.jpg", title: "Metal Waste Item 4" },
        { id: 17, image: "/assets/img/waste-images/metal-waste/img-5.jpg", title: "Metal Waste Item 5" },
        { id: 18, image: "/assets/img/waste-images/metal-waste/img-6.jpg", title: "Metal Waste Item 6" },
        { id: 19, image: "/assets/img/waste-images/metal-waste/img-7.jpg", title: "Metal Waste Item 7" },
        { id: 20, image: "/assets/img/waste-images/metal-waste/img-8.jpg", title: "Metal Waste Item 8" },
        { id: 21, image: "/assets/img/waste-images/metal-waste/img-9.jpg", title: "Metal Waste Item 9" },
        { id: 22, image: "/assets/img/waste-images/metal-waste/img-10.jpg", title: "Metal Waste Item 10" },
        { id: 23, image: "/assets/img/waste-images/metal-waste/img-11.jpg", title: "Metal Waste Item 11" },
        { id: 24, image: "/assets/img/waste-images/metal-waste/img-12.jpg", title: "Metal Waste Item 12" },
        { id: 25, image: "/assets/img/waste-images/metal-waste/img-13.jpg", title: "Metal Waste Item 13" },
        { id: 26, image: "/assets/img/waste-images/metal-waste/img-14.jpg", title: "Metal Waste Item 14" },
        { id: 27, image: "/assets/img/waste-images/metal-waste/img-15.jpg", title: "Metal Waste Item 15" },
    ],

};

export const CausesTab = () => {
    return (
        <section className="gallery-section section-padding">
            <div className="container">
                <Tab.Container defaultActiveKey="all">
                    {/* Tabs */}
                    <Nav className="justify-content-center mb-4 gallery-tabs">
                        {tabs.map((tab) => (
                            <Nav.Item key={tab.key}>
                                <Nav.Link
                                    eventKey={tab.key}
                                    className="gallery-tab-btn cat-btn"
                                >
                                    {tab.label}
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>


                    {/* Gallery */}
                    <Tab.Content>
                        {Object.entries(galleryItems).map(([key, items]) => (
                            <Tab.Pane eventKey={key} key={key}>
                                <div className="row">
                                    {items.map((item) => (
                                        <div key={item.id} className="col-lg-4 col-md-4 col-sm-6 mb-4">
                                            <div className="gallery-card">
                                                <img src={item.image} alt={item.title} />
                                                <div className="gallery-overlay">
                                                    <h4>{item.title}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Tab.Pane>
                        ))}
                    </Tab.Content>
                </Tab.Container>
            </div>
        </section>
    );
};
