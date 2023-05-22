import React from "react";
import { Select, SelectOption, Margin, Text } from "@ds/react";
import { createRoot } from "react-dom/client";

import "@ds/scss/lib/global.css";
import "@ds/scss/lib/select.css";
import "@ds/scss/lib/margin.css";

function App() {
    const options = [
        { label: "Strict Black", value: "option-1" },
        { label: "Heavenly Green", value: "option-2" },
        { label: "Sweet Pink", value: "option-3" },
    ];

    const onOptionSelected = (option: SelectOption) => {
        console.log(option);
    };

    return (
        <Margin space="lg">
            <Select
                label="Select an option"
                options={options}
                onOptionSelected={onOptionSelected}
            />
            <Text>this is some text</Text>
        </Margin>
    );
}

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
