import getCategories from "@/actions/get-categories";
import MainNav from "./main-nav";
import Container from "./ui/container";
import NavBarActions from "./navbar-actions";

import Link from "next/link";

export const revalidate = 0;

const NavBar = async () => {
    const categories = await getCategories();

    return (
        <div className="border-b">
            <Container>
                <div className="relative- px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                        <p className="font-bold text-xl">STORE</p>
                    </Link>
                    <MainNav data={categories} />
                    <NavBarActions />
                </div>
            </Container>
        </div>
    );
}

export default NavBar;