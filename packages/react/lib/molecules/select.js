import React from 'react';
import '@ds/scss/lib/global.css';
import '@ds/scss/lib/margin.css';
import '@ds/scss/lib/text.css';

function Select({ options = [], label = "Please select an option.", onOptionSelected: handler }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const onOptionSelected = (option, optionIndex) => {
        if (!handler) {
            return;
        }
        handler(option, optionIndex);
    };
    return (React.createElement("div", { className: "ds-select" },
        React.createElement("button", { className: "ds-select__label", onClick: () => setIsOpen(!isOpen) },
            React.createElement("span", null, label),
            isOpen ? React.createElement(ChevronUp, null) : React.createElement(ChevronDown, null)),
        isOpen && (React.createElement("ul", { className: "ds-select__overlay" }, options.map((option, index) => {
            return (React.createElement("li", { key: option.value, onClick: () => onOptionSelected(option, index), style: {
                    display: "flex",
                    flexDirection: "row",
                } },
                React.createElement("span", null, option.label)));
        })))));
}
function ChevronDown() {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", width: "1rem", height: "1rem" },
        React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" })));
}
function ChevronUp() {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", width: "1rem", height: "1rem" },
        React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5.5 15.75l7.5-7.5 7.5 7.5" })));
}

export { Select };
//# sourceMappingURL=select.js.map
