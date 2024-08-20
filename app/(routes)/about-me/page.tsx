"use client"

import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import { CoverParticles } from "@/components/cover-particles";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const AboutMePage = () => {
    return (
        <>
        <div className="flex min-h-screen bg-gradient-cover bg-no-repeat">
            <TransitionPage />
            <CoverParticles />
            <ContainerPage>
                
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Toda mi{' '}
                    <span className="font-bold text-secondary">
                        trayectoria profesional
                    </span>
                </h1>

                <CounterServices />

                <TimeLine />

            </ContainerPage>
            
            </div>
        </>
    );
}

export default AboutMePage;