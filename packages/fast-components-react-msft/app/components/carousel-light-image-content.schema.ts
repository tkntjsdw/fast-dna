export default {
    $schema: "http://json-schema.org/schema#",
    title: "Carousel Light Image Content Test Element",
    description: "A carousel light image content component's schema definition.",
    id: "carousel-light-image-content",
    type: "object",
    properties: {
        image: {
            title: "Image",
            type: "object",
            properties: {
                src: {
                    title: "HTML src attribute",
                    type: "string",
                },
                alt: {
                    title: "HTML alt attribute",
                    type: "string",
                },
            },
        },
    },
};
