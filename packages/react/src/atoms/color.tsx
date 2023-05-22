import React from "react";
import { Space } from "@ds/foundation";

type ColorProps = {
    hex: string;
    height?: Space;
    width?: Space;
};

export function Color({ hex, height = "sm", width = "sm" }: ColorProps) {
    const className = `dse-width-${width} dse-height-${height}`;
    return <div className={className} style={{ backgroundColor: hex }}></div>;
}
