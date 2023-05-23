import React, { useState, useRef, useEffect } from "react";
import { Text } from "../atoms/text";

export type SelectOption = {
    label: string;
    value: string;
};

type SelectHandler = (option: SelectOption, optionIndex: number) => void;

type RenderOptionProps = {
    isSelected: boolean;
    option: SelectOption;
    getOptionRecommendedProps: (overrideProps?: Object) => Object;
};

export type SelectProps = {
    options?: SelectOption[];
    label?: string;
    onOptionSelected?: SelectHandler;
    renderOption?: (props: RenderOptionProps) => React.ReactNode;
};

export function Select({
    options = [],
    label = "Please select an option.",
    onOptionSelected: handler,
    renderOption,
}: SelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [overlayTop, setOverlayTop] = useState(0);

    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

    const labelRef = useRef<HTMLButtonElement>(null);

    const onOptionSelected: SelectHandler = (option, optionIndex) => {
        if (handler) {
            handler(option, optionIndex);
        }

        setSelectedIdx(optionIndex);
        setIsOpen(false);
    };

    useEffect(() => {
        setOverlayTop((labelRef.current?.offsetHeight || 0) + 10);
    }, [labelRef.current?.offsetHeight]);

    return (
        <div className="ds-select">
            <button
                ref={labelRef}
                className="ds-select__label"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Text>
                    {selectedIdx === null ? label : options[selectedIdx].label}
                </Text>
                {/* {isOpen ? <ChevronUp /> : <ChevronDown />} */}
                <ChevronDown open={isOpen} />
            </button>

            {isOpen && (
                <ul className="ds-select__overlay" style={{ top: overlayTop }}>
                    {options.map((option, index) => {
                        const isSelected = selectedIdx === index;

                        const renderOptionProps = {
                            isSelected,
                            option,
                            key: option.value,
                            getOptionRecommendedProps: (
                                overrideProps = {},
                            ) => ({
                                className: `ds-select__option ${ isSelected ? "ds-select__option--selected" : "" }`,
                                key: option.value,
                                onClick: () => onOptionSelected(option, index),
                                ...overrideProps,
                            }),
                        };

                        if (renderOption) {
                            return renderOption(renderOptionProps);
                        }

                        return (
                            <li
                                className={`ds-select__option ${
                                    isSelected ? "ds-select__option--selected" : ""
                                }`}
                                key={option.value}
                                onClick={() => onOptionSelected(option, index)}
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                }}
                            >
                                <Text>{option.label}</Text>
                                {isSelected && <Checked />}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

function ChevronDown({ open }: { open: boolean }) {
    return (
        <svg
            className={`ds-select__chevron ${
                open ? "ds-select__chevron--open" : "ds-select__chevron--closed"
            }`}
            width="1rem"
            height="1rem"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
        </svg>
    );
}

// function ChevronUp() {
//     return (
//         <svg
//             className="ds-select__chevron"
//             width="1rem"
//             height="1rem"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//         >
//             <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M5.5 15.75l7.5-7.5 7.5 7.5"
//             />
//         </svg>
//     );
// }

function Checked() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1rem"
            height="1rem"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
            />
        </svg>
    );
}
