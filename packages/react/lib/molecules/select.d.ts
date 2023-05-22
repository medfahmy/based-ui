import React from "react";
import "@ds.e/scss/lib/global.css";
import "@ds.e/scss/lib/margin.css";
import "@ds.e/scss/lib/text.css";
export type SelectOption = {
    label: string;
    value: string;
};
type SelectHandler = (option: SelectOption, optionIndex: number) => void;
export type SelectProps = {
    options?: SelectOption[];
    label?: string;
    onOptionSelected?: SelectHandler;
};
export declare function Select({ options, label, onOptionSelected: handler }: SelectProps): React.JSX.Element;
export {};
