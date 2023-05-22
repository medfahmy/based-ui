import React from "react";
import { Select, SelectOption } from "@ds.e/react";
import { createRoot } from "react-dom/client";

import "@ds.e/scss/lib/global.css";
import "@ds.e/scss/lib/margin.css";

function App() {
    const options = [
        { label: "Option 1", value: "option-1" },
        { label: "Option 2", value: "option-2" },
        { label: "Option 3", value: "option-3" },
    ];

    const onOptionSelected = (option: SelectOption) => {
        console.log(option);
    };

    return (
        <Select
            label="Select an option"
            options={options}
            onOptionSelected={onOptionSelected}
        />
    );
}

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
