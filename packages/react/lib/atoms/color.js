import React from 'react';

function Color({ hex, height = "sm", width = "sm" }) {
    const className = `dse-width-${width} dse-height-${height}`;
    return React.createElement("div", { className: className, style: { backgroundColor: hex } });
}

export { Color };
//# sourceMappingURL=color.js.map
