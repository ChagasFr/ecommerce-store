import { Color } from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`

const getColors = async (id: string): Promise<Color[]> => {
    const res = await fetch(`${URL}/${id}`);

    return res.json()
};

export default getColors;