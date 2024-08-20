import Image from "next/image";
import Link from "next/link";

import { dataPortfolio } from "@/data";

import AvatarPortfolio from "@/components/avatar-portfolio";
import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";
import { CoverParticles } from "@/components/cover-particles";

const PortfolioPage = () => {
    return (
        <div className="flex min-h-screen flex flex-col justify-center h-full bg-gradient-cover bg-no-repeat">
            <ContainerPage>
                <TransitionPage />
                <CoverParticles />
                <AvatarPortfolio />
                <CircleImage />
                <div className="flex flex-col justify-center h-full -mt-24 md:-mt-32">
                    <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                        Mis últimos <span className="font-bold text-secondary">trabajos realizados</span>
                    </h1>

                    <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4">
                        {dataPortfolio.map((data) => (
                            <PortfolioBox key={data.id} data={data} />
                        ))}
                    </div>
                </div>
            </ContainerPage>
        </div>
    );
}

export default PortfolioPage;
