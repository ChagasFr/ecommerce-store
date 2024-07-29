"use client";

import { Color, Size } from "@/types";
import { useState } from "react";

interface MobileFiltersProps {
    sizes: Size[];
    colors: Color[];
};

const MobileFilters: React.FC<MobileFiltersProps> = ({
    sizes,
    colors
}) => {
    const [open, setOpen] = useState(false);

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    return (
        <div>
            MobileFilters
        </div>
    );
}

export default MobileFilters;