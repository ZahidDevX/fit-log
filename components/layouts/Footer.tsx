import Logo from "@/public/assets/logo.png";
import Image from "next/image";
import Container from "./Container";
const currentYear = new Date().getFullYear();
const Footer = () => {
    return (
        <footer className="bg-background border-t border-border-muted text-foreground-muted py-10">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <Image
                            src={Logo}
                            width={94}
                            alt="FitLog Logo"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-center">&copy; {currentYear} FitLog — Workout Library. Train hard, log honest.</p>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;