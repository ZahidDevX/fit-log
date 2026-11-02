import Logo from "@/public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

const Header = () => {
    return (

        <header className="border-b border-border-muted text-foreground-muted">
            <Container>
                <div className="flex items-center justify-between py-6.5">
                    {/* Logo */}
                    <div>
                        <Link href="/">
                            <Image
                                src={Logo}
                                width={94}
                                alt="FitLog Logo"
                            />
                        </Link>
                    </div>
                    {/* Navigation */}
                    <nav>
                        <ul className="flex items-center justify-center">
                            <li>
                                <Link href="/" className="nav-link active">Workouts</Link>
                            </li>
                            <li>
                                <Link href="/plan" className="nav-link ">My Plan</Link>
                            </li>
                        </ul>
                    </nav>
                    {/* Badge */}
                    <div>
                        <ul className="flex items-center gap-6">
                            <li>
                                <Link href="/"  className="flex items-center gap-2">
                                    Plan
                                    <span className="w-5 h-5 bg-accent text-accent-foreground border border-accent rounded-full text-xs flex items-center justify-center">0</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/"  className="flex items-center gap-2">
                                    Saved
                                    <span className="w-5 h-5 bg-transparent text-foreground-muted border border-border-muted rounded-full text-xs flex items-center justify-center">0</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </Container>
        </header>
    );
};

export default Header;