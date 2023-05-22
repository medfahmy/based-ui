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
export declare function Margin({ children, space, left, right, top, bottom }: MarginProps): React.JSX.Element;
export {};
