import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Instagram, Github, } from "lucide-react";


export const socialNetworks = [
    {
        id: 1,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/diegodfp",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/diego-perez12/",
    },
    {
        id: 3,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/diegofperez08/",
    },
    {
        id: 4,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "https://www.youtube.com/@DiegoPerez-ir6by",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },

];

export const dataAboutPage = [
    {
        id: 1,
        title: "Back-end Developer",
        subtitle: "Campuslands",
        description: "Bootcamp intensivo para desarrollar el aprendizaje del desarrollo web con enfasis en el backend, ademas de de incluir en su programa de aprendizaje, el estudio y aprendizaje del ingles y habilidades blandas.",
        date: "Sept. 2024 ",
    },
    {
        id: 2,
        title: "Ciberseguridad de Google",
        subtitle: "Coursera",
        description: "El Certificado de Carrera de Ciberseguridad de Google está compuesto por ocho cursos desarrollados por Google, que abarcan una amplia gama de temas en ciberseguridad. Incluye actividades prácticas y escenarios simulados que replican tareas comunes y desafiantes en el campo de la ciberseguridad, proporcionando una formación integral y aplicada para enfrentar las amenazas y proteger sistemas y datos.",
        date: "Mar. 2024",
    },
    {
        id: 3,
        title: "Programa Oracle Next Education Back-end",
        subtitle: "Alura Latam",
        description: "Programa especializado en desarrollo back-end con un enfoque en el uso del lenguaje de programación Java y el framework Spring Boot. Este curso proporciona una formación integral en la creación de aplicaciones robustas y escalables, cubriendo desde la arquitectura de aplicaciones hasta la implementación de soluciones eficientes y seguras en el entorno back-end.",
        date: "jul. 2024 ",
    },
    {
        id: 4,
        title: "Ing. sistemas",
        subtitle: "UIS",
        description: "He cursado cinco semestres en Ingeniería de Sistemas en la Universidad Industrial de Santander, donde desarrollé una sólida base en desarrollo de software, gestión de proyectos y diversos lenguajes de programación. A pesar de que mis estudios están actualmente en pausa, he adquirido habilidades clave en la creación y gestión de soluciones tecnológicas y en la aplicación de metodologías ágiles y principios de ingeniería de software.",
        date: "Mar 2022",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        text: "Años de formación en programación",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 20,
        text: "Proyectos personales completados",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 8,
        text: "Lenguajes de programación utilizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 3,
        text: "Certificaciones obtenidas",
        lineRight: false,
        lineRightMobile: false,
    },
];


export const serviceData = [
    {
        icon: <Crop />,
        title: "Desarrollo Back-end",
        description: "Creación y optimización de bases de datos y aplicaciones back-end utilizando Java y Spring Boot. Desarrollo de soluciones escalables y seguras.",
    },
    {
        icon: <Pencil />,
        title: "Diseño de Interfaces Web",
        description: "Diseño de interfaces web intuitivas y centradas en el usuario, asegurando una experiencia de usuario fluida y atractiva. Adaptación de interfaces para su integración con el back-end.",
    },
    {
        icon: <Computer />,
        title: "Desarrollo de Soluciones Web",
        description: "Desarrollo completo de aplicaciones web a medida, incluyendo la integración de sistemas y la implementación de funcionalidades avanzadas para cumplir todos los requerimientos",
    },
    {
        icon: <Book />,
        title: "Seguridad Web",
        description: "Implementación de medidas de seguridad para proteger tus aplicaciones y datos contra amenazas cibernéticas. Evaluación de vulnerabilidades y aplicación de buenas prácticas de ciberseguridad.",
    },
    {
        icon: <Rocket />,
        title: "Optimización de Rendimiento",
        description: "Mejora del rendimiento y la eficiencia de tus aplicaciones web. Implementación de técnicas para optimizar tiempos de carga, manejo de datos y respuesta del servidor.",
    },
];


export const dataPortfolio = [
    {
        id: 1,
        title: "Sistema Gestión Aerolinea",
        image: "/image-1.jpg",
        urlGithub: "https://github.com/diegodfp/aerolinea",
        description: "Aplicacion grafica de escritorio desarollada en java, para la gestion completa de una aerolinea, se desarrolla usando arquitectura hexagonal + vertical slicing ",
    },
    {
        id: 2,
        title: "Desarrollo API REST para un foro",
        image: "/image-2.png",
        urlGithub: "https://github.com/diegodfp/ForoHub",
        description: "Desarrollo e implementacion de una API REST  desarrollada con java spring boot, la API implementa rutas siguiendo las buenas practicas del modelo REST.",
    },
    {
        id: 3,
        title: "Consumo Api Gutendex",
        image: "/image-3.jpg",
        urlGithub: "https://github.com/diegodfp/Libreria_Gutendex-main",
        description: " Aplicación para gestionar  APIs externas, en este caso Gutendex, implementando  Java y Spring Boot. Incluye persistencia de datos y gestión eficiente de recursos, ofreciendo una solución robusta y escalable.",
    },
    {
        id: 4,
        title: "Web para pagos de servicios publicos",
        image: "/image-4.jpg",
        urlGithub: "https://github.com/diegodfp/Libreria_Gutendex-main",
        description: "Plataforma web intuitiva y atractiva para la gestión de pagos de servicios públicos en línea. Utilizando técnicas avanzadas de diseño de interfaces (UI), la aplicación ofrece una experiencia de usuario fluida y sencilla.",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];




