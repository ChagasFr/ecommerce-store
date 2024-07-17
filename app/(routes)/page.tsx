import getBillboard from "@/actions/get-categories";
import Container from "../components/ui/container";
import Billboard from "../components/billboard";
import getProducts from "@/actions/get-products";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true });

    const billboard = await getBillboard("432879d98-ad32-32a0-342-e473824ff48d0") // passar o correto

    return (
        <Container>
            <div className="space-y-20 pb-10">
                <Billboard data={billboard} />
            </div>
        </Container>
    )
}

export default HomePage;