import React from "react";

import "@ds.e/scss/lib/global.css";
import "@ds.e/scss/lib/margin.css";
import "@ds.e/scss/lib/text.css";

export type SelectOption = {
    label: string,
    value: string,
};

type SelectHandler = (option: SelectOption, optionIndex: number) => void;

export type SelectProps = {
    options?: SelectOption[];
    label?: string;
    onOptionSelected?: SelectHandler;
};

export function Select({ options = [], label = "Please select an option.", onOptionSelected: handler }: SelectProps) {
    const [isOpen, setIsOpen] = React.useState(false);

    const onOptionSelected: SelectHandler = (option, optionIndex) => {
        if (!handler) {
            return;
        }
        handler(option, optionIndex);
    };

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ flex: 1 }}>{label}</div>
                <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "close" : "open"}</button>
            </div>

            {isOpen && (
                <ul>
                    {options.map((option, index) => {
                        return (
                            <li
                                key={option.value}
                                onClick={() => onOptionSelected(option, index)}
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                }}
                            >
                                <div style={{ flex: 1 }}>{option.label}</div>
                                <div style={{ flex: 1 }}>{option.value}</div>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
