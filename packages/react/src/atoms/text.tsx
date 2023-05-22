import React from "react";
import { FontSize } from "@ds/foundation";

type TextProps = {
    size?: FontSize;
    children: React.ReactNode;
};

export function Text({ size, children }: TextProps) {
    const className = `dse-text dse-font-size-${size}`;
    return <p className={className}>{children}</p>;
}