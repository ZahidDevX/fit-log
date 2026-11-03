import Banner from "@/public/assets/banner.png";
import Image from "next/image";
import Link from "next/link";
import { FaFire, FaRegClock, FaRegStar } from "react-icons/fa";


const LibraryCard = () => {
    return (
        <div className="bg-background-muted rounded-2xl border border-border-muted overflow-hidden">
            <Link href="/plan">
                <div className="flex items-center justify-center">
                    <Image
                        src={Banner}
                        width={388}
                        alt="Image"
                    />
                </div>
                <div className="p-6">
                    <div className="flex gap-3 mb-4">
                        <span className="badge-accent">Chest</span>
                        <span className="badge-accent">Arms</span>
                    </div>
                    <h3 className="uppercase font-bold text-lg">BARBELL BENCH PRESS</h3>
                    <p className="capitalize text-sm">Barbell, Bench</p>
                    <ul className="mt-3 pt-3 flex gap-4 border-t border-border-muted">
                        <li className="flex gap-1 items-center">
                            <FaRegClock />
                            <p>25 min</p>
                        </li>
                        <li className="flex gap-1 items-center">
                            <FaFire />
                            <p>180 kcal</p>
                        </li>
                        <li className="flex gap-1 items-center">
                            <FaRegStar />
                            <p>4.8</p>
                        </li>
                    </ul>
                </div>
            </Link>
        </div>
    );
};

export default LibraryCard;