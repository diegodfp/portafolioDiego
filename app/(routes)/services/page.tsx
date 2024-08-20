"use client"

import React, { useState, useEffect } from "react";
import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import { CoverParticles } from "@/components/cover-particles";
import ContactButton from "@/components/boton"; // Importa el componente ContactButton

const ServicesPage = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Considera pantallas móviles hasta 768px
        };

        // Detectar el tamaño de pantalla al cargar el componente
        handleResize();

        // Agregar un listener para el evento de cambio de tamaño
        window.addEventListener("resize", handleResize);

        // Limpiar el listener cuando el componente se desmonte
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
            <TransitionPage />
            <CoverParticles />
            <CircleImage />
            <AvatarServices />

            {isMobile ? (
                <ContainerPage>
                    <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                        <div className="max-w-[450px]">
                            <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                                Mis <span className="font-bold text-secondary"> servicios.</span>
                            </h1>
                            <p className="mb-3 text-xl text-gray-300">
                                Ofrezco servicios de desarrollo web frontend especializados en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías, como HTML, CSS y JavaScript, diseño interfaces de usuario intuitivas y responsivas que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea.
                            </p>
                            <ContactButton /> {/* Usa el componente ContactButton */}
                        </div>

                        {/* SLIDER */}
                        <div>
                            <SliderServices />
                        </div>
                    </div>
                </ContainerPage>
            ) : (
                <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                    <div className="max-w-[450px]">
                        <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                            Mis <span className="font-bold text-secondary"> servicios.</span>
                        </h1>
                        <p className="mb-3 text-xl text-gray-300">
                            Ofrezco servicios de desarrollo web frontend especializados en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías, como HTML, CSS y JavaScript, diseño interfaces de usuario intuitivas y responsivas que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea.
                        </p>
                        <ContactButton /> {/* Usa el componente ContactButton */}
                    </div>

                    {/* SLIDER */}
                    <div>
                        <SliderServices />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServicesPage;
