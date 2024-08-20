import Link from 'next/link';

const ContactButton = () => {
    return (
        <Link href="/contact" className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65 text-white transition-colors duration-300">
            Contacta conmigo
        </Link>
    );
}

export default ContactButton;
