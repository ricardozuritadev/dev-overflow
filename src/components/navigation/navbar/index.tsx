import Image from "next/image";
import Link from "next/link";

import Theme from "@/components/navigation/navbar/Theme";

export default function NavBar() {
    return (
        <nav className="flex-between background-light900_dark200 fixed z-50 w-full p-6 dark:shadow-none sm:px-12 shadow-light-300 gap-5">
            <Link href="/" className="flex items-center gap-1">
                <Image
                    src="/images/site-logo.svg"
                    width={23}
                    height={23}
                    alt="DevOverflow Logo"
                />

                <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
                    Dev <span className="text-primary-500">Overflow</span>
                </p>
            </Link>

            <p>Global Search</p>

            <Theme />
        </nav>
    );
}
