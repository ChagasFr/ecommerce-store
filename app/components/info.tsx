import { Product } from "@/types";

interface InfoProps {
    data: Product
}

const Info: React.FC<InfoProps> = async ({
    data
}) => {
    const product = await getProduct(params.productId);

    const suggertedProducts = await getProducts({
        categoryId: product?.category.id
    })

    return (
        <div className="bg-white">
        </div>
    );
}

export default Info;