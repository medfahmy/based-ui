import React from 'react';
import '@ds.e/scss/lib/global.css';
import '@ds.e/scss/lib/margin.css';
import '@ds.e/scss/lib/text.css';

function Select({ options = [], label = "Please select an option.", onOptionSelected: handler }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const onOptionSelected = (option, optionIndex) => {
        if (!handler) {
            return;
        }
        handler(option, optionIndex);
    };
    return (React.createElement("div", null,
        React.createElement("div", { style: { display: "flex", flexDirection: "row" } },
            React.createElement("div", { style: { flex: 1 } }, label),
            React.createElement("button", { onClick: () => setIsOpen(!isOpen) }, isOpen ? "close" : "open")),
        isOpen && (React.createElement("ul", null, options.map((option, index) => {
            return (React.createElement("li", { key: option.value, onClick: () => onOptionSelected(option, index), style: {
                    display: "flex",
                    flexDirection: "row",
                } },
                React.createElement("div", { style: { flex: 1 } }, option.label),
                React.createElement("div", { style: { flex: 1 } }, option.value)));
        })))));
}

export { Select };
//# sourceMappingURL=select.js.map
