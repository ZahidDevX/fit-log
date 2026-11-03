import Banner from "@/public/assets/banner.png";
import Image from "next/image";
import Container from "../layouts/Container";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="lg:px-6 lg:py-12">
            <Container>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-between bg-background-muted rounded-2xl px-4 md:px-8 lg:px-14 py-6 md:py-12 lg:py-18">
                    <div className="md:col-span-2 space-y-5 order-2 md:order-1">
                        <p className="text-sm font-bold text-accent">WORKOUT LIBRARY</p>
                        <h1 className="font-extrabold text-4xl md:text-5xl">TRAIN WITH INTENT. LOGEVERY SET.</h1>
                        <p>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.</p>
                        <Link href="/" className="btn-accent w-fit">BROWSE WORKOUTS</Link>
                    </div>
                    <div className="md:col-span-1 lg:col-start-4 order-1 md:order-2">
                        <Image
                            src={Banner}
                            width={334}
                            alt="Banner Image"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;