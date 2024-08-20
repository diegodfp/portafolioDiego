import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react"; // Importar el logo de GitHub

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string,
        image: string,
        urlGithub: string,
        description: string
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props;
    const { id, title, image, urlGithub, description } = data;

    return (
        <div key={id} className="relative p-4 border border-teal-200 rounded-xl overflow-hidden bg-[rgba(65,47,123,0.15)] shadow-lg max-w-lg mx-auto group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-secondary border-2">
            <h3 className="mb-4 text-xl text-secondary group-hover:text-secondary/80">{title}</h3>
            <div className="relative w-full h-[250px]">
                <Image
                    src={image}
                    alt={title}
                    width={250}
                    height={250}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:opacity-0"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-cover text-darkBg text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out p-4">
                    <p className="text-base leading-relaxed break-words">{description}</p>
                </div>
            </div>

            <div className="flex justify-center mt-5">
                <Link
                    href={urlGithub}
                    target="_blank"
                    className="flex items-center gap-2 p-2 transition duration-150 rounded-lg bg-secondary text-white hover:bg-secondary/80"
                >
                    <Github size={20} strokeWidth={1.5} /> Github
                </Link>
            </div>
        </div>
    );
}

export default PortfolioBox;
