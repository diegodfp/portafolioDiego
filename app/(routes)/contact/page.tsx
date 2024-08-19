"use client"

import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";
import { CoverParticles } from "@/components/cover-particles";
import Formulario from "@/components/formulario"; // Asegúrate de que el path sea correcto

const ContactPage = () => {
    return (
        <>
            <div className="flex min-h-screen bg-gradient-cover bg-no-repeat">
                <TransitionPage />
                <CoverParticles />
                <ContainerPage>
                    <Avatar />
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                        Contáctame{' '}
                        <span className="font-bold text-secondary">
                            para más información
                        </span>
                    </h1>
                    <p className="text-center md:text-left mt-4 md:mt-6 mb-8">
                        Si tienes alguna pregunta o deseas obtener más información, por favor completa el formulario a continuación.
                    </p>
                    <Formulario /> {/* Aquí se incluye el componente del formulario */}
                </ContainerPage>
            </div>
        </>
    );
}

export default ContactPage;
