import { Product } from "@/types";

interface InfoProps {
    data: Product
}

const Info: React.FC<InfoProps> = async ({
    data
}) => {
    return (
        <div className="bg-white">
            <h1 className="text-3xl font-bold text-gray-900">
                {data.name}
            </h1>
            <div className="mt-3 items-end justify-between">
                <p className="text-2xl text-gray-900">

                </p>
            </div>
        </div>
    );
}

export default Info;