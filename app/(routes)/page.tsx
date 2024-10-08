import getBillboard from "@/actions/get-categories";
import Container from "../components/ui/container";
import Billboard from "../components/billboard";
import getProducts from "@/actions/get-products";
import ProductList from "../components/product-list";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true });

    const billboard = await getBillboard("432879d98-ad32-32a0-342-e473824ff48d0") // passar o correto

    return (
        <Container>
            <div className="space-y-20 pb-10">
                <Billboard data={billboard} />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    )
}

export default HomePage;