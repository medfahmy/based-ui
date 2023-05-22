import React from "react";

import "@ds/scss/lib/global.css";
import "@ds/scss/lib/margin.css";
import "@ds/scss/lib/text.css";

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
        <div className="ds-select">
            <button
                className="ds-select__label"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{label}</span>
                {isOpen ? <ChevronUp /> : <ChevronDown />}
            </button>

            {isOpen && (
                <ul className="ds-select__overlay">
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
                                <span>{option.label}</span>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

function ChevronDown() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width="1rem"
            height="1rem"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
        </svg>
    );
}

function ChevronUp() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width="1rem"
            height="1rem"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.5 15.75l7.5-7.5 7.5 7.5"
            />
        </svg>
    );
}