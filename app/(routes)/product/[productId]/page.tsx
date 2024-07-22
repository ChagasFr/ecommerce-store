import getProducts from "@/actions/get-products";

interface ProductRageProps {
    params: {
        productId: string;
    }
}


const ProductPage: React.FC<ProductRageProps> = async ({
    params
}) => {
    const product = {};

    const suggertedProducts = await getProducts({
        categoryId: product?.category.id
    })

    return (
        <div>
            Individual Page;
        </div>
    );
}

export default ProductPage;