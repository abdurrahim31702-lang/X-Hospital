document.addEventListener("DOMContentLoaded", function () {
    const services = {
        medicine: {
            title: "General Medicine",
            intro: "Physician consultation for common health concerns and ongoing medical needs.",
            heading: "General Medicine",
            description:
                "General Medicine focuses on physician consultation, assessment of common health concerns and guidance about appropriate next steps. Contact X Hospital for current consultation details and doctor availability.",
            icon: "+"
        },

        gynecology: {
            title: "Women's Health",
            intro: "Gynecology and obstetrics consultation with care focused on women's health.",
            heading: "Women's Health",
            description:
                "Women's Health includes gynecology and obstetrics consultation. Contact X Hospital for current appointment information, available services and doctor schedules.",
            icon: "♡"
        },

        children: {
            title: "Child Care",
            intro: "Child specialist consultation for children's healthcare needs.",
            heading: "Child Care",
            description:
                "Child Care provides access to child specialist consultation. Contact X Hospital for current consultation details, appointment information and doctor availability.",
            icon: "⌁"
        },

        orthopaedics: {
            title: "Orthopaedics",
            intro: "Orthopaedic consultation for bone, joint and movement-related concerns.",
            heading: "Orthopaedics",
            description:
                "Orthopaedics focuses on consultation for bone, joint and movement-related concerns. Contact X Hospital for current appointment information and available care.",
            icon: "◈"
        },

        surgery: {
            title: "Surgical Care",
            intro: "General and micro surgery consultation.",
            heading: "Surgical Care",
            description:
                "Surgical Care includes general and micro surgery consultation. Contact X Hospital for current information about available procedures, consultations and doctor schedules.",
            icon: "✦"
        },

        specialists: {
            title: "Specialist Care",
            intro: "Access to consultation across multiple medical specialties.",
            heading: "Specialist Care",
            description:
                "Specialist Care connects patients with doctors from multiple medical specialties. Contact X Hospital for current specialist availability and appointment information.",
            icon: "+"
        }
    };

    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");
    const service = services[type] || services.medicine;

    document.title = service.title + " | X Hospital";

    document.getElementById("service-title").textContent = service.title;
    document.getElementById("service-intro").textContent = service.intro;
    document.getElementById("service-heading").textContent = service.heading;
    document.getElementById("service-description").textContent = service.description;
    document.getElementById("service-icon").textContent = service.icon;
});
