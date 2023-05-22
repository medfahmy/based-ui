import React from "react";
import { Space } from "@ds.e/foundation";

type MarginProps = {
    children: React.ReactNode;
    space?: Space;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
};

export function Margin({ children, space = "xxxs", left, right, top, bottom }: MarginProps) {
    let className = "";

    if (!left && !right && !top && !bottom) {
        className += ` dse-margin-${space}`;
    }

    if (left) {
        className += ` dse-margin-left-${space}`;
    }

    if (right) {
        className += ` dse-margin-right-${space}`;
    }

    if (top) {
        className += ` dse-margin-top-${space}`;
    }

    if (bottom) {
        className += ` dse-margin-bottom-${space}`;
    }

    return (
        <div className={className}>
            {children}
        </div>
    );
}