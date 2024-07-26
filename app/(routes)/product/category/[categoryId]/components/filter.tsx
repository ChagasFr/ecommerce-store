"use client";
import { useRouter, useSearchParams } from "next/navigation";

import { Color, Size } from "@/types";

interface FilterProps {
    data: (Size | Color)[];
    name: string;
    valueKey: string;
}

const Filter: React.FC<FilterProps> = ({
    data,
    name,
    valueKey
}) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const selectedValue = searchParams.get(valueKey);

    return (
        <div>
            Filter
        </div>
    )
}

export default Filter;